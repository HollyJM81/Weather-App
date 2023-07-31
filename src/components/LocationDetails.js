// create a component called <LocationDetails />, which uses JSX
// to render values stored in props.city and props.country inside of
// a <h1> tag. Give your <h1> tag an appropriate class name.
// Export the <LocationDetails /> component from the file.

import React from "react";

function LocationDetails(props) {
	const { city, country } = props;
	return <h1 className="location">{`${city}, ${country}`}</h1>;
}

export default LocationDetails;
