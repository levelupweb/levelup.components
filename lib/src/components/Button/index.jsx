import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.less";


class Button extends React.Component {
	render() {
		console.log(styles);
		const { label } = this.props;
		return (
			<div className={styles.wrapper}>
				<button className={styles.button}>{label}</button>
			</div>
		);
	}
}

Button.propTypes = {
	label: PropTypes.string
};

Button.propTypes = {
	label: "Без названия"
};

export default Button;