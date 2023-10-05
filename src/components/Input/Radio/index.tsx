import React, { FC, useMemo } from "react";
import { Controller } from "react-hook-form";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Global, colorGray, colorPrimary } from "../../../styles/Global.style";
import { RadioStyle } from "./Radio.style";
import { InputRadioProps } from "./Radio.type";

const InputRadio: FC<InputRadioProps> = ({
  style,
  control,
  name,
  setValue,
  value,
  options,
  required,
  label,
  type,
}) => {
  const defaultSyle: StyleProp<ViewStyle> = useMemo(() => {
    switch (type) {
      case "row":
        return [style, RadioStyle.optionContainer, Global.justifyCenter];
      case "list":
        return [style, RadioStyle.optionContainer];
    }
  }, [type]);
  return (
    <React.Fragment>
      {label && <Text style={Global.label}>{label}</Text>}
      <View style={defaultSyle}>
        {options.map((e) =>
          control && !setValue ? (
            <Controller
              control={control}
              render={({ field: { onChange, value: valueForm } }) => (
                <View
                  style={
                    type === "list"
                      ? RadioStyle.radioButtonContainerList
                      : [
                          RadioStyle.radioButtonContainerRow,
                          {
                            backgroundColor:
                              valueForm === e.value ? "#EEF3F1" : "white",
                          },
                        ]
                  }
                  key={e.value}
                  onTouchStart={() => type === "row" && onChange(e.value)}
                >
                  <TouchableOpacity
                    onPress={() => onChange(e.value)}
                    style={RadioStyle.radioButton}
                  >
                    {valueForm === e.value ? (
                      <View style={RadioStyle.radioButtonIcon} />
                    ) : null}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => onChange(e.value)}>
                    <Text
                      style={[
                        RadioStyle.radioButtonText,
                        {
                          color:
                            e.value === valueForm
                              ? colorPrimary.default
                              : colorGray[500],
                          fontWeight: e.value === valueForm ? "bold" : "normal",
                        },
                      ]}
                    >
                      {e.label}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              name={name as string}
              rules={{ required }}
            />
          ) : (
            <View
              style={
                type === "list"
                  ? RadioStyle.radioButtonContainerList
                  : [
                      RadioStyle.radioButtonContainerRow,
                      {
                        backgroundColor:
                          value === e.value ? "#EEF3F1" : "white",
                      },
                    ]
              }
              key={e.value}
              onTouchStart={() =>
                type === "row" && setValue && setValue(e.value)
              }
            >
              <TouchableOpacity
                onPress={() => setValue && setValue(e.value)}
                style={RadioStyle.radioButton}
              >
                {value === e.value ? (
                  <View style={RadioStyle.radioButtonIcon} />
                ) : null}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setValue && setValue(e.value)}>
                <Text
                  style={[
                    RadioStyle.radioButtonText,
                    {
                      color:
                        e.value === value
                          ? colorPrimary.default
                          : colorGray[500],
                      fontWeight: e.value === value ? "bold" : "normal",
                    },
                  ]}
                >
                  {e.label}
                </Text>
              </TouchableOpacity>
            </View>
          )
        )}
      </View>
    </React.Fragment>
  );
};

export default InputRadio;
