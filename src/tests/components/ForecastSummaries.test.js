/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

const forecastArray = [
	{
		date: 1111111,
		description: "Stub description",
		icon: "stubIcon",
		temperature: {
			min: 8,
			max: 22,
		},
	},
	{
		date: 2111111,
		description: "Stub description",
		icon: "stubIcon",
		temperature: {
			min: 9,
			max: 23,
		},
	},
	{
		date: 3111111,
		description: "Stub description",
		icon: "stubIcon",
		temperature: {
			min: 10,
			max: 24,
		},
	},
	{
		date: 4111111,
		description: "Stub description",
		icon: "stubIcon",
		temperature: {
			min: 11,
			max: 25,
		},
	},
	{
		date: 5111111,
		description: "Stub description",
		icon: "stubIcon",
		temperature: {
			min: 12,
			max: 26,
		},
	},
];

describe("ForecastSummaries", () => {
	const validProps = {
		forecasts: forecastArray,
	};

	// snapshot testing

	it("renders correctly", () => {
		const { asFragment } = render(
			<ForecastSummaries forecasts={validProps.forecasts} />
		);
		expect(asFragment()).toMatchSnapshot();
	});

	// list testing

	it("renders all forecast summaries", () => {
		const { getAllByTestId } = render(
			<ForecastSummaries forecasts={validProps.forecasts} />
		);

		expect(getAllByTestId("forecast-summary")).toHaveLength(5);
	});
});
