import { Dimensions, StyleSheet } from "react-native";

export const fontFamily = "IBM Plex Sans Regular";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const colorDanger = {
  default: "#CC3434",
  lighter: "#FCE3D6",
};
export const colorWarning = {
  default: "#FFC32B",
  lighter: "#FFF8EF",
  darker: "#904E01",
};
export const colorPrimary = {
  50: "#DFE7E5",
  100: "#d0ede2",
  200: "#A7E0CB",
  250: "#B8D5C6",
  300: "#6CE56E",
  default: "#004A2F",
  lighter: "#12563E",
};
export const colorInfo = {
  lighter: "#F0F7FF",
  darker: "#2371C6",
};
export const colorGray = {
  100: "#FAFAFA",
  150: "#F0F1F7",
  200: "#F5F5F5",
  300: "#EBEBEB",
  400: "#C5C7CD",
  500: "#737374",
  600: "#555555",
  700: "#1A1A1A",
};
export const colorBlue = {
  500: "#2667C5",
};
export const colorDark = {
  500: "#363740",
  600: "#221E5F",
  700: "#1E1E1E",
  default: "#252733",
};
export const colorBrown = {
  default: "#6D6262",
};

export const Global = StyleSheet.create({
  label: {
    // fontFamily,
    fontWeight: "700",
    fontSize: 12,
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  textDescription: {
    color: colorDark[700],
    fontSize: 10,
    lineHeight: 16.19,
  },
  iconWarning: {
    maxHeight: 15,
  },
  centerHorizontaly: {
    justifyContent: "center",
    alignItems: "center",
  },
  justifyBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  justifyStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
    display: "flex",
  },
  justifyEnd: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    display: "flex",
  },
  justifyCenter: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    display: "flex",
  },
  truncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});
