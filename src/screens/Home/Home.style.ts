import { StyleSheet } from "react-native";
import { colorGray } from "../../styles/Global.style";

const HomeStyle = StyleSheet.create({
  titleHome: {
    fontSize: 16,
    fontWeight: "bold",
  },
  banner: {
    height: 144,
    width: "100%",
    marginTop: 12,
    borderRadius: 10,
    marginBottom: 28,
  },
  cardOuterFacilityType: {
    marginHorizontal: 5,
  },
  cardInnerFacilityType: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    width: "100%",
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 16,
  },
  cardVenue: {
    marginVertical: 15,
    paddingTop: 0,
    width: 182,
    height: 136,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardCustomerBooking: {
    marginTop: 21,
    paddingRight: 80,
    backgroundColor: "#EEF3F1",
    borderRadius: 10,
    paddingVertical: 27,
    paddingHorizontal: 24,
    width: "80%",
  },
  cardBookingFacility: {
    backgroundColor: "#EEF3F1",
    borderRadius: 10,
    paddingVertical: 27,
    paddingHorizontal: 24,
    width: "80%",
    marginTop: 38,
    marginLeft: "20%",
    paddingLeft: 80,
  },
  howItWorkCard: {
    width: "100%",
    height: "100%",
    paddingVertical: 17,
    paddingHorizontal: 19,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EEF3F1",
    marginTop: 11,
    marginBottom: 12,
  },
  howItWorkText: {
    fontSize: 12,
    fontWeight: "300",
    color: colorGray[500],
    width: "80%",
  },
});

export default HomeStyle;
