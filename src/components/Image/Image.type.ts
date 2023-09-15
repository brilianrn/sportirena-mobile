import { ImageStyle, StyleProp } from "react-native";

export interface ImageProps {
  src: string;
  height?: number;
  width?: number;
  style?: StyleProp<ImageStyle>;
  useBaseUrl?: boolean;
}
