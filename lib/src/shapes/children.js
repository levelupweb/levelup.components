import PropTypes from "prop-types";

export default PropTypes.oneOfType([
	PropTypes.func,
	PropTypes.node,
	PropTypes.element,
	PropTypes.arrayOf(PropTypes.node),
	PropTypes.arrayOf(PropTypes.func),
	PropTypes.arrayOf(PropTypes.element)
]);