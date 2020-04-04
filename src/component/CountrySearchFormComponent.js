import React from "react";
import {Button, Form, Input} from "antd";
import { SearchOutlined } from '@ant-design/icons';

const CountrySearchFormComponent = (props) => {
	const {form} = props;
	return (
		<>
			<Form.Item
				name="country"
				rules={[
					{
						required: true,
						message: "Please input your country!",
					},
				]}
			>
				<Input
					size='large'
					placeholder='Search for your country'
					autoComplete='off'
					suffix={<SearchOutlined />}
				/>
			</Form.Item>
			<Form.Item shouldUpdate>
				{() => (
					<Button
						style={{float: "right"}}
						type="primary"
						size='large'
						htmlType="submit"
						disabled={
							!form.isFieldsTouched(true) ||
							form.getFieldsError().filter(({errors}) => errors.length).length
						}
					>
						Search
					</Button>
				)}
			</Form.Item>
		</>
	);
};

export default CountrySearchFormComponent;
