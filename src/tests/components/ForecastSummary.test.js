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
			max: "22",
		},
	};

	it("renders correctly", () => {
		const { asFragment } = render(
			<ForecastSummary
				date={validProps.date}
				description={validProps.description}
				icon={validProps.icon}
				temperature={validProps.temperature}
			/>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it("render correct values for props", () => {
		const { getByText, getByTestId } = render(
			<ForecastSummary
				date={validProps.date}
				description={validProps.description}
				icon={validProps.icon}
				temperature={validProps.temperature}
			/>
		);

		expect(getByText("Thu Jan 01 1970")).toHaveAttribute(
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

// import React from "react";
// import { render } from "@testing-library/react";
// import ForecastSummary from "../../components/ForecastSummary";

// describe("ForecastSummary", () => {
// 	const dummyForecastData = {
// 		date: 11111111,
// 		temperature: {
// 			max: 22,
// 			min: 4,
// 		},
// 		description: "sweaty",
// 		icon: "sun",
// 	};
// 	it("renders the correct date and temperature props", () => {
// 		const { getByText } = render(
// 			<ForecastSummary
// 				date={dummyForecastData.date}
// 				temperature={dummyForecastData.temperature.max}
// 				description={dummyForecastData.description}
// 				icon={dummyForecastData.icon}
// 			/>
// 		);

// 		expect(
// 			// eslint-disable-next-line testing-library/prefer-screen-queries
// 			getByText("Thu Jan 01 1970")
// 		).toBeInstanceOf(HTMLDivElement);
// 	});
// });
