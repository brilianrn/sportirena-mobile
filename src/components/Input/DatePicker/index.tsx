import moment from "moment";
import React, { FC, useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ReactNativeDatePicker from "react-native-modal-datetime-picker";
import { IconCalendar } from "../../../assets/images";
import { Global, colorGray } from "../../../styles/Global.style";
import SelectOptionStyle from "../SelectOption/SelectOption.style";
import TextStyle from "../Text/Text.style";
import { DatePickerProps } from "./DatePicker.type";

const DatePicker: FC<DatePickerProps> = ({
  placeholder,
  control,
  errorMessage,
  label,
  name,
  required,
  setValue,
  style,
  value,
  maxDate,
  minDate,
}) => {
  /* Local State */
  const [open, setOpen] = useState<boolean>(false);

  const formatMaxDate = useMemo(() => {
    let date = new Date();
    date.setDate(date.getDate() + (maxDate || 30));
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    return new Date(`${yyyy}-${mm}-${dd}`);
  }, [maxDate, new Date()]);
  return (
    <React.Fragment>
      <View style={style}>
        {label && (
          <Text style={[Global.label, { marginBottom: 11 }]}>{label}</Text>
        )}
        {control && name && !setValue ? (
          <Controller
            control={control}
            name={name as string}
            rules={{ required }}
            render={({ field: { onChange, value: valueForm } }) => (
              <>
                <TouchableOpacity
                  style={[
                    Global.justifyBetween,
                    SelectOptionStyle.selectOption,
                    {
                      borderColor: "#F0F1F7",
                      alignItems: "center",
                      paddingHorizontal: 20,
                      width: "100%",
                    },
                  ]}
                  onPress={() => setOpen(true)}
                >
                  <Text
                    style={{ color: !valueForm ? colorGray[400] : "black" }}
                  >
                    {valueForm
                      ? moment(valueForm?.toString()).format("DD MMMM YYYY")
                      : placeholder}
                  </Text>
                  <Image source={IconCalendar} />
                </TouchableOpacity>
                <ReactNativeDatePicker
                  minimumDate={minDate}
                  maximumDate={formatMaxDate}
                  isVisible={open}
                  date={valueForm}
                  onConfirm={(date) => {
                    setOpen(false);
                    onChange(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </>
            )}
          />
        ) : (
          <>
            <TouchableOpacity
              style={[
                Global.justifyBetween,
                SelectOptionStyle.selectOption,
                {
                  borderColor: "#F0F1F7",
                  alignItems: "center",
                  paddingHorizontal: 20,
                  width: "100%",
                },
              ]}
              onPress={() => setOpen(true)}
            >
              <Text style={{ color: !value ? colorGray[400] : "black" }}>
                {value
                  ? moment(value?.toString()).format("DD MMMM YYYY")
                  : placeholder}
              </Text>
              <Image source={IconCalendar} />
            </TouchableOpacity>
            <ReactNativeDatePicker
              minimumDate={minDate}
              maximumDate={formatMaxDate}
              isVisible={open}
              date={value}
              onConfirm={(date) => {
                setOpen(false);
                setValue && setValue(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </>
        )}
        {errorMessage && (
          <View style={TextStyle.formErrorMessage}>
            <Text style={TextStyle.textErrorMessage}>{errorMessage}</Text>
          </View>
        )}
      </View>
    </React.Fragment>
  );
};

export default DatePicker;
