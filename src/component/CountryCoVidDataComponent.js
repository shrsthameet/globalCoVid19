import React from "react";
import {Row, Col, Statistic, Spin} from "antd";

const cardStyle = {
	background: "#ffffff",
	padding: 25,
	textAlign: "center",
	border: "1px solid #D3D3D3"
};

const CountryCoVidDataComponent = (props) => {
	const {countryStat, isLoading} = props;
	return (
		<Row style={cardStyle}>
			{countryStat.map(data => {
				const {total_cases, active_cases, total_deaths, total_recovered} = data;
				return (
					<>
						{isLoading ? (
							<Spin style={{margin: "auto"}} size='large'/>
						) : (
							<>
								<Col span={6}>
									<Statistic title='Total Cases' value={`${total_cases}` || 0}/>
								</Col>
								<Col span={6}>
									<Statistic title="Active Cases" value={active_cases}/>
								</Col>
								<Col span={6}>
									<Statistic title="Total Deaths" value={total_deaths}/>
								</Col>
								<Col span={6}>
									<Statistic title="Total Recovered" value={total_recovered}/>
								</Col>
							</>)
						}
					</>
				);
			})}
		</Row>
	);
};

export default CountryCoVidDataComponent;
