import React from "react";
import {Row, Col, Spin} from "antd";

const LoadingPageComponent = () => {
	return (
		<Row type='flex' justify='center'>
			<Col>
				<Spin
					style={{marginTop: '45vh'}}
					size='large'
					tip="World COVID-19 Cases Tracker"
				/>
			</Col>
		</Row>
	);
};

export default LoadingPageComponent;
