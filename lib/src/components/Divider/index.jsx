import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";
import Icon from "../Icon";
import { className } from "./utils";

class Divider extends React.Component {
	constructor(props) {
		super(props);
	}

	renderChilds() {
		const {
			src,
			text,
			icon,
		} = this.props;
    
		if (text) {
			return [
				<div key={1} className={styles.divLeft} />,
				<div key={2} className={styles.divText}>or</div>,
				<div key={3} className={styles.divRight} />
			];
		}
    
		if (icon) {
			return [
				<div key={1} className={styles.divLeft} />,
				<div key={2} className={styles.divIcon}>
					<Icon icon={icon} size={18} />
				</div>,
				<div key={3} className={styles.divText}>or</div>,
				<div key={4} className={styles.divRight} />
			];
		}
    
		return [
			<div key={1} className={styles.divLeft} />,
			<div key={2} className={styles.divRight} />
		];
	}

	render() {
		const { as, style } = this.props;

		return React.createElement(
			as,
			{
				style,
				className: className(this.props)
			},
			this.renderChilds()
		);
	}
}

Divider.propTypes = {
	as: PropTypes.string,
	style: PropTypes.object,
	className: PropTypes.string,
	text: PropTypes.bool,
	icon: PropTypes.string,
	vertical: PropTypes.bool,
	src: PropTypes.string,
};

Divider.defaultProps = {
	as: "div",
	style: {},
	className: "",
	text: false,
	icon: false,
	vertical: false,
	src: null,
};

export default Divider;
