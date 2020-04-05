import React, {useEffect, useState, useContext} from "react";

import {CoVidByCountryContext} from "../ContextAPI/CovVidByCountryContext";

import CountrySearchFormComponent from "./CountrySearchFormComponent";
import CountryCoVidDataComponent from "./CountryCoVidDataComponent";
import CountryCoVidDataLoading from "./CountryCoVidDataLoading";

import {Form, Col} from "antd";


const CoVidDataByCountryComponent = () => {
	//	State
	const [show, setShow] = useState(false);

	//	Importing data from CoVidByCountryContext after fetching API
	const {fetchData, countryStat, isLoading} = useContext(CoVidByCountryContext);

	const [form] = Form.useForm();
	const [, forceUpdate] = useState(); // To disable submit button at the beginning.

	useEffect(() => {
		forceUpdate({});
	}, []);

	//	Trigger submit event and send data entered by user to CoVidByCountryContext to fetch API
	const handleSubmit = (values) => {
		const country = values.country;
		fetchData(country);
		setShow(true);
	};

	return (
		<>
			<Col>
				<Form form={form} onFinish={handleSubmit} initialValues={{remember: true}}>
					<CountrySearchFormComponent form={form}/>
				</Form>
				{show ? (<CountryCoVidDataComponent isLoading={isLoading} countryStat={countryStat}/>
				) : (<CountryCoVidDataLoading/>)}
			</Col>

		</>
	);
};

export default CoVidDataByCountryComponent;
