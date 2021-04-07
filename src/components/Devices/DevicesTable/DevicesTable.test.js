import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DevicesTable from "./DevicesTable";

describe("<DevicesTable/>", () => {
	it("renders without crashing", () => {
		render(<DevicesTable />);
	});
	it("shows no devices available if there is empty table data", () => {
		const tableData = [];
		const component = render(
			<DevicesTable tableData={tableData} updateDeviceId={1} />
		);
		const noDevicesEl = component.getByText("No devices available");
		expect(noDevicesEl.textContent).toBe("No devices available");
	});
});
