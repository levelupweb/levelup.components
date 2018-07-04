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

	render() {
		return (
			<fieldset
				className={styles.fieldset}
			>
				{this.renderLegend()}
			</fieldset>
		);
	}
}

Fieldset.propTypes = {
	legend: PropTypes.string
};

Fieldset.defaultProps = {
	legend: null
};

export default Fieldset;
