import { StyleSheet } from "react-native";
import { colorPrimary } from "../../styles/Global.style";

const LayoutStyle = StyleSheet.create({
  bottomBar: {
    fontSize: 16,
    fontWeight: "bold",
  },
  topBarBackBtn: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#EEE4E4",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    maxWidth: 35,
  },
  topBarLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: colorPrimary.default,
  },
  topBarSearchContainer: {
    backgroundColor: colorPrimary.default,
    paddingVertical: 20,
    paddingHorizontal: 17,
  },
});

export default LayoutStyle;
