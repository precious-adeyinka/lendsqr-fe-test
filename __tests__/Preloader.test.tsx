import React from "react";
import { render, screen } from "@testing-library/react";
import Preloader from "../src/component/global/preloader/Preloader";

describe("Preloader Component", () => {
	it("should render the Preloader component with the expected HTML structure", () => {
		const { container } = render(<Preloader />);

		// check if the component contains the overlay and folding cube elements
		const overlayElement = container.querySelector(".overlay");
		const foldingCubeElement = container.querySelector(".skFoldingCube");
		const cubeElements = container.querySelectorAll(".skCube");

		expect(overlayElement).toBeInTheDocument();
		expect(foldingCubeElement).toBeInTheDocument();
		expect(cubeElements.length).toBe(4);
	});
});
