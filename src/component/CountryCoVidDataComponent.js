import React from "react";
import {Row, Col, Spin, Card} from "antd";

const CountryCoVidDataComponent = (props) => {
	const {countryStat, isLoading} = props;
	return (
		<>
			{countryStat.map(data => {
				const {total_cases, active_cases, total_deaths, total_recovered, new_cases} = data;
				console.log("codid country", total_cases, active_cases, total_deaths, total_recovered, new_cases);
				return (
					<>

						<Card>
							<Row>
								{isLoading ? (
									<Spin style={{margin: "auto"}} size='large'/>
								) : (
									<>
										<Col span={16}>
											<p>Total Cases:</p>
											<p>Total Recovered:</p>
											<p>Total Deaths:</p>
											<p>Active Cases:</p>
											<p>New Cases</p>
										</Col>
										<Col span={8}>
											<p>{`${total_cases}` || 0}</p>
											<p>{`${total_recovered}` || 0}</p>
											<p>{`${total_deaths}` || 0}</p>
											<p>{`${active_cases}` || 0}</p>
											<p>{`${new_cases}` || 0}</p>
										</Col>
									</>)
								}
							</Row>
						</Card>

					</>
				);
			})}
		</>
	);
};

export default CountryCoVidDataComponent;
