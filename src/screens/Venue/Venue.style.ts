import { StyleSheet } from "react-native";
import { colorBrown, colorGray } from "../../styles/Global.style";

const VenueStyle = StyleSheet.create({
  cardVenue: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: colorGray[300],
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 10,
    fontWeight: "400",
    color: colorBrown.default,
    marginBottom: 5,
    justifyContent: "center",
  },
});

export default VenueStyle;
