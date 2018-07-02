import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class Radio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<div>
				<div className={styles.radio}>
					<input
						name="radio"
						id="radio"
						type="radio"
					/>
					<span />
					<label htmlFor="radio">Some label for radio</label>
				</div>
				<div className={styles.radio}>
					<input
						name="radio"
						id="radio1"
						type="radio"
					/>
					<span />
					<label htmlFor="radio1">Some label for radio</label>
				</div>
			</div>
		);
	}
}

Radio.propTypes = {
	type: PropTypes.string
};

Radio.defaultProps = {

};

export default Radio;
