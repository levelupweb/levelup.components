import styles from "./styles/index.less";


export const className = ({
	className,
	compact,
	isBlack,
	isDefault,
	isLight,
	isAbsolute
}) => `
  ${className}
  ${styles.loader}
  ${compact && styles.compact}
  ${isBlack && styles.black}
  ${isLight && styles.light}
  ${isDefault && styles.default}
  ${isAbsolute && styles.absolute}
`;