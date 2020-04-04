import React, {useState, useEffect} from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";
import {compose, withProps} from "recompose";
import axios from "axios";

const CoVidWorldMapComponent = compose(
	withProps({
		googleMapURL:
			"https://maps.googleapis.com/maps/api/js?key=AIzaSyB7exZMUKU7pPZifDhZq1x3qplK1Cxk6AE&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{height: `100%`}}/>,
		containerElement: <div style={{height: `53vh`}}/>,
		mapElement: <div style={{height: `100%`}}/>
	}),
	withScriptjs,
	withGoogleMap
)(() => {
	const [country, setCountry] = useState([]);

	// Fetching API
	async function fetchData() {
		const response = await axios({
			method: "GET",
			url:
				"https://corona.lmao.ninja/countries?fbclid=IwAR3mzozGuX74TDJ4YIJ-wTJgMW1Gzmdinq5-Qfqtad80LQuW2Hh1zdxfuUU"
		});
		const data = await response.data;
		setCountry(data);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<GoogleMap
			defaultZoom={4}
			defaultCenter={{lat: 26.4831, lng: 80.33333}}
		>
			{country.map((res, i) => {
				const {countryInfo, cases} = res;
				const {long, lat, _id} = countryInfo;
				return (
					<Marker key={_id} position={{lat: lat, lng: long}}/>
				);
			})}
		</GoogleMap>
	);
});
export default CoVidWorldMapComponent;
