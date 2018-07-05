import styles from "./styles/index.less";


export const className = ({
	className,
	text,
	textIcon,
	vertical,
}) => `
  ${className}
  ${styles.divider}
  ${text && styles.text}
  ${textIcon && styles.textIcon}
  ${vertical && styles.vertical}
`;