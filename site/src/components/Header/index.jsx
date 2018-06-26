import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<ul>
				<li><Link to="/">Главная</Link></li>
				<li><Link to="/download">Скачать</Link></li>
			</ul>
		</div>
	);
};

export default Header;