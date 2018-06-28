import React from "react";
import PropTypes from "prop-types";
import childrenShape from "../../shapes/children";
import styles from "./styles/index.less";
import { className } from "./utils";
import Icon from "../Icon";
 
class Button extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
	}

	handleClick() {
		const { onClick } = this.props;

		if (onClick && typeof onClick === "function") {
			onClick();
		}
	} 

	handleBlur() {
		const { onBlur } = this.props;

		if (onBlur && typeof onBlur === "function") {
			onBlur();
		}
	} 

	handleMouseDown() {
		const { onMouseDown } = this.props;

		if (onMouseDown && typeof onMouseDown === "function") {
			onMouseDown();
		}
	} 

	handleMouseUp() {
		const { onMouseUp } = this.props;

		if (onMouseUp && typeof onMouseUp === "function") {
			onMouseUp();
		}
	} 

	handleFocus() {
		const { onFocus } = this.props;

		if (onFocus && typeof onFocus === "function") {
			onFocus();
		}
	} 
  
	renderIcon() {
		const { icon } = this.props;

		if (icon) {
			return (
				<Icon 
					icon={icon} 
					size={18} 
				/>
			);
		}

		return null;
	}
  
	renderChild() {
		const { children } = this.props;

		return (
			<span className={styles.inner}>
				{this.renderIcon()}
				{children}
			</span>
		);
	}
  
	render() {
		const {
			as,
			style
		} = this.props;

		return React.createElement(as, {
			className: className(this.props),
			onClick: this.handleClick,
			onBlur: this.handleBlur,
			onMouseUp: this.handleMouseUp,
			onMouseDown: this.handleMouseDown,
			onFocus: this.handleFocus,
			style,
		}, this.renderChild());
	}
  
}

Button.propTypes = {
	onFocus: PropTypes.func,
	onClick: PropTypes.func,
	onMouseDown: PropTypes.func,
	onMouseUp: PropTypes.func,
	onBlur: PropTypes.func,
	isDefault: PropTypes.bool,
	isPrimary: PropTypes.bool,
	isNegative: PropTypes.bool,
	isPositive: PropTypes.bool,
	isFluid: PropTypes.bool,
	isTransparent: PropTypes.bool,
	isSecondary: PropTypes.bool,
	isBlack: PropTypes.bool,
	children: childrenShape.isRequired,
	icon: PropTypes.string,
	as: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
};

Button.defaultProps = {
	onFocus: null,
	onClick: null,
	onMouseDown: null,
	onMouseUp: null,
	onBlur: null,
	isDefault: true,
	isPrimary: false,
	isBlack: false,
	isNegative: false,
	isPositive: false,
	isTransparent: false,
	isFluid: false,
	isSecondary: false,
	children: childrenShape,
	icon: null,
	as: "button",
	className: "",
	style: {},
};

export default Button;