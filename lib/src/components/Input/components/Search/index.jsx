import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";
import TextInput from "../Text";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ""
		};
	}

	handleInput(data) {
		const { value } = data;
		const { onChange } = this.props;

		this.setState({ query: value }, () => {
			onChange(data);
			this.handleSearch();
		});
	}

	handleSearch() {
		const { onSearch } = this.props;
		const { query } = this.state;


		if (typeof onSearch === "function") {
			onSearch(query);
		}
	}
	render() {
		const { label } = this.props;

		return (
			<div className={styles.search} >
				<TextInput
					className={styles.field}
					type="search"
					icon="search"
					onChange={this.handleInput}
					label={label}
				/>
			</div>
		);
	}
}

Search.propTypes = {
	type: PropTypes.string,
	onSearch: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string,
};

Search.defaultProps = {
	type: "search",
	label: null,
};

export default Search;
