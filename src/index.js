import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import forecast from "./data/forecast.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App forecasts={forecast.forecasts} location={forecast.location} />
	</React.StrictMode>
);
