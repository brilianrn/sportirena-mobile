import { Control } from "react-hook-form";
import {
  ImageSourcePropType,
  ImageStyle,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
} from "react-native";

export interface InputTextProps {
  control?: Control<any>;
  name?: string;
  value?: string;
  setValue?: (value: string) => void;
  icon?: ImageSourcePropType | string;
  iconPosition?: "right" | "left";
  iconOnClick?: () => void;
  style?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  required?: boolean;
  placeholder: string;
  label?: string;
  type: KeyboardTypeOptions;
  errorMessage?: string;
  iconType?: "text" | "image";
  secureTextEntry?: boolean;
}
