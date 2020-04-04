import React, {useContext} from "react";
import {Table} from "antd";
import {CoVidWorldDataContext} from "../ContextAPI/CoVidWorldDataContext";

const CoVidWorldDataComponent = () => {
	const {columns, data} = useContext(CoVidWorldDataContext);
	return (
		<>
			<Table
				style={{marginTop: 10}}
				// bordered
				columns={columns}
				dataSource={data}
				pagination={{pageSize: 50}}
				scroll={{y: 240}}
			/>
		</>
	);
};

export default CoVidWorldDataComponent;
