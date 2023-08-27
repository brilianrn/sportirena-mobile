import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

export interface ButtonProps {
  label: string;
  rightIcon?: boolean;
  icon?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  onClick: () => void;
  isDisable?: boolean;
  btnType: "button" | "submit" | "reset";
  type:
    | "primary"
    | "danger"
    | "info"
    | "outline-primary"
    | "outline-secondary"
    | "secondary"
    | "warning"
    | "disabled";
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
