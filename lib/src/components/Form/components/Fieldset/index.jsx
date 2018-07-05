import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class Fieldset extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	renderLegend() {
		const { legend } = this.props;

		if (!legend) {
			return null;
		}

		return (
			<legend className={styles.legend}>
				{legend}
			</legend>
		);
	}

	renderInputs() {
		const { children } = this.props;

		return children;
	}

	render() {
		return (
			<fieldset
				className={styles.fieldset}
			>
				{this.renderLegend()}
				<div className={styles.fields}>
					{this.renderInputs()}
				</div>
			</fieldset>
		);
	}
}

Fieldset.propTypes = {
	legend: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.func,
		PropTypes.element,
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.oneOfType([
			PropTypes.node,
			PropTypes.func,
			PropTypes.element,
			PropTypes.object
		]))
	])
};

Fieldset.defaultProps = {
	legend: null,
	children: null
};

export default Fieldset;
