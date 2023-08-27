import { StyleSheet } from "react-native";
import { colorBrown, colorGray } from "../../styles/Global.style";

const VenueStyle = StyleSheet.create({
  cardVenue: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
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
