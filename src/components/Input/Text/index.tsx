import React, { FC, useMemo } from "react";
import { Controller } from "react-hook-form";
import {
  Image,
  StyleProp,
  Text,
  TextInput,
  TextStyle as TextStyleRN,
  TouchableOpacity,
  View,
} from "react-native";
import { Global } from "../../../styles/Global.style";
import TextStyle from "./Text.style";
import { InputTextProps } from "./Text.type";

const InputText: FC<InputTextProps> = ({
  name,
  control,
  required,
  setValue,
  value,
  icon,
  iconOnClick,
  iconPosition,
  iconStyle,
  style = null,
  label,
  type = "default",
  iconType = "image",
  placeholder,
  errorMessage,
  secureTextEntry = false,
}) => {
  const styleInput: StyleProp<TextStyleRN> = useMemo(() => {
    if (errorMessage && icon && iconPosition === "right") {
      return [TextStyle.inputError, TextStyle.inputWithIconRight];
    } else if (errorMessage && icon && iconPosition === "left") {
      return [TextStyle.inputError, TextStyle.inputWithIconLeft];
    } else if (icon && iconPosition === "right") {
      return [TextStyle.input, TextStyle.inputWithIconRight];
    } else if (icon && iconPosition === "left") {
      return [TextStyle.input, TextStyle.inputWithIconLeft];
    } else if (errorMessage) {
      return [TextStyle.inputError, TextStyle.inputWithoutIcon];
    } else {
      return [TextStyle.input, TextStyle.inputWithoutIcon];
    }
  }, [errorMessage, iconPosition]);
  return (
    <View style={style}>
      {label && <Text style={Global.label}>{label}</Text>}
      <View style={{ position: "relative" }}>
        {control && name ? (
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value: valueForm } }) => (
              <TextInput
                style={styleInput}
                onBlur={onBlur}
                onChangeText={(payload) => onChange(payload)}
                value={valueForm}
                keyboardType={type}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
              />
            )}
            name={name as string}
            rules={{ required }}
          />
        ) : (
          <TextInput
            style={styleInput}
            onChangeText={setValue}
            value={value}
            keyboardType={type}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
          />
        )}
        {icon &&
          iconPosition &&
          iconType === "image" &&
          typeof icon !== "string" && (
            <TouchableOpacity
              style={[
                iconStyle,
                iconPosition === "right"
                  ? TextStyle.inputIconRight
                  : TextStyle.inputIconLeft,
              ]}
              onPress={iconOnClick}
            >
              <Image alt={`input ${name}`} source={icon} />
            </TouchableOpacity>
          )}
        {icon &&
          iconPosition &&
          iconType === "text" &&
          typeof icon === "string" && (
            <Text
              style={[
                iconStyle,
                iconPosition === "right"
                  ? TextStyle.inputIconRight
                  : TextStyle.inputIconLeft,
              ]}
            >
              {icon}
            </Text>
          )}
      </View>
      {errorMessage && (
        <View style={TextStyle.formErrorMessage}>
          <Text style={TextStyle.textErrorMessage}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default InputText;
