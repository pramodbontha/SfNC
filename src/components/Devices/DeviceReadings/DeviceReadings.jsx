import React from "react";
import Paper from "@material-ui/core/Paper";
import ApexCharts from "../../Charts/ApexCharts";

const DeviceReadings = (props) => {
	const { graphData } = props;
	const temperature = graphData.temperature;
	const humidity = graphData.humidity;
	const airQuality = graphData.airQuality;
	return (
		<div>
			<Paper elevation={1}>
				<div>
					<div
						style={{
							backgroundColor: "#3f51b5",
							color: "white",
							padding: "15px 10px",
							marginBottom: "10px",
							height: "55px",
						}}
					>
						Device Readings: {props.device}
					</div>

					{temperature && temperature.xAxis.length ? (
						<ApexCharts type="line" axisData={temperature}></ApexCharts>
					) : (
						<div style={{ padding: "20px" }}>No readings available</div>
					)}
					{humidity && humidity.xAxis.length ? (
						<ApexCharts type="line" axisData={humidity}></ApexCharts>
					) : null}
					{airQuality && airQuality.xAxis.length ? (
						<ApexCharts type="line" axisData={airQuality}></ApexCharts>
					) : null}
				</div>
			</Paper>
		</div>
	);
};

export default DeviceReadings;
