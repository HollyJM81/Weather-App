import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
	it("renders the correct date and temperature props", () => {
		const { getByText } = render(
			<ForecastSummary
				date="01/01/2024"
				temperature="25 degrees"
				description="sweaty"
				icon="sun"
			/>
		);
		// eslint-disable-next-line testing-library/prefer-screen-queries
		expect(getByText("Here is the forecast data")).toBeInstanceOf(
			HTMLDivElement
		);
	});
});
