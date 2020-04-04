import React from "react";
import {Col, Card, Statistic} from "antd";

const CardComponent = (props) => {
	const {title, cases, color, image, textColor} = props;

	const cardStyle = {
		background: color,
		border: "none",
		borderRadius: 3,
		textAlign: "center",
		// marginTop: 20
	};

	return (
		<Col span={12}>
			<Card hoverable style={cardStyle}
			>
				<img src={`${image}`} alt='totalCase' style={{height: 50, width: 50, marginBottom: 10}}/>
				<Statistic
					title={title}
					value={cases}
					valueStyle={{color: textColor}}
					// prefix={<img src='/images/patient.png' alt='totalCase' style={{height: 30, width: 30}} />}
					// suffix="%"
				/>
			</Card>
		</Col>
	);
};

export default CardComponent;
