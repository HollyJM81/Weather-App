/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
	const validProps = {
		date: 1111111,
		description: "Stub description",
		icon: "stubIcon",
		temperature: {
			min: 8,
			max: 22,
		},
	};

	it("renders correctly", () => {
		const { asFragment } = render(
			<ForecastSummary
				date={validProps.date}
				icon={validProps.icon}
				temperature={validProps.temperature}
				description={validProps.description}
			/>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it("render correct values for props", () => {
		const { getByText, getByTestId } = render(
			<ForecastSummary
				date={validProps.date}
				icon={validProps.icon}
				description={validProps.description}
				temperature={validProps.temperature}
			/>
		);

		expect(getByText("Thu 1st Jan")).toHaveAttribute(
			"class",
			"forecast-summary__date"
		);
		expect(getByText("Stub description")).toHaveAttribute(
			"class",
			"forecast-summary__description"
		);
		expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
		expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
	});
});
