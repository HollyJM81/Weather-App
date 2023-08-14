import React from "react";
import moment from "moment";

import iconData from "../data/iconData.json";

function ForecastSummary(props) {
	const { date, temperature, description, icon } = props;
	const weatherCode = () => {
		if (icon >= 801) {
			return icon.slice(0, 1) + "01";
		} else {
			return icon.slice(0, 1) + "00";
		}
	};
	return (
		<div className="forecast-summary" data-testid="forecast-summary">
			<div className="forecast-summary__date">
				{moment(date).format("ddd Do MMM")}
			</div>
			<div className="forecast-summary__icon" data-testid="forecast-icon">
				<img src={iconData[weatherCode]} />
			</div>
			<div className="forecast-summary__temperature">
				{temperature.max}&deg;C
			</div>
			<div className="forecast-summary__description">{description}</div>
		</div>
	);
}

export default ForecastSummary;
