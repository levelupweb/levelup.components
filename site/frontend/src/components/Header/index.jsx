import React from "react";
import { Link } from "react-router-dom";
import { Button } from "levelup-components";

const Header = () => {
	return (
		<div>
			<ul>
				<li><Link to="/">Главная</Link></li>
				<li><Link to="/download">Скачать</Link></li>
			</ul>
			<Button label="hello" />
		</div>
	);
};

export default Header;