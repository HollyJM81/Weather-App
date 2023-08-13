import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";
import ForecastSummaries from "./ForecastSummaries";

function App({ forecasts, location }) {
	return (
		<div className="forecast">
			<LocationDetails city={location.city} country={location.country} />
			<ForecastSummaries forecast={forecasts} />
		</div>
	);
}

export default App;
