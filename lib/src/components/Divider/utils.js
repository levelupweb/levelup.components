import styles from "./styles/index.less";


export const className = ({
	className,
	text,
	icon,
	vertical,
}) => `
  ${className}
  ${styles.divider}
  ${text && styles.text}
  ${icon && styles.textIcon}
  ${vertical && styles.vertical}
`;