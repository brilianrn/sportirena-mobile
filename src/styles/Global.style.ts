import { StyleSheet } from "react-native";

export const fontFamily = "IBM Plex Sans Regular";

export const colorDanger = "#CC3434";
export const colorPrimary = {
  default: "#004A2F",
};
export const colorGray = {
  400: "#737374",
  600: "#004A2F",
};
export const colorBlue = {
  500: "#2667C5",
};

export const Global = StyleSheet.create({
  label: {
    fontFamily,
    fontWeight: "700",
    fontSize: 12,
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  iconWarning: {
    maxHeight: 15,
  },
  justifyBetween: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  justifyStart: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    display: "flex",
  },
  justifyCenter: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    display: "flex",
  },
});
