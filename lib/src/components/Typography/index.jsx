import React from "react";
import PropTypes from "prop-types";

class Typography extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<p>{title}</p>
		);
	}
}

Typography.propTypes = {
	title: PropTypes.string
};

Typography.propTypes = {
	title: "Пустой тайтл"
};

export default Typography;