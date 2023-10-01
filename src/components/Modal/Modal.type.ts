import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ModalProps {
  show: boolean;
  setShow: (value: boolean) => void;
  children: ReactNode;
  title?: string;
  description?: string;
  useCloseButton?: boolean;
  style?: StyleProp<ViewStyle>;
}
