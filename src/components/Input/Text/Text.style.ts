import { StyleSheet } from "react-native";
import { colorDanger } from "../../../styles/Global.style";

const TextStyle = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#F0F1F7",
    borderRadius: 8,
    paddingVertical: 12,
    letterSpacing: 0.3,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colorDanger,
    borderRadius: 8,
    paddingVertical: 12,
    letterSpacing: 0.3,
  },
  inputWithoutIcon: {
    paddingHorizontal: 12,
  },
  inputWithIconRight: {
    paddingLeft: 12,
    paddingRight: 44,
  },
  inputWithIconLeft: {
    paddingRight: 12,
    paddingLeft: 44,
  },
  inputIconRight: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 43,
    width: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputIconLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 43,
    width: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formErrorMessage: {
    marginVertical: 4,
    display: "flex",
    gap: 4,
    justifyContent: "flex-start",
  },
  textErrorMessage: {
    fontSize: 12,
    color: colorDanger,
    letterSpacing: 0.3,
    lineHeight: 16,
  },
});

export default TextStyle;
