import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Typography, Menu } from "levelup-components";

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
			<Typography.Title 
				fontWeight={900}
				as="h1" 
				header="Hello World" 
				subheader="this is subheader" 
			/> 
			<Typography.Title 
				fontWeight={900}
				as="h2" 
				header="Hello World" 
				subheader="this is subheader" 
			/> 
			<Typography.Title 
				fontWeight={900}
				as="h3" 
				header="Hello World" 
				subheader="this is subheader" 
			/> 
			<Typography.Title 
				fontWeight={900}
				as="h4" 
				header="Hello World" 
				subheader="this is subheader" 
			/> 
			<Typography.Title 
				fontWeight={900}
				as="h5" 
				header="Hello World" 
				subheader="this is subheader" 
			/> 
			<Typography.Title 
				fontWeight={900}
				as="h6" 
				header="Hello World" 
				subheader="this is subheader" 
			/>
		</div>
	);
};

Header.propTypes = {
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};

export default withRouter(Header);