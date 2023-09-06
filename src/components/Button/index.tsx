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
import { Global, colorGray, colorPrimary } from "../../styles/Global.style";
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
  size = "lg",
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
      case "outline-secondary":
        return ButtonStyle.btnOutlineSecondary;
      case "secondary":
        return ButtonStyle.btnSecondary;
      case "warning":
        return ButtonStyle.btnWarning;
      case "disabled":
        return ButtonStyle.btnDisabled;
    }
  }, [type, isDisable, isSubmit]);

  const sizes = useMemo(() => {
    switch (size) {
      case "sm":
        return { padding: 10, text: 10 };
      case "md":
        return { padding: 14, text: 12 };
      case "lg":
        return { padding: 16, text: 14 };
      case "xl":
        return { padding: 18, text: 16 };
      default:
        break;
    }
  }, [size]);
  return (
    <View style={style}>
      <Pressable
        style={[
          ButtonStyle.button,
          btnColor,
          {
            position: "relative",
            paddingVertical: sizes?.padding,
            paddingHorizontal: (sizes?.padding as number) + 2,
          },
        ]}
        onPress={isDisable || isSubmit ? null : onClick}
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
                  {
                    fontSize: sizes?.text,
                    marginVertical: "auto",
                    marginLeft: 12,
                    color:
                      type === "outline-primary"
                        ? colorPrimary.default
                        : type === "outline-secondary"
                        ? colorGray[500]
                        : "white",
                  },
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
                  type === "outline-primary"
                    ? colorPrimary.default
                    : type === "outline-secondary"
                    ? colorGray[500]
                    : "white",
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
