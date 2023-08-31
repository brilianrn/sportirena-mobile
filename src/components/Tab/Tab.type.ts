import { StyleProp, ViewStyle } from "react-native";
import { OptionType } from "../../../App.type";

export interface TabProps {
  tabs: OptionType[];
  setActiveTab: (value: OptionType) => void;
  activeTab: OptionType;
  style?: StyleProp<ViewStyle>;
}
