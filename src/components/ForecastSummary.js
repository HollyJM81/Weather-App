import React from "react";

// We need to render the date, description, icon and max temperature for a day.
// Don't worry for now about "plugging in" the component in the application. It will be displayed as an item in a list later, which we will cover in the next steps.
// Build dummy components (rendering just an empty <div> with the appropriate className) and initiate tests with a describe block.
// 2. Expected props
// Back in "Thinking in Components" step, we said in the walkthrough that this component would take 4 props - date, temperature, description and icon. Your challenge is to access these 4 pieces of information.
// 🤔 Check with the design which value for the temperature you should use - min or max?
// 🤔 Check how to display units for temperature yourself 💪.
// 3. Add markup for each forecast summary detail
// As guidance, each prop should be rendered inside of a <div>. Add classNames to these <div/>s to help you select the elements in your tests.
// 💡 Finding the right names for elements is one of the hardest things in development, which is why developers started creating naming conventions. BEM (Block-Element-Modifier) is one of the most popular ones for class names. Check the linked documentation and try to use it 😉.

function ForecastSummary(props) {
	const { date, temperature, description, icon } = props;
	return (
		<div className="forecast">{`Here is the forecast data: ${date}, ${temperature}, ${description}, ${icon}
		`}</div>
	);
}

export default ForecastSummary;
