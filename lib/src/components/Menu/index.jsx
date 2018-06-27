import React from "react";
import PropTypes from "prop-types";
import itemShape from "./components/Item/shape";

import {
	className,
	mapItems
} from "./utils";

import {
	DIRECTION_HORIZONTAL,
	DIRECTION_VERTICAL,
} from "./consts";

class Menu extends React.Component {
	renderItems() {
		const { 
			items,
			itemAs,
			itemStyle,
			itemClassName
		} = this.props;

		return items.map(mapItems(itemAs, itemStyle, itemClassName));
	}
  
	render() {
		const {
			items,
			style,
			as,
		} = this.props;
    
		if (!items || items.length === 0) {
			return null;
		}
    
		return (
			<nav>
				{React.createElement(as, {
					className: className(this.props),
					style,
				}, this.renderItems())}
			</nav>
		);
	}
}

Menu.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape(itemShape)),
	as: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	itemAs: PropTypes.string,
	itemClassName: PropTypes.string,
	itemStyle: PropTypes.object,
	direction: PropTypes.oneOf([
		DIRECTION_HORIZONTAL,
		DIRECTION_VERTICAL,
	]),
	bordered: true,
};

Menu.defaultProps = {
	direction: DIRECTION_VERTICAL,
	as: "ul",
	className: "",
	style: {},
	itemAs: "li",
	itemClassName: "",
	itemStyle: {},
	bordered: false,
};

export default Menu;