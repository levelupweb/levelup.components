import React from "react";
import styles from "./styles/index.less";
import Item from "./components/Item";

export const className = (props) => {
	const { horizontal, fluid, bordered } = props;
  
	return `
    ${styles.wrapper} 
    ${horizontal && styles.horizontal} 
    ${fluid && styles.fluid}
    ${bordered && styles.bordered}
  `;
};

export const mapItems = (as, style, className) => (item, i) => {
	return (
		<Item 
			item={item}
			as={as} 
			className={className}
			style={style}
			key={i} 
		/>
	);
};

