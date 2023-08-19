import { Control } from "react-hook-form";
import { StyleProp, ViewStyle } from "react-native";
import { OptionType } from "../../../../App.type";

export interface InputRadioProps {
  style?: StyleProp<ViewStyle>;
  control?: Control<any>;
  name?: string;
  value?: string;
  setValue?: (value: string) => void;
  options: OptionType[];
  required?: boolean;
  label?: string;
  type: "list" | "row";
}
