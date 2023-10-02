import { Control } from "react-hook-form";
import { StyleProp, TextStyle } from "react-native";

export type OptionType = {
  value: string;
  key: string;
};

export interface SelectOptionProps {
  options?: string[];
  obtOptions?: OptionType[];
  isOptObj?: boolean;
  control?: Control<any>;
  name?: string;
  value?: string;
  setValue?: (value: string) => void;
  style?: StyleProp<TextStyle>;
  required?: boolean;
  placeholder: string;
  label?: string;
  errorMessage?: string;
}
