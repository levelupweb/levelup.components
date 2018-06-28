import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.less";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<input
				type="search"
			/>
		);
	}
}

Search.propTypes = {

};

Search.defaultProps = {

};

export default Search;
