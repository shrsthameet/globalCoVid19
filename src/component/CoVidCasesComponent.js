import React, {useContext} from "react";
import {CoVidCaseContext} from "../ContextAPI/CoVidCaseContext";

import CardComponent from "../reusableComponents/CardComponent";

import {Row} from "antd";


const CoVidCasesComponent = () => {
	//	Importing data from CoVidCaseContext after fetching API
	const {coVidCases} = useContext(CoVidCaseContext);
	const {total_cases, total_deaths, total_recovered, new_cases} = coVidCases;
	return (
		<>
			<Row gutter={16}>
				<CardComponent
					title='Total Confirmed Cases'
					cases={total_cases}
					color='#e6f7ff'
					image='/images/patients.png'
					textColor='#000000'
				/>

				<CardComponent
					title='Total Recovered Cases'
					cases={total_recovered}
					color='#eaff8f'
					image='/images/recovered.png'
					textColor='#000000'
				/>
			</Row>

			<Row gutter={16} style={{marginBottom: 20, marginTop: 10}}>
				<CardComponent
					title='Total Deaths'
					cases={total_deaths}
					color='#f5222d'
					image='/images/totalDeaths.png'
					textColor='#ffffff'
				/>

				<CardComponent
					title='New Cases'
					cases={new_cases}
					color='#b5f5ec'
					image='/images/hospital-bed.png'
					textColor='#000000'
				/>
			</Row>
		</>

	);
};

export default CoVidCasesComponent;
