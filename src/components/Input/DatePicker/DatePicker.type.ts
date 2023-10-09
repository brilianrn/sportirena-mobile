import { Control } from "react-hook-form";
import { StyleProp, ViewStyle } from "react-native";

export interface DatePickerProps {
  control?: Control<any>;
  name?: string;
  value?: Date;
  setValue?: (value: Date) => void;
  style?: StyleProp<ViewStyle>;
  required?: boolean;
  placeholder: string;
  label?: string;
  errorMessage?: string;
  minDate?: Date;
  maxDate?: number;
}
