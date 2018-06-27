import React from "react";
import PropTypes from "prop-types";
import compStyles from "./styles.less";

class Title extends React.Component {
	render() {
		const { 
			subheader,
			as,
			header,
			styles,
			fontWeight,
			className,
		} = this.props;

		if (!header) {
			return null;
		}

		return (
			<header 
				style={styles} 
				className={`${compStyles.wrapper} ${className}`}
			>
				{React.createElement(as, {
					className: `${compStyles.title}`,
					style: { fontWeight }
				}, [
					header,
					subheader && <span className="subheader">{subheader}</span>
				])}
			</header>
		);
	}
}

Title.propTypes = {
	as: PropTypes.string,
	subheader: PropTypes.string,
	header: PropTypes.string,
	fontWeight: PropTypes.number,
	className: PropTypes.string,
	styles: PropTypes.object,
};

Title.defaultProps = {
	header: null,
	isBold: false,
	subheader: null,
	className: "",
	styles: {},
	fontWeight: 400,
	as: "h1"
};

export default Title;