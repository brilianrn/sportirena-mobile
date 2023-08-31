import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ShowMoreProps {
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  label?: string;
}
