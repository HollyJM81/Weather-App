import React from "react";
import moment from "moment";

import { weather } from "../data/iconData.json";
console.log(weather);

let weatherId;

function ForecastSummary(props) {
	const { date, temperature, description, icon } = props;
	const weatherCode = () => {
		if (icon >= 801) {
			weatherId = icon.slice(0, 1) + "01";
		} else {
			weatherId = icon.slice(0, 1) + "00";
		}
	};
	weatherCode(icon);
	console.log(weatherId);
	// still not locating the icon properly... we need to grab the icon that corresponds to
	// the id matching the updated weatherId;
	let filtered = weather.filter((row) => row.id);
	console.log(filtered);

	// the above gives us an unchanged array

	// make dummyUrl = the value of the "icon" key, matching the id value.
	const dummyURL = `https://openweathermap.org/img/wn/10d@2x.png`;

	return (
		<div className="forecast-summary" data-testid="forecast-summary">
			<div className="forecast-summary__date">
				{moment(date).format("ddd Do MMM")}
			</div>
			<div className="forecast-summary__icon" data-testid="forecast-icon">
				<img alt="weather icon" src={dummyURL} />
			</div>
			<div className="forecast-summary__temperature">
				{temperature.max}&deg;C
			</div>
			<div className="forecast-summary__description">{description}</div>
		</div>
	);
}

export default ForecastSummary;
