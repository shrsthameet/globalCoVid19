import React, {useContext} from "react";
import {Col, Row} from "antd";
import CoVidInfoContainer from "./CoVidInfoContainer";
import CoVidWorldMapComponent from "../component/CoVidWorldMapComponent";
import CoVidWorldDataComponent from "../component/CoVidWorldDataComponent";
import LoadingPageComponent from "../component/LoadingPageComponent";
import {CoVidCaseContext} from "../ContextAPI/CoVidCaseContext";


const MainPageContainer = () => {
	const {isLoading} = useContext(CoVidCaseContext);
	return (
		<>
			{isLoading ? <LoadingPageComponent/> : (
				<>
					<Row gutter={8}>
						<Col xs={24} sm={24} md={24} lg={15} xl={15} xxl={15}>
							<CoVidWorldMapComponent/>
							<CoVidWorldDataComponent/>
						</Col>

						<Col xs={24} sm={24} md={24} lg={9} xl={9} xxl={9}>
							<CoVidInfoContainer/>
						</Col>
					</Row>
				</>
			)}

		</>
	);
};

export default MainPageContainer;
