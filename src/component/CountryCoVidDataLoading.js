import React from "react";
import {Row, Col, Statistic} from "antd";

const cardStyle = {
	background: "#ffffff",
	padding: 30,
	textAlign: "center",
	border: "1px solid #D3D3D3"
};

const CountryCoVidDataLoading = () => {
	return (
		<Row style={cardStyle}>
			<Col span={6}>
				<Statistic title='Total Cases' value={0}/>
			</Col>
			<Col span={6}>
				<Statistic title="Active Cases" value={0}/>
			</Col>
			<Col span={6}>
				<Statistic title="Total Deaths" value={0}/>
			</Col>
			<Col span={6}>
				<Statistic title="Total Recovered" value={0}/>
			</Col>
		</Row>
	);
};

export default CountryCoVidDataLoading;
