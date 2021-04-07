import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Layout link", () => {
	render(<App />);
	const linkElement = screen.getByText(/Smartfrog & Canary/i);
	expect(linkElement).toBeInTheDocument();
});
