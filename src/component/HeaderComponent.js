import React from "react";
import {PageHeader} from "antd";

const HeaderComponent = () => {
	return (
		<>
			<PageHeader
				avatar={
					{
						size: 'large',
						src: 'https://images.unsplash.com/flagged/photo-1584036561584-b03c19da874c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
					}
				}
				title="Global COVID-19 Cases"
			/>
		</>
	);
};

export default HeaderComponent;
