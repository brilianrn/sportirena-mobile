import { StyleSheet } from "react-native";
import { colorGray, colorPrimary } from "../../styles/Global.style";

const TabStyle = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
    marginHorizontal: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    width: 500,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardItemActive: {
    borderBottomWidth: 3,
    borderBottomColor: colorPrimary.default,
  },
  item: {
    color: colorGray[500],
    fontSize: 10,
    fontWeight: "500",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  itemActive: {
    color: colorPrimary.default,
    fontSize: 10,
    fontWeight: "bold",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
});

export default TabStyle;
