import React from "react";
import ForecastSummary from "./ForecastSummary";

import "../styles/ForecastSummaries.css";

function ForecastSummaries(props) {
	const { forecasts } = props;
	console.log(forecasts);
	return (
		<div className="forecast-summaries">
			{forecasts.map((forecast) => (
				<ForecastSummary
					key={forecast.date}
					date={forecast.date}
					icon={forecast.icon}
					temperature={forecast.temperature}
					description={forecast.description}
				/>
			))}
		</div>
	);
}

export default ForecastSummaries;
