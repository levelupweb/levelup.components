import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<input
				className={styles.search}
			/>
		);
	}
}

Search.propTypes = {
	type: PropTypes.string
};

Search.defaultProps = {
	type: "search"
};

export default Search;
