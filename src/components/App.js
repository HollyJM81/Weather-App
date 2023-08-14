import React from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

function App({ forecasts, location, iconData }) {
	console.log(iconData);
	return (
		<div className="weather-app">
			<LocationDetails city={location.city} country={location.country} />
			<ForecastSummaries forecasts={forecasts} />
			<icons iconData={iconData} />
		</div>
	);
}

export default App;
