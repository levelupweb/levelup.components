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
		</div>
	);
};

<<<<<<< HEAD
Header.propTypes = {
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};

export default withRouter(Header);
=======
export default Header;
>>>>>>> d4b8d15404549243c14df967e49a5ce8e37683c1
