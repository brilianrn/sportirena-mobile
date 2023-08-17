import { StyleSheet } from "react-native";
import { colorBlue, colorPrimary, fontFamily } from "../../styles/Global.style";

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
    color: "white",
  },
});

export default ButtonStyle;
