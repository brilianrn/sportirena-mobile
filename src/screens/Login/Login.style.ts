import { StyleSheet } from "react-native";
import { colorBlue, colorGray } from "../../styles/Global.style";

const LoginStyle = StyleSheet.create({
  container: {
    height: "100%",
    minHeight: 800,
    backgroundColor: "white",
    paddingHorizontal: 28,
    paddingBottom: 120,
    paddingTop: 30,
  },
  greeting: {
    // fontFamily,
    fontSize: 14,
    fontWeight: "600",
    color: "#1E1E1E",
  },
  title: {
    color: colorGray[500],
    // fontFamily,
    fontSize: 12,
    fontWeight: "400",
    marginTop: 6,
  },
  iconLogin: {
    width: 204,
    height: 176,
    marginTop: 24,
    marginBottom: 18,
  },
  forgotPasswordBtn: {
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0.3,
    color: colorBlue[500],
    marginTop: 5,
  },
  haventAccount: {
    fontSize: 12,
    letterSpacing: 0.3,
    marginTop: 5,
  },
});

export default LoginStyle;
