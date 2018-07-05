import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Typography, Menu, Button, Input, Form } from "levelup-components";

const Header = ({
	history,
	location
}) => {
	const menuItems = [{
		text: "Главная",
		action() { history.push("/"); },
		isActive: location.pathname === "/"
	}, {
		text: "Скачать",
		action() { history.push("/download"); },
		isActive: location.pathname === "/download"
	}];
	console.log(Form);
	return (
		<div>
			<Menu
				items={menuItems}
				bordered
				horizontal
			/>
			<Button>I'm default</Button>
			<Button isPrimary>I'm primary</Button>
			<Button isSecondary>I'm Secondary</Button>
			<Button isBlack>I'm Black Button</Button>
			<Button isPositive>I'm Positive Button</Button>
			<Button isNegative>I'm Negative Button</Button>
			<Button isTransparent>I'm Transparent Button</Button>
			<Typography.Title
				fontWeight={900}
				as="h1"
				header="Hello World"
				subHeader="this is subHeader"
			/>
			<Typography.Title
				fontWeight={900}
				as="h2"
				header="Hello World"
				subHeader="this is subHeader"
			/>
			<Typography.Title
				fontWeight={900}
				as="h3"
				header="Hello World"
				subHeader="this is subHeader"
			/>
			<Typography.Title
				fontWeight={900}
				as="h4"
				header="Hello World"
				subHeader="this is subHeader"
			/>
			<Typography.Title
				fontWeight={900}
				as="h5"
				header="Hello World"
				subHeader="this is subHeader"
			/>
			<Typography.Title
				fontWeight={900}
				as="h6"
				header="Hello World"
				subHeader="this is subHeader"
			/>
			<Input.DropDown  options={[
				{
					text: "Gunslinger #1",
					value: "Roland",
					key: "roland",
				},
				{
					text: "Gunslinger #2",
					value: "Eddie",
					key: "eddie"
				},
				{
					text: "Gunslinger #3",
					value: "Jake",
					key: "jake"
				}
			]} />
			<Input.TextInput label="Input me" />
			<Input.TextArea label="Textarea" />
			<Input.Search label="Search..." />
			<Input.CheckBox label="Some checkbox label"/>
			<Input.Radio
				options={[
					{
						text: "Test 1",
						key: "1",
						value: "test",
					},
					{
						text: "Test 2",
						key: "2",
						value: "test2",
					},
					{
						text: "Test 3",
						key: "3",
						value: "test3",
					}
				]}
			/>
			<Input.FileLoad />
			<Form.Form
				formName="Form Header"
				buttonText="Send Form"
			>
				<Form.Fieldset legend="Personal">
					<Input.TextInput label="Name" />
					<Input.TextInput label="Patronymic" />
					<Input.TextInput label="Surname" />
				</Form.Fieldset>
				<Form.Fieldset legend="Contacts">
					<Input.TextInput label="Phone" />
					<Input.TextInput label="E-mail" />
					<Input.TextInput label="Telegram" />
				</Form.Fieldset>
				<Form.Fieldset legend="Something">
					<Input.TextInput label="Else" />
					<Input.TextInput label="Whatever" />
					<Input.TextInput label="Anything" />
				</Form.Fieldset>
				<Form.Fieldset legend="Parameters">
					<Input.CheckBox label="First parameter" />
					<Input.CheckBox label="Second parameter" />
					<Input.CheckBox label="Third parameter" />
				</Form.Fieldset>
				<Form.Fieldset Legend="Load Files here">
					<Input.FileLoad />
				</Form.Fieldset>
				<Form.Fieldset legend="Your Feedback">
					<Input.TextArea label="Put your thoughts here" />
				</Form.Fieldset>
			</Form.Form>
		</div>
	);
};

Header.propTypes = {
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};

export default withRouter(Header);
