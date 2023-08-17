import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  label: string;
  rightIcon?: boolean;
  icon?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  onClick: () => void;
  isDisable?: boolean;
  // btnType = "button",
  type?: "button" | "submit" | "reset";
  isSubmit?: boolean;
  size?: "md" | "sm" | "lg" | "xl";
  iconHeight?: number;
  iconWidth?: number;
  buttonRef?: string;
}

export interface ButtonLinkProps {
  label: string;
  onClick?: () => void;
  href?: string;
}
