import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Typography, Menu, Button, Inputs } from "levelup-components";
import Form from "../../../../../lib/src/components/Form";



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
			<Inputs.DropDown  options={[
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
			<Inputs.TextInput label="Input me" />
			<Inputs.TextArea label="Textarea" />
			<Inputs.Search label="Search..." />
			<Inputs.CheckBox value={true}/>
			<Inputs.Radio />
			<Inputs.FileLoad />
			<Form />
		</div>
	);
};

Header.propTypes = {
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};

export default withRouter(Header);
