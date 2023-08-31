import { StyleSheet } from "react-native";
import { colorDark, colorPrimary } from "../../styles/Global.style";

const MyBookingStyle = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    width: "100%",
    marginBottom: 23,
  },
  cardInv: {
    color: colorPrimary.default,
    fontSize: 10,
    fontWeight: "600",
  },
  cardTitle: {
    color: colorDark.default,
    fontSize: 10,
    fontWeight: "600",
    marginTop: 2,
    marginBottom: 15,
  },
});

export default MyBookingStyle;
