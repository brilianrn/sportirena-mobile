import { StyleSheet } from "react-native";
import { colorGray } from "../../../styles/Global.style";

const CheckboxStyle = StyleSheet.create({
  labelCheckbox: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 12,
    fontWeight: "400",
    color: colorGray[400],
    letterSpacing: 0.3,
  },
});

export default CheckboxStyle;
