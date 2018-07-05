import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Typography, Menu, Button, Loader, Logo, Divider } from "levelup-components";
//import { Container } from "../../../../../lib/src";

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

			<Divider />

			<Button isLoading>123</Button>
			<Button isPrimary isLoading >I'm primary</Button>
			<Button isSecondary isLoading>123</Button> 
			<Button isBlack isLoading >123</Button>
			<Button isPositive isLoading>123</Button> 
			<Button isNegative isLoading>123</Button> 
			<Button isTransparent isLoading>123</Button>

			<Divider text/>

			<Loader active />
			<Loader active compact isBlack/>

			<Logo src="https://avatars0.githubusercontent.com/u/16275699?s=200&v=4" />
			<Logo src="https://www.google.ru/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" isLong />
			<Logo src="https://avatars0.githubusercontent.com/u/16275699?s=200&v=4" isSmall />
			<Logo src="https://www.google.ru/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" isLong isSmall/>

			<div style={{display: "flex", height: 200 + "px"}}>
				<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
				<Divider icon="pen" src="https://avatars0.githubusercontent.com/u/16275699?s=200&v=4" vertical/>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
			</div>
			
			

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

Header.propTypes = {
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};

export default withRouter(Header);
