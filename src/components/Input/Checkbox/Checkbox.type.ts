import { StyleProp, ViewStyle } from "react-native";

export interface CheckboxProps {
  checked?: boolean;
  setChecked?: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}
