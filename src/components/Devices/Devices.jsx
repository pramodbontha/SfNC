import React, { useState, useEffect } from "react";
import { getDevices, getDeviceStatistics } from "../../services/services";
import DevicesTable from "./DevicesTable/DevicesTable";
import Grid from "@material-ui/core/Grid";
import DeviceReadings from "./DeviceReadings/DeviceReadings";

const Devices = () => {
	const [devicesList, setDevicesList] = useState([]);
	const [tableData, setTableData] = useState([]);
	const [deviceId, setDeviceId] = useState("1");
	const [deviceStats, setDeviceStats] = useState([]);
	const [graphData, setGraphData] = useState({});

	useEffect(() => {
		const fetchAllDevices = async () => {
			const response = await getDevices();
			setDevicesList(response);
		};
		fetchAllDevices();
	}, []);

	useEffect(() => {
		const prepareTableData = () => {
			let rows = [];
			for (const device of devicesList) {
				rows.push(createData(device.id, device.name));
			}
			setTableData(rows);
		};

		prepareTableData();
	}, [devicesList]);

	useEffect(() => {
		const fetchDeviceStatistics = async () => {
			const response = await getDeviceStatistics(deviceId);
			setDeviceStats(response);
		};

		fetchDeviceStatistics();
	}, [deviceId]);

	useEffect(() => {
		const prepareGraphData = () => {
			let graphData = {
				temperature: {
					xAxis: [],
					yAxis: [],
					xTitle: "Date",
					yTitle: "Temperature",
				},
				humidity: {
					xAxis: [],
					yAxis: [],
					xTitle: "Date",
					yTitle: "humidity",
				},
				airQuality: {
					xAxis: [],
					yAxis: [],
					xTitle: "Date",
					yTitle: "air quality",
				},
			};
			for (const stat of deviceStats) {
				if (stat.type === "temperature" || stat.type === "tempurature") {
					graphData.temperature.xAxis.push(stat.created);
					graphData.temperature.yAxis.push(parseFloat(stat.value));
				}
				if (stat.type === "humidity") {
					graphData.humidity.xAxis.push(stat.created);
					graphData.humidity.yAxis.push(parseFloat(stat.value));
				}
				if (stat.type === "air_quality") {
					graphData.airQuality.xAxis.push(stat.created);
					graphData.airQuality.yAxis.push(parseFloat(stat.value));
				}
			}
			setGraphData(graphData);
		};

		prepareGraphData();
	}, [deviceStats]);

	const createData = (deviceId, deviceName) => {
		return {
			deviceId,
			deviceName,
		};
	};

	const updateDeviceId = (deviceId) => {
		setDeviceId(deviceId);
	};

	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={12} md={5}>
					<DevicesTable
						data-testid="devicesTable"
						tableData={tableData}
						updateDeviceId={updateDeviceId}
					></DevicesTable>
				</Grid>
				<Grid item xs={12} md={7}>
					<DeviceReadings
						graphData={graphData}
						device={deviceId}
					></DeviceReadings>
				</Grid>
			</Grid>
		</div>
	);
};

export default Devices;
