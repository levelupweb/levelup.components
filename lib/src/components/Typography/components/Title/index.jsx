import React from "react";
import PropTypes from "prop-types";
import compStyles from "./styles.less";

class Title extends React.Component {
	render() {
		const {
			subHeader,
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
					subHeader && <span className="subHeader">{subHeader}</span>
				])}
			</header>
		);
	}
}

Title.propTypes = {
	as: PropTypes.string,
	subHeader: PropTypes.string,
	header: PropTypes.string,
	fontWeight: PropTypes.number,
	className: PropTypes.string,
	styles: PropTypes.object,
};

Title.defaultProps = {
	header: null,
	isBold: false,
	subHeader: null,
	className: "",
	styles: {},
	fontWeight: 400,
	as: "h1"
};

export default Title;
