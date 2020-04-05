import React, {useContext} from "react";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";
import {compose, withProps} from "recompose";
import {CoVidWorldDataContext} from "../ContextAPI/CoVidWorldDataContext";

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
	//	Importing data from CoVidWorldDataContext after fetching API
	const {worldData} = useContext(CoVidWorldDataContext);

	return (
		<GoogleMap
			defaultZoom={4}
			defaultCenter={{lat: 26.4831, lng: 80.33333}}
		>
			{worldData.map(res => {
				const {countryInfo} = res;
				const {long, lat, _id} = countryInfo;
				return (
					<Marker key={_id} position={{lat: lat, lng: long}}/>
				);
			})}
		</GoogleMap>
	);
});
export default CoVidWorldMapComponent;

