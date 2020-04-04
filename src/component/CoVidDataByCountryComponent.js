import React, {useEffect, useState, useContext} from "react";

import {Form, Col} from "antd";
import {CoVidByCountryContext} from "../ContextAPI/CovVidByCountryContext";
import CountrySearchFormComponent from "./CountrySearchFormComponent";
import CountryCoVidDataComponent from "./CountryCoVidDataComponent";
import CountryCoVidDataLoading from "./CountryCoVidDataLoading";


const CoVidDataByCountryComponent = () => {
	const [show, setShow] = useState(false);
	const {fetchData, countryStat, isLoading} = useContext(CoVidByCountryContext);
	const [form] = Form.useForm();
	const [, forceUpdate] = useState(); // To disable submit button at the beginning.

	useEffect(() => {
		forceUpdate({});
	}, []);

	const handleSubmit = (values) => {
		const country = values.country;
		fetchData(country);
		setShow(true);
	};

	return (
		<>
			{/*<Title level={4}>Search your country</Title>*/}
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
