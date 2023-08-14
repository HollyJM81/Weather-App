import React from "react";
import moment from "moment";

function ForecastSummary(props) {
	const { date, temperature, description, icon } = props;

	return (
		<div className="forecast-summary" data-testid="forecast-summary">
			<div className="forecast-summary__date">
				{moment(date).format("ddd Do MMM")}
			</div>
			<div className="forecast-summary__temperature">
				{temperature.max}&deg;C
			</div>
			<div className="forecast-summary__description">{description}</div>
			<div className="forecast-summary__icon" data-testid="forecast-icon">
				{icon}
			</div>
		</div>
	);
}

export default ForecastSummary;
