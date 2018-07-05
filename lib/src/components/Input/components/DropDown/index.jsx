import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/index.less";

class DropDown extends React.Component {
	constructor(props) {
		super(props);
		this.handleDropDown = this.handleDropDown.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.state = {
			isActive: false,
			value: props.value,
		};
	}

	componentDidMount() {
		document.addEventListener("mousedown", this.handleClickOutside);
	}

	componentDidUpdate(_, prevState) {
		const { value } = this.state;
		const { onChange } = this.props;

		if (prevState.value !== value) {
			if (onChange && typeof onChange === "function") {
				onChange();
			}
		}
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			this.setState({
				isActive: false
			});
		}
	}

	handleChange(value) {
		this.setState({
			value
		});
	}

	renderItems() {
		const { options } = this.props;

		if (options && Array.isArray(options)) {
			return options.map(({ value, key, text }) => (
				<li key={key} onClick={this.handleChange.bind(this, value)}>
					{text}
				</li>
			));
		}
		return null;
	}

	handleDropDown(){
		const {isActive} = this.state;
		this.setState({
			isActive: !isActive
		});
	}

	parseValue() {
		const { options } = this.props;

		return options.filter(({ value }) => value === this.state.value)[0];
	}

	render() {
		const parsedValue = this.parseValue();
		const {isActive} =this.state;
		return (
			<ul className={styles.dropDown} ref={this.setWrapperRef}>
				<label
					className={`${parsedValue ? styles.invisible : styles.visible}`}
				>
					Drops
				</label>
				<input
					type="text"
					readOnly
					className={styles.input}
					value={parsedValue && parsedValue.value}
					onClick={this.handleDropDown}
				/>
				<div className={`${isActive ? styles.listActive : styles.list}`}>
					{this.renderItems()}
				</div>
			</ul>
		);
	}
}

DropDown.propTypes = {
	onClick: PropTypes.func,
	options: PropTypes.arrayOf(PropTypes.object),
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	value: PropTypes.string
};

DropDown.defaultProps = {
	options: null,
	value: null,
	onChange: null,
	onBlur: null
};

export default DropDown;
