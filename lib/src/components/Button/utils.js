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
  ${!!icon && styles.icon} 
`;