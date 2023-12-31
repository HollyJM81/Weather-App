import React, { useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ forecasts, location }) {
	const [selectedDate, setSelectedDate] = useState(forecasts[0].date);

	const selectedForecast = forecasts.find(
		(forecast) => forecast.date === selectedDate
	);

	function handleForecastSelect(date) {
		setSelectedDate(date);
	}

	return (
		<div className="weather-app">
			<LocationDetails city={location.city} country={location.country} />
			<ForecastSummaries
				forecasts={forecasts}
				onForecastSelect={handleForecastSelect}
			/>
			<ForecastDetails forecast={selectedForecast} />
		</div>
	);
}

export default App;
