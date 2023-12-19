import React, { FC, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Global, colorGray } from "../../../styles/Global.style";
import {
  IconArrowChevron,
  IconArrowChevronBlack,
} from "../../../assets/images";
import { InputDate } from "..";
import { DateRangeProps } from "./DatePicker.type";
import moment from "moment";
import ReactNativeDatePicker from "react-native-modal-datetime-picker";

const DateRange: FC<DateRangeProps> = ({
  endDate,
  minDate,
  setEndDate,
  setStartDate,
  startDate,
  totalDiffDays,
  isDisabled,
  isDisplayDays,
  maxDate,
  selectedDate,
  setSelectedDate,
  style,
  displayDaysStyle,
}) => {
  /* Local State */
  const [openStartDate, setOpenStartDate] = useState<boolean>(false);
  const [openEndDate, setOpenEndDate] = useState<boolean>(false);

  const onNext = () => {
    const dateMax = moment(maxDate);
    const dateEnd = moment(endDate).add(totalDiffDays, "days");
    const diff = dateMax.diff(dateEnd, "days");
    if (
      (maxDate &&
        new Date(maxDate)?.getTime() <=
          new Date(moment(endDate).toString())?.getTime()) ||
      diff < totalDiffDays
    ) {
      setStartDate(
        new Date(moment(maxDate).subtract(totalDiffDays, "days").toString())
      );
      return setEndDate(
        maxDate || new Date(moment(startDate).add(7, "days").toString())
      );
    }
    setStartDate(
      new Date(moment(startDate).add(totalDiffDays, "days").toString())
    );
    setEndDate(new Date(moment(endDate).add(totalDiffDays, "days").toString()));
  };

  const onPrev = () => {
    const dateMin = moment(minDate);
    const dateStart = moment(startDate).subtract(totalDiffDays, "days");
    const diff = dateStart.diff(dateMin, "days");
    if (
      (minDate &&
        new Date(minDate)?.getTime() >=
          new Date(moment(startDate).toString())?.getTime()) ||
      diff <= 0
    ) {
      setStartDate(minDate);
      return setEndDate(
        new Date(moment(minDate).add(totalDiffDays, "days").toString())
      );
    }
    setStartDate(
      new Date(moment(startDate).subtract(totalDiffDays, "days").toString())
    );
    setEndDate(
      new Date(moment(endDate).subtract(totalDiffDays, "days").toString())
    );
  };

  const onStartDate = (date: Date) => {
    const dateMax = moment(maxDate);
    const choosenDate = moment(date);
    const diff = dateMax.diff(choosenDate, "days");
    if (diff < totalDiffDays) {
      setStartDate(
        new Date(moment(maxDate).subtract(totalDiffDays, "days").toString())
      );
      return setEndDate(
        maxDate || new Date(moment(startDate).add(7, "days").toString())
      );
    }
    setStartDate(date);
    return setEndDate(
      new Date(moment(date).add(totalDiffDays, "days").toString())
    );
  };

  const onEndDate = (date: Date) => {
    const date1 = moment(startDate);
    const date2 = moment(date);
    const diff = date2.diff(date1, "days");
    if (
      diff > totalDiffDays ||
      diff < totalDiffDays ||
      moment(date).format("D MMMM yyyy") ===
        moment(startDate).format("D MMMM yyyy")
    ) {
      return setEndDate(
        new Date(moment(startDate).add(totalDiffDays, "days").toString())
      );
    }
    return setEndDate(date);
  };
  return (
    <View
      style={[
        [
          Global.justifyBetween,
          style,
          {
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#CDCDCD",
            borderRadius: 10,
            padding: 15,
          },
        ],
      ]}
    >
      <TouchableOpacity
        onPress={onPrev}
        style={{
          opacity:
            new Date(minDate)?.getTime() >=
            new Date(moment(startDate).toString())?.getTime()
              ? 0.2
              : 1,
        }}
      >
        <Image
          source={IconArrowChevronBlack}
          style={{
            marginVertical: "auto",
            transform: [{ rotate: "180deg" }],
          }}
        />
      </TouchableOpacity>
      <ReactNativeDatePicker
        mode="date"
        minimumDate={minDate}
        maximumDate={maxDate}
        isVisible={openStartDate}
        date={new Date(startDate)}
        onConfirm={(date) => {
          setOpenStartDate(false);
          onStartDate(date);
        }}
        onCancel={() => {
          setOpenStartDate(false);
        }}
      />
      <View style={[Global.justifyCenter, { gap: 5 }]}>
        <TouchableOpacity onPress={() => setOpenStartDate(true)}>
          <Text
            style={{
              color: !startDate ? colorGray[400] : colorGray[500],
              fontSize: 10,
            }}
          >
            {moment(startDate ? startDate?.toString() : "").format(
              "ddd DD MMMM"
            )}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginVertical: "auto",
            fontSize: 10,
            color: colorGray[500],
          }}
        >
          -
        </Text>
        <TouchableOpacity onPress={() => setOpenEndDate(true)}>
          <Text
            style={{
              color: !endDate ? colorGray[400] : colorGray[500],
              fontSize: 10,
            }}
          >
            {moment(endDate ? endDate?.toString() : "").format("ddd DD MMMM")}
          </Text>
        </TouchableOpacity>
        <ReactNativeDatePicker
          mode="date"
          minimumDate={startDate}
          maximumDate={maxDate}
          isVisible={openEndDate}
          date={new Date(endDate)}
          onConfirm={(date) => {
            setOpenEndDate(false);
            onEndDate(date);
          }}
          onCancel={() => {
            setOpenEndDate(false);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={onNext}
        style={{
          opacity:
            (maxDate &&
              new Date(maxDate)?.getTime() <=
                new Date(moment(endDate).toString())?.getTime()) ||
            moment(maxDate).diff(moment(endDate).add(0, "days"), "days") <
              totalDiffDays
              ? 0.2
              : 1,
        }}
      >
        <Image
          source={IconArrowChevronBlack}
          style={{ marginVertical: "auto" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DateRange;
