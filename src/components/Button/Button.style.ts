import { StyleSheet } from "react-native";
import {
  colorBlue,
  colorDanger,
  colorGray,
  colorInfo,
  colorPrimary,
  colorWarning,
} from "../../styles/Global.style";

const ButtonStyle = StyleSheet.create({
  buttonLink: {
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0.3,
    color: colorBlue[500],
    marginTop: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
    backgroundColor: colorPrimary.default,
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  btnPrimary: {
    backgroundColor: colorPrimary.default,
    color: "white",
    fontWeight: "bold",
  },
  btnOutlinePrimary: {
    backgroundColor: "white",
    color: colorPrimary.default,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: colorPrimary.default,
  },
  btnDanger: {
    color: "white",
    backgroundColor: colorDanger.default,
    fontWeight: "bold",
  },
  btnInfo: {
    color: "white",
    backgroundColor: colorInfo.darker,
    fontWeight: "bold",
  },
  btnSecondary: {
    color: "white",
    backgroundColor: colorGray[600],
    fontWeight: "bold",
  },
  btnWarning: {
    color: "white",
    backgroundColor: colorWarning.default,
    fontWeight: "bold",
  },
  btnDisabled: {
    color: colorGray[200],
    backgroundColor: colorPrimary[200],
    fontWeight: "bold",
  },
});

export default ButtonStyle;
