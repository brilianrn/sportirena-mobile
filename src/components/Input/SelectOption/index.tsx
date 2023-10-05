import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { Image, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import SelectDropdown from "react-native-select-dropdown";
import { IconArrowChevronBlack } from "../../../assets/images";
import {
  Global,
  colorDanger,
  colorGray,
  colorPrimary,
} from "../../../styles/Global.style";
import TextStyle from "../Text/Text.style";
import SelectOptionStyle from "./SelectOption.style";
import { SelectOptionProps } from "./SelectOption.type";

const SelectOption: FC<SelectOptionProps> = ({
  options,
  placeholder,
  control,
  errorMessage,
  label,
  name,
  required,
  setValue,
  style,
  value,
  isOptObj,
  obtOptions,
}) => {
  return (
    <React.Fragment>
      <View style={style}>
        {label && (
          <Text style={[Global.label, { marginBottom: 11 }]}>{label}</Text>
        )}
        <View style={{ position: "relative", width: "100%" }}>
          {control && name ? (
            <Controller
              control={control}
              name={name as string}
              rules={{ required }}
              render={({ field: { onChange, onBlur, value: valueForm } }) =>
                isOptObj && obtOptions?.length ? (
                  <SelectList
                    boxStyles={{
                      ...SelectOptionStyle.selectOption,
                      borderColor: errorMessage
                        ? colorDanger.default
                        : "#F0F1F7",
                    }}
                    dropdownShown={false}
                    placeholder={
                      valueForm && obtOptions?.length
                        ? obtOptions.filter((e: any) => e.key === valueForm)[0]
                            ?.value
                        : placeholder
                    }
                    setSelected={(el: string) => onChange(el)}
                    data={obtOptions}
                  />
                ) : (
                  <SelectDropdown
                    buttonStyle={[
                      SelectOptionStyle.selectOption,
                      {
                        borderColor: errorMessage
                          ? colorDanger.default
                          : "#F0F1F7",
                      },
                    ]}
                    buttonTextStyle={{
                      fontSize: 15,
                      fontWeight: "400",
                      textAlign: "left",
                      color: !valueForm ? colorGray[400] : "black",
                    }}
                    dropdownStyle={{
                      backgroundColor: "white",
                      borderRadius: 8,
                    }}
                    rowTextStyle={{ textAlign: "left", paddingHorizontal: 10 }}
                    selectedRowStyle={{ backgroundColor: colorPrimary.default }}
                    selectedRowTextStyle={{ color: "white" }}
                    defaultButtonText={placeholder}
                    data={options as string[]}
                    onBlur={onBlur}
                    defaultValue={valueForm}
                    onSelect={(selectedItem) => onChange(selectedItem)}
                    buttonTextAfterSelection={(selectedItem) => selectedItem}
                    rowTextForSelection={(item) => item}
                  />
                )
              }
            />
          ) : isOptObj && obtOptions?.length ? (
            <SelectList
              dropdownShown={false}
              placeholder={
                value && obtOptions?.length
                  ? obtOptions.filter((e: any) => e.key === value)[0]?.value
                  : placeholder
              }
              setSelected={(el: string) => setValue && setValue(el)}
              data={obtOptions}
            />
          ) : (
            <SelectDropdown
              buttonStyle={[
                SelectOptionStyle.selectOption,
                { borderColor: errorMessage ? colorDanger.default : "#F0F1F7" },
              ]}
              buttonTextStyle={{
                fontSize: 15,
                fontWeight: "400",
                textAlign: "left",
                color: !value ? colorGray[400] : "black",
              }}
              dropdownStyle={{ backgroundColor: "white", borderRadius: 8 }}
              rowTextStyle={{ textAlign: "left", paddingHorizontal: 10 }}
              selectedRowStyle={{ backgroundColor: colorPrimary.default }}
              selectedRowTextStyle={{ color: "white" }}
              defaultButtonText={placeholder}
              data={options as string[]}
              defaultValue={value}
              onSelect={(selectedItem) => setValue && setValue(selectedItem)}
              buttonTextAfterSelection={(selectedItem) => selectedItem}
              rowTextForSelection={(item) => item}
            />
          )}
          {!isOptObj && (
            <Image
              source={IconArrowChevronBlack}
              style={{
                position: "absolute",
                top: "33%",
                right: "8%",
                transform: [{ rotate: "90deg" }],
                height: 15,
              }}
            />
          )}
        </View>
        {errorMessage && (
          <View style={TextStyle.formErrorMessage}>
            <Text style={TextStyle.textErrorMessage}>{errorMessage}</Text>
          </View>
        )}
      </View>
    </React.Fragment>
  );
};

export default SelectOption;
