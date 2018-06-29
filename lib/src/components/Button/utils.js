import styles from "./styles/index.less";


export const className = ({
	isDefault,
	isPrimary,
	isNegative,
	isPositive,
	isFluid,
	isSecondary,
	isBlack,
	isTransparent,
	isLoading,
	icon,
	className
}) => `
  ${styles.button}
  ${className}
  ${isDefault && styles.default}
  ${isPrimary && styles.primary}
  ${isNegative && styles.negative} 
  ${isPositive && styles.positive} 
  ${isBlack && styles.black}
  ${isFluid && styles.fluid} 
  ${isSecondary && styles.secondary} 
  ${isTransparent && styles.transparent}
  ${isLoading && styles.loading}
  ${!!icon && styles.icon} 
`;