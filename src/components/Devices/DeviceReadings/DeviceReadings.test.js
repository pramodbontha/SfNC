import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DeviceReadings from "./DeviceReadings";

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

describe("<DeviceReadings/>", () => {
	it("renders without crashing", () => {
		render(<DeviceReadings graphData={graphData} />);
	});
	it("shows no readings available if there is empty graph data", () => {
		const component = render(<DeviceReadings graphData={graphData} />);
		const noDevicesEl = component.getByText("No readings available");
		expect(noDevicesEl.textContent).toBe("No readings available");
	});
});
