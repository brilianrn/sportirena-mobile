import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FlatList,
  Image as ImageRN,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";
import {
  IconInformation,
  IconParking,
  IconTennisBall,
  IconToilet,
  IconWifi,
} from "../../assets/images";
import Image from "../../components/Image";
import { InputDate, InputRadio, InputSelect } from "../../components/Input";
import Layout from "../../components/Layout";
import { venuePath } from "../../constants";
import {
  Global,
  colorBrown,
  colorDark,
  colorGray,
  colorPrimary,
} from "../../styles/Global.style";
import { IDRFormat } from "../../utils/formattor";
import CardFacilityType from "../Home/FacilityType/Card";
import HomeStyle from "../Home/Home.style";
import BookingStyle from "./Booking.style";
import { BookingType } from "./Booking.type";
import Button from "../../components/Button";

const Booking = () => {
  /* Local State */
  const [dataSource, setDataSource] = useState<BookingType[]>();

  const validationSchema = Yup.object().shape({
    bookingType: Yup.string().required("Booking type required"),
    repeatType: Yup.string().required("Repeat type required"),
    untilDate: Yup.date().notRequired(),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, defaultValues },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    let items: BookingType[] = Array.apply(null, Array(60)).map((v, i) => {
      return {
        id: "505ae2d5-ab50-4713-9e59-5d357cbd0cc0" + i,
        idRelation: "0c8a4d15-8631-4781-a7a2-eeeed611f283",
        day: "THURSDAY",
        startTime: "06.00",
        endTime: "07.00",
        startEndTime: "06000700",
        startTimeOri: "06:00",
        status: true,
        statusBook:
          i % 2 === 0 && i !== 2
            ? "AVAILABLE"
            : i === 2
            ? "APPROVED"
            : "WAITING_FOR_PAYMENT",
        price: 60000,
      };
    });
    setDataSource(items);
  }, []);

  const onChooseCard = (id: string) => {
    setDataSource(
      dataSource?.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            statusBook: e.statusBook === "AVAILABLE" ? "SELECTED" : "AVAILABLE",
          };
        }
        return e;
      })
    );
  };
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Booking Lapangan Tennis Puri Indah"
        backHref={venuePath}
      >
        <Image
          src="https://liga.tennis/public/cache/images/2/7/6/2/3/fd22b57f2195a328230ec31388a9552e_1920_5760.jpg"
          style={[HomeStyle.banner, { height: 182 }]}
        />
        <Text
          style={[
            HomeStyle.titleHome,
            { marginBottom: 15, color: colorPrimary.default },
          ]}
        >
          Lapangan #1
        </Text>
        <View style={[Global.justifyBetween]}>
          <View
            style={[Global.justifyStart, { gap: 10, alignItems: "center" }]}
          >
            <ImageRN source={IconToilet} />
            <Text style={[{ fontSize: 5, color: colorGray[500] }]}>●</Text>
            <ImageRN source={IconParking} />
            <Text style={[{ fontSize: 5, color: colorGray[500] }]}>●</Text>
            <ImageRN source={IconWifi} />
          </View>
          <View style={[Global.justifyStart, { gap: 6 }]}>
            <Text
              style={{
                color: colorBrown.default,
                fontSize: 10,
                fontWeight: "400",
              }}
            >
              Starting Price
            </Text>
            <Text
              style={{
                color: colorPrimary.default,
                fontSize: 10,
                fontWeight: "600",
              }}
            >
              Rp 50.000,-
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 10,
            color: colorDark[600],
            textAlign: "justify",
            marginTop: 12,
            marginBottom: 8,
          }}
        >
          Lapangan Tennis Puri Indah is a standard outdoor sports arena that is
          located at Jl. Kembang Indah III. There are 5 private tennis court is
          already using international standard.
        </Text>
        <CardFacilityType titile="Tennis" icon={IconTennisBall} />
        <View
          style={[
            Global.justifyEnd,
            {
              marginTop: 20,
              gap: 10,
              flex: 0,
              alignItems: "flex-end",
              marginBottom: 13,
            },
          ]}
        >
          <InputSelect
            placeholder="Choose booking type"
            style={{ width: "91.8%" }}
            label="Booking Type"
            control={control}
            name="bookingType"
            errorMessage={errors.bookingType?.message}
            options={["Booking Lapangan", "Booking Venue", "Booking Hourly"]}
          />
          <TouchableOpacity style={{ marginBottom: "4%" }}>
            <ImageRN source={IconInformation} />
          </TouchableOpacity>
        </View>
        <View style={{ maxHeight: "10%", marginBottom: 15 }}>
          <InputRadio
            label="Repeat Type"
            style={{ flex: 0 }}
            type="row"
            name="repeatType"
            control={control}
            options={[
              {
                label: "One Time",
                value: "once",
              },
              {
                label: "Weekly",
                value: "weekly",
              },
            ]}
          />
        </View>
        <InputDate
          label="Until"
          placeholder="DD-MMM-YYYY"
          control={control}
          name="untilDate"
        />
        <Text style={[Global.label, { marginTop: 13 }]}>Booking Court</Text>
        <Text
          style={[
            Global.justifyStart,
            {
              marginBottom: 11,
              gap: 10,
              color: colorGray[500],
              fontSize: 10,
              fontWeight: "300",
            },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>Search: </Text>
          <Text>{"Booking Lapangan > One Time > 16 October 2022"}</Text>
        </Text>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <FlatList
            data={dataSource}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() =>
                  (item.statusBook === "AVAILABLE" ||
                    item.statusBook === "SELECTED") &&
                  onChooseCard(item.id)
                }
                style={[
                  BookingStyle[
                    item.statusBook === "AVAILABLE"
                      ? "cardAvailable"
                      : item.statusBook === "SELECTED"
                      ? "cardSelected"
                      : item.statusBook === "WAITING_FOR_PAYMENT"
                      ? "cardWaitingPayment"
                      : item.statusBook === "APPROVED" ||
                        item.statusBook === "WAITING_FOR_APPROVED"
                      ? "cardReserved"
                      : ""
                  ],
                  {
                    flex: 1,
                    flexDirection: "column",
                    margin: 4,
                    width: 100,
                    height: 92,
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                  },
                ]}
                key={index}
              >
                <View
                  style={[
                    BookingStyle[
                      item.statusBook === "AVAILABLE"
                        ? "bubbleAvailable"
                        : item.statusBook === "SELECTED"
                        ? "bubbleSelected"
                        : item.statusBook === "WAITING_FOR_PAYMENT"
                        ? "bubbleWaitingPayement"
                        : item.statusBook === "APPROVED" ||
                          item.statusBook === "WAITING_FOR_APPROVED"
                        ? "bubbleReserved"
                        : ""
                    ],
                    { position: "absolute", right: 6.5, top: 6.5 },
                  ]}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color:
                      item.statusBook === "WAITING_FOR_PAYMENT"
                        ? "#FBAD60"
                        : item.statusBook === "APPROVED" ||
                          item.statusBook === "WAITING_FOR_APPROVED"
                        ? "#FF8383"
                        : colorPrimary.default,
                  }}
                >
                  {item.startTime} - {item.endTime}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    marginVertical: 2,
                    fontWeight: "600",
                    color:
                      item.statusBook === "WAITING_FOR_PAYMENT"
                        ? "#FBAD60"
                        : item.statusBook === "APPROVED" ||
                          item.statusBook === "WAITING_FOR_APPROVED"
                        ? "#FF8383"
                        : colorPrimary.default,
                  }}
                >
                  Rp {IDRFormat(item.price)}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    textAlign: "center",
                    color:
                      item.statusBook === "WAITING_FOR_PAYMENT"
                        ? "#FBAD60"
                        : item.statusBook === "APPROVED" ||
                          item.statusBook === "WAITING_FOR_APPROVED"
                        ? "#FF8383"
                        : colorPrimary.default,
                  }}
                >
                  {item.statusBook}
                </Text>
              </TouchableOpacity>
            )}
            numColumns={3}
          />
        </SafeAreaView>
      </Layout>
      {dataSource?.filter((e) => e.statusBook === "SELECTED")?.length ? (
        <View style={[Global.justifyBetween, BookingStyle.cardTotalHour]}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              marginTop: 10,
            }}
          >
            Choose
            <Text style={{ color: colorDark.default, fontWeight: "400" }}>
              {" "}
              •{" "}
              {dataSource
                ?.filter((e) => e.statusBook === "SELECTED")
                ?.length?.toString()}{" "}
              Hours
            </Text>
          </Text>
          <Button
            label="Check Out"
            type="primary"
            btnType="button"
            onClick={console.log}
            size="sm"
          />
        </View>
      ) : null}
    </React.Fragment>
  );
};

export default Booking;
