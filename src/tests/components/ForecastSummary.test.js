import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
	const dummyForecastData = {
		date: 11111111,
		temperature: {
			max: 22,
			min: 4,
		},
		description: "sweaty",
		icon: "sun",
	};
	it("renders the correct date and temperature props", () => {
		const { getByText } = render(
			<ForecastSummary
				date={dummyForecastData.date}
				temperature={dummyForecastData.temperature.max}
				description={dummyForecastData.description}
				icon={dummyForecastData.icon}
			/>
		);

		expect(
			// eslint-disable-next-line testing-library/prefer-screen-queries
			getByText("Here is the forecast data: Thu Jan 01 1970, 22˚C, sweaty, sun")
		).toBeInstanceOf(HTMLDivElement);
	});
});
