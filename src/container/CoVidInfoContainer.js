import React from "react";
import HeaderComponent from "../component/HeaderComponent";
import CoVidCasesComponent from "../component/CoVidCasesComponent";
import CoVidDataByCountryComponent from "../component/CoVidDataByCountryComponent";

const CoVidInfoContainer = () => {
	return (
		<>
			<HeaderComponent/>
			<CoVidCasesComponent/>
			<CoVidDataByCountryComponent/>
		</>
	);
};

export default CoVidInfoContainer;
