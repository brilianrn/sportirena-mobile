import { StyleSheet } from "react-native";
import { colorGray, colorPrimary } from "../../../styles/Global.style";

export const RadioStyle = StyleSheet.create({
  optionContainer: {
    gap: 10,
  },
  radioButtonContainerRow: {
    width: "49%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: colorGray[100],
    borderRadius: 8,
  },
  radioButtonContainerList: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    borderWidth: 2,
    borderColor: colorGray[100],
  },
  radioButton: {
    height: 10,
    width: 10,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colorPrimary.default,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 5,
    width: 5,
    borderRadius: 7,
    backgroundColor: colorPrimary.default,
  },
  radioButtonText: {
    fontSize: 12,
    marginLeft: 6,
    letterSpacing: 0.3,
  },
});
