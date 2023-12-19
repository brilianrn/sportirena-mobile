import { Control } from "react-hook-form";
import { StyleProp, ViewStyle } from "react-native";

export interface DatePickerProps {
  control?: Control<any>;
  name?: string;
  value?: Date;
  setValue?: (value: Date) => void;
  style?: StyleProp<ViewStyle>;
  required?: boolean;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  minDate?: Date;
  maxDate?: number;
  mode?: "date" | "time" | "datetime";
}

export interface DateRangeProps {
  totalDiffDays: number;
  startDate: Date;
  endDate: Date;
  setStartDate: (value: Date) => void;
  setEndDate: (value: Date) => void;
  style?: StyleProp<ViewStyle>;
  displayDaysStyle?: StyleProp<ViewStyle>;
  minDate: Date;
  isDisplayDays?: boolean;
  selectedDate?: string;
  setSelectedDate?: (value: string) => void;
  maxDate?: Date;
  isDisabled?: boolean;
}
