import React, { FC } from "react";
import { Button as ButtonRN, Pressable, Text, View } from "react-native";
import ButtonLink from "./Link";
import { ButtonProps } from "./Button.type";
import ButtonStyle from "./Button.style";

const Button = ({
  label,
  onClick,
  size,
  buttonRef,
  icon,
  iconHeight,
  iconWidth,
  isDisable,
  isSubmit,
  rightIcon,
  style,
  type,
}: ButtonProps) => {
  return (
    <View style={style}>
      <Pressable style={ButtonStyle.button} onPress={onClick}>
        <Text style={ButtonStyle.text}>{label}</Text>
      </Pressable>
    </View>
  );
};

Button.Link = ButtonLink;

export default Button;
