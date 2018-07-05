import styles from "./styles/index.less";

export const className = ({
	className,
	isSmall,
	isLong
}) => `
  ${className}
  ${styles.logo}
  ${isSmall && styles.small}
  ${isLong && styles.long}
`;