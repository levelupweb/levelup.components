import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "levelup-components";

const Header = () => {
	return (
		<div>
			<ul>
				<li><Link to="/">Главная</Link></li>
				<li><Link to="/download">Скачать</Link></li>
			</ul>
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

export default Header;
