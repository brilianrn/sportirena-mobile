import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import ModalRN from "react-native-modal";
import { ModalProps } from "./Modal.type";
import ModalStyle from "./Modal.style";
import { IconCross } from "../../assets/images";

const Modal: FC<ModalProps> = ({
  children,
  setShow,
  show,
  title,
  description,
  style,
  useCloseButton,
}) => {
  return (
    <View>
      <ModalRN
        isVisible={show}
        style={style}
        onBackdropPress={() => setShow(false)}
      >
        <View style={ModalStyle.container}>
          {useCloseButton && (
            <TouchableOpacity
              style={{ position: "relative", zIndex: 1 }}
              onPress={() => setShow(false)}
            >
              <Image
                source={IconCross}
                alt="icon cross"
                height={10}
                width={10}
                style={ModalStyle.closeModal}
              />
            </TouchableOpacity>
          )}
          <Text style={ModalStyle.titleModal}>{title}</Text>
          {description && (
            <Text style={ModalStyle.descriptionModal}>{description}</Text>
          )}
          {children}
        </View>
      </ModalRN>
    </View>
  );
};

export default Modal;
