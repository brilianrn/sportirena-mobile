import React, { useMemo } from "react";
import {
  Image,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { Loading } from "../../assets/images";
import { Global, colorPrimary } from "../../styles/Global.style";
import ButtonStyle from "./Button.style";
import { ButtonProps } from "./Button.type";
import ButtonLink from "./Link";

const Button = ({
  label,
  onClick,
  icon,
  iconHeight,
  iconWidth,
  isDisable,
  isSubmit,
  rightIcon,
  style,
  type,
}: ButtonProps) => {
  const btnColor: StyleProp<ViewStyle> = useMemo(() => {
    if (isSubmit || isDisable) return ButtonStyle.btnDisabled;
    switch (type) {
      case "primary":
        return ButtonStyle.btnPrimary;
      case "danger":
        return ButtonStyle.btnDanger;
      case "info":
        return ButtonStyle.btnInfo;
      case "outline-primary":
        return ButtonStyle.btnOutlinePrimary;
      case "secondary":
        return ButtonStyle.btnSecondary;
      case "warning":
        return ButtonStyle.btnWarning;
      case "disabled":
        return ButtonStyle.btnDisabled;
    }
  }, [type, isDisable, isSubmit]);
  return (
    <View style={style}>
      <Pressable
        style={[ButtonStyle.button, btnColor, { position: "relative" }]}
        onPress={onClick}
      >
        {isSubmit && (
          <Image
            source={Loading}
            alt="loading"
            style={{ position: "absolute", left: 1 }}
          />
        )}
        {icon ? (
          rightIcon ? (
            <View style={Global.justifyBetween}>
              <Text style={{ marginVertical: "auto" }}>{label}</Text>
              <View>
                <Image
                  style={{ marginLeft: 12 }}
                  source={icon}
                  alt={`${label}-loading`}
                  height={iconHeight}
                  width={iconWidth}
                />
              </View>
            </View>
          ) : (
            <View style={Global.justifyBetween}>
              <View>
                <Image
                  source={icon}
                  alt={`${label}-loading`}
                  height={iconHeight}
                  width={iconWidth}
                />
              </View>
              <Text
                style={[
                  ButtonStyle.text,
                  { marginVertical: "auto", marginLeft: 12, color: "white" },
                ]}
              >
                {label}
              </Text>
            </View>
          )
        ) : (
          <Text
            style={[
              ButtonStyle.text,
              {
                color:
                  type === "outline-primary" ? colorPrimary.default : "white",
              },
            ]}
          >
            {label}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

Button.Link = ButtonLink;

export default Button;
