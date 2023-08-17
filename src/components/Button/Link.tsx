import React, { FC } from "react";
import { Text } from "react-native";
import ButtonStyle from "./Button.style";
import { ButtonLinkProps } from "./Button.type";

const ButtonLink: FC<ButtonLinkProps> = ({ label, href, onClick }) => {
  return (
    <Text style={ButtonStyle.buttonLink} onPress={() => onClick && onClick()}>
      {label}
    </Text>
  );
};

export default ButtonLink;
