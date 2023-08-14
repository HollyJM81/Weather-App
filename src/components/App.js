import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";
import ForecastSummaries from "./ForecastSummaries";

function App({ forecasts, location }) {
	console.log(forecasts);
	console.log(location);
	return (
		<div className="forecast">
			<LocationDetails city={location.city} country={location.country} />
			<ForecastSummaries forecasts={forecasts} />
		</div>
	);
}

export default App;
