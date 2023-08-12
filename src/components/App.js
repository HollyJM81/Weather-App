import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

function App(props) {
	const { location, forecast } = props;
	return (
		<div className="weather-app">
			<LocationDetails city={location.city} country={location.country} />
			{/* can't work out how to get ForecastSummary to render */}
		</div>
	);
}

export default App;
