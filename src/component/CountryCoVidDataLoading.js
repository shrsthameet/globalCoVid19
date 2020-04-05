import React from "react";
import {Row, Col, Card} from "antd";

const CountryCoVidDataLoading = () => {
	return (
		<>
			<Card>
				<Row>
					<Col span={16}>
						<p>Total Cases:</p>
						<p>Active Cases:</p>
						<p>Total Deaths:</p>
						<p>Total Recovered:</p>
					</Col>
					<Col span={8}>
						<p>0</p>
						<p>0</p>
						<p>0</p>
						<p>0</p>
					</Col>
				</Row>
			</Card>
		</>
	);
};

export default CountryCoVidDataLoading;
