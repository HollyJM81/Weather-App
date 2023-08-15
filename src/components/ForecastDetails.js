import React from "react";

import moment from "moment";

function ForecastDetails(props) {
	const { forecast } = props;
	const { date, temperature, humidity, wind } = forecast;
	return (
		// render the remainder of the information received - aka formatted date, min and max temperatures, humidity, wind speed and direction.
		<div className="forecast-details">
			<div className="forecast-details__date">
				{moment(date).format("ddd Do MMM")}
			</div>
			<div className="forecast-details__temperatures">
				{temperature.max}&deg;C
				{temperature.min}&deg;C
			</div>
			<div className="forecast-details__humidity">{humidity}</div>
			<div className="forecast-details__wind-speed">{wind.speed}</div>
			<div className="forecast-details__wind-direction">{wind.direction}</div>
		</div>
	);
}

export default ForecastDetails;
