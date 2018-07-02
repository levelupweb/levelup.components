import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class DropDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	handleClick(value) {
		console.log(value);
	}

	renderItems() {
		const { options } = this.props;

		if (options && Array.isArray(options)) {
			return options.map((option) => (
				<li key={option.key} onClick={this.handleClick.bind(this, option.value)}>{option.text}</li>
			))
		}

		return null;
	}

	render() {
		return (
			<ul
				className={styles.dropDown}
			><span>Drops</span>
				<div>
					{this.renderItems()}
					{/* <li>Drop item</li>
					<li>Drop item</li>
					<li className={styles.subMenuCaption}>Sub menu</li>
					<li className={styles.subMenuItem}>Sub menu item</li>
					<li className={styles.subMenuItem}>Sub menu item</li>
					<li className={styles.subMenuItem}>Sub menu item</li>
					<li>Drop item</li>
					<li>Drop item</li>
					<li>Drop item</li>
					<li>Drop item</li>
					<li>Drop item</li>
					*/}
					</div>
			</ul>
		);
	}
}

DropDown.propTypes = {
	onFocus: PropTypes.func
};

DropDown.defaultProps = {
	onFocus: null
};

export default DropDown;
