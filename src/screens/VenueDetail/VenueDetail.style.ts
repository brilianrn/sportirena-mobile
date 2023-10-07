import { StyleSheet } from "react-native";
import { colorGray } from "../../styles/Global.style";

const VenueDetailStyle = StyleSheet.create({
  cardAddress: {
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: colorGray[300],
    borderWidth: 1,
    padding: 12,
    marginBottom: 17,
  },
});

export default VenueDetailStyle;
