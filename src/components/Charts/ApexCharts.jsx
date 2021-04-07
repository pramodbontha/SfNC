import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ApexCharts = (props) => {
	const [options, setOptions] = useState({});
	const [series, setSeries] = useState([]);

	useEffect(() => {
		const prepareAxisData = () => {
			if (props.axisData && props.axisData.xAxis.length) {
				let options = {
					xaxis: {
						categories: props.axisData.xAxis,
						title: { text: props.axisData.xTitle },
						labels: {
							formatter: function (value) {
								let newDate = new Date(Date.parse(value));
								return (
									newDate.getDate() +
									"/" +
									newDate.getMonth() +
									"," +
									newDate.getHours() +
									":" +
									newDate.getMinutes() +
									":" +
									newDate.getSeconds()
								);
							},
						},
					},
					yaxis: {
						title: {
							text: props.axisData.yTitle,
							style: { fontWeight: 100 },
						},
						show: true,
						axisBorder: {
							show: true,
							color: "lightgrey",
						},
						axisTicks: {
							show: true,
							borderType: "thin",
							color: "lightgrey",
							width: 6,
						},
					},
				};
				let series = [
					{
						name: props.axisData.yTitle,
						data: props.axisData.yAxis,
					},
				];
				setOptions(options);
				setSeries(series);
			}
		};

		prepareAxisData();
	}, [props]);

	return (
		<div>
			<Chart
				options={options}
				series={series}
				type={props.type}
				width={"100%"}
				height={280}
			/>
		</div>
	);
};

export default ApexCharts;
