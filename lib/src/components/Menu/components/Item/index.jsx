import React from "react";
import PropTypes from "prop-types";
import shape from "./shape";
import styles from "../../styles/index.less";

const ZERO_HREF = "";

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
  
	handleClick(event) {
		const { item: { action } } = this.props;
		event.preventDefault();
    
		if (action && typeof action === "function") {
			action();
		}
	}
  
	renderContent() {
		const { item: { action, text } } = this.props;

		if (action && typeof action === "function") {
			return (
				<a 
					onClick={this.handleClick} 
					className={styles.inner}
					href={ZERO_HREF}
				>
					{text}
				</a>
			);
		}

		return (
			<span className={styles.inner}>
				{text}
			</span>
		);
	}

	render() {
		const { 
			style,
			className,
			item,
			as
		} = this.props;

		if (!item) {
			return null;
		}
    
		return React.createElement(as, {
			className: `
        ${styles.item} 
        ${className} 
        ${item.isActive && styles.active}
      `,
			style
		}, this.renderContent());
	}
}

Item.propTypes = {
	item: PropTypes.shape(shape),
	as: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
};

Item.defaultProps = {
	item: null,
	className: "",
	style: {},
	as: "li",
};

export default Item;