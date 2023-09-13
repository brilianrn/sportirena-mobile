import { StyleSheet } from "react-native";
import { colorGray, colorPrimary } from "../../styles/Global.style";

const BookingStyle = StyleSheet.create({
  cardAvailable: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colorPrimary.default,
    borderRadius: 10,
  },
  cardSelected: {
    backgroundColor: "#DBEAE4",
    borderWidth: 1,
    borderColor: colorPrimary.default,
    borderRadius: 10,
  },
  cardWaitingPayment: {
    backgroundColor: "#F8ECE0",
    borderWidth: 1,
    borderColor: "#FBAD60",
    borderRadius: 10,
  },
  cardReserved: {
    backgroundColor: "#F8E8E8",
    borderWidth: 1,
    borderColor: "#FF8383",
    borderRadius: 10,
  },
  bubbleAvailable: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colorPrimary.default,
    borderRadius: 20,
    height: 8,
    width: 8,
  },
  bubbleSelected: {
    backgroundColor: colorPrimary.default,
    borderWidth: 1,
    borderColor: colorPrimary.default,
    borderRadius: 20,
    height: 8,
    width: 8,
  },
  bubbleWaitingPayement: {
    backgroundColor: "#FBAD60",
    borderWidth: 1,
    borderColor: "#FBAD60",
    borderRadius: 20,
    height: 8,
    width: 8,
  },
  bubbleReserved: {
    backgroundColor: "#FF8383",
    borderWidth: 1,
    borderColor: "#FF8383",
    borderRadius: 20,
    height: 8,
    width: 8,
  },
  cardTotalHour: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    borderTopColor: colorGray[200],
    borderTopWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: "100%",
  },
});

export default BookingStyle;
