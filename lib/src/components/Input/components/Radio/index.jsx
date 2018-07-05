import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class Radio extends React.Component {
	constructor(props) {
		super(props);
		this.renderLabel = this.renderLabel.bind(this);
		this.renderRadios = this.renderRadios.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			value: props.value,
		};
	}

	handleChange(value) {
		this.setState({
			value
		});
	}

	renderRadios() {
		const {
			options,
		} = this.props;

		if (options && options.length !== 0) {
			return options.map(({ key, text, value }) => (
				<div
					key={key}
					className={`${styles.input} ${this.state.value === value && styles.checked}`}
					onClick={() => this.handleChange(value)}
				>
					{text}
				</div>
			));
		}

		return null;
	}

	render() {
		return (
			<div className={styles.radio}>
				{this.renderRadios()}
			</div>
		);
	}
}

Radio.propTypes = {
	label: PropTypes.string,
	checked: PropTypes.bool,
	value: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.string,
		text: PropTypes.string,
		value: PropTypes.string,
	})),
};

Radio.defaultProps = {
	label: null,
	checked: false,
	options: [],
	value: null,
	onChange: null,
};

export default Radio;
