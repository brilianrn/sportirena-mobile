import { StyleSheet } from "react-native";
import { colorGray } from "../../styles/Global.style";

const ModalStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
  },
  titleModal: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
    textAlign: "center",
  },
  descriptionModal: {
    color: colorGray[500],
    marginVertical: 7,
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
  closeModal: {
    position: "absolute",
    right: 0,
    top: 3,
  },
});

export default ModalStyle;
