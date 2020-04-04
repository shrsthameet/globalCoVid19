import React, {useContext} from "react";
import {CoVidCaseContext} from "../ContextAPI/CoVidCaseContext";

import {Row} from "antd";
import CardComponent from "../reusableComponents/CardComponent";

const CoVidCasesComponent = () => {
	const {coVidCases} = useContext(CoVidCaseContext);
	const {cases, deaths, recovered, active} = coVidCases;
	return (
		<>
			<Row gutter={16}>
				<CardComponent
					title='Total Confirmed Cases'
					cases={cases}
					color='#e6f7ff'
					image='/images/patients.png'
					textColor='#000000'
				/>

				<CardComponent
					title='Total Recovered Cases'
					cases={recovered}
					color='#eaff8f'
					image='/images/recovered.png'
					textColor='#000000'
				/>
			</Row>

			<Row gutter={16} style={{marginBottom: 20, marginTop: 10}}>
				<CardComponent
					title='Total Deaths'
					cases={deaths}
					color='#f5222d'
					image='/images/totalDeaths.png'
					textColor='#ffffff'
				/>

				<CardComponent
					title='Active Cases'
					cases={active}
					color='#b5f5ec'
					image='/images/people.png'
					textColor='#000000'
				/>
			</Row>

		</>

	);
};

export default CoVidCasesComponent;
