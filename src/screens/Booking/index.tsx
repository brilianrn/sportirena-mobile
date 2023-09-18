import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FlatList,
  Image as ImageRN,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  IconInformation,
  IconParking,
  IconTennisBall,
  IconToilet,
  IconWifi,
} from "../../assets/images";
import Button from "../../components/Button";
import Image from "../../components/Image";
import { InputDate, InputRadio, InputSelect } from "../../components/Input";
import Layout from "../../components/Layout";
import { paymentPath, venueDetailPath } from "../../constants";
import { useBooking } from "../../hooks/useBooking";
import { setCart, setScheduleTime } from "../../store/actions/booking.action";
import { IRootState } from "../../store/reducers";
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

const Booking = () => {
  /* Local State */
  const [dataSource, setDataSource] = useState<BookingType[]>();

  /* Router */
  const { navigate } = useNavigation();

  /* Redux */
  const dispatch = useDispatch();
  const { courtDetail, scheduleTime } = useSelector(
    (state: IRootState) => state.booking
  );

  /* Hooks */
  const { fetchScheduleTime } = useBooking();

  const validationSchema = Yup.object().shape({
    bookingType: Yup.string().required("Booking type required"),
    repeatType: Yup.string().required("Repeat type required"),
    every: Yup.string().notRequired(),
    untilDate: Yup.date().required("Until date required"),
  });

  const {
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (!courtDetail) navigate(venueDetailPath as never);
  }, [courtDetail]);

  useEffect(() => {
    if (
      courtDetail?.id &&
      watch("bookingType") &&
      watch("repeatType") &&
      watch("untilDate")
    ) {
      fetchScheduleTime(
        courtDetail?.id,
        watch("untilDate")?.toString() as string
      );
    } else {
      dispatch(setScheduleTime(undefined));
    }
  }, [
    courtDetail,
    watch("bookingType"),
    watch("repeatType"),
    watch("untilDate"),
  ]);

  useEffect(() => {
    setDataSource(
      scheduleTime?.map((e: BookingType) => ({
        ...e,
        isOldCard: e.statusBook === "CART",
        isChecked: true,
      }))
    );
  }, [scheduleTime]);

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

  const onSubmit = () => {
    dispatch(
      setCart(
        dataSource
          ?.filter(
            (e) => e.statusBook === "SELECTED" || e.statusBook === "CART"
          )
          .map((e) => ({
            ...e,
            date: moment(watch("untilDate")).format("yyyy-MM-DD"),
            openHoursId: e.id,
            courtId: courtDetail?.id,
            venueId: courtDetail?.idVenue,
          }))
      )
    );
    navigate(paymentPath as never);
  };
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label={courtDetail?.courtName}
        backHref={venueDetailPath}
      >
        <Image
          useBaseUrl
          src={`${courtDetail?.pathName}/${courtDetail?.imageName}`}
          style={[HomeStyle.banner, { height: 182 }]}
        />
        <Text
          style={[
            HomeStyle.titleHome,
            { marginBottom: 15, color: colorPrimary.default },
          ]}
        >
          {courtDetail?.courtName}
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
              Rp {IDRFormat(courtDetail?.min)},-
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
          {courtDetail?.description}
        </Text>
        <CardFacilityType
          titile={courtDetail?.facility}
          icon={IconTennisBall}
        />
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
        {watch("repeatType") === "weekly" && (
          <InputSelect
            placeholder="Select Day"
            style={{ marginBottom: 15 }}
            label="Every"
            control={control}
            name="every"
            errorMessage={errors.every?.message}
            options={[
              "SENIN",
              "SELASA",
              "RABU",
              "KAMIS",
              "JUM`AT",
              "SABTU",
              "MINGGU",
            ]}
          />
        )}
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
          <Text>
            {watch("bookingType") && (
              <Text>{`${watch("bookingType")} > `}</Text>
            )}
            {watch("repeatType") && (
              <Text>{`${watch("repeatType").toUpperCase()} > `}</Text>
            )}
            {watch("untilDate") && (
              <Text>{`${moment(watch("untilDate")).format(
                "DD MMM YYYY"
              )}`}</Text>
            )}
          </Text>
        </Text>
        {dataSource?.length ? (
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
                      item.statusBook === "SELECTED" ||
                      item.statusBook === "CART") &&
                    onChooseCard(item.id)
                  }
                  style={[
                    BookingStyle[
                      item.statusBook === "AVAILABLE"
                        ? "cardAvailable"
                        : item.statusBook === "SELECTED" ||
                          item.statusBook === "CART"
                        ? "cardSelected"
                        : item.statusBook === "WAITING_FOR_PAYMENT"
                        ? "cardWaitingPayment"
                        : item.statusBook === "APPROVED" ||
                          item.statusBook === "WAITING_FOR_APPROVED"
                        ? "cardReserved"
                        : ""
                    ],
                    {
                      flexDirection: "column",
                      marginVertical: 2,
                      marginHorizontal: 2,
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
                          : item.statusBook === "SELECTED" ||
                            item.statusBook === "CART"
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
        ) : (
          <Text
            style={{
              textAlign: "center",
              marginTop: 50,
              fontSize: 12,
              color: colorDark.default,
              fontStyle: "italic",
            }}
          >
            -- Data not found --
          </Text>
        )}
      </Layout>
      {dataSource?.filter(
        (e) => e.statusBook === "SELECTED" || e.statusBook === "CART"
      )?.length ? (
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
                ?.filter(
                  (e) => e.statusBook === "SELECTED" || e.statusBook === "CART"
                )
                ?.length?.toString()}{" "}
              Hours
            </Text>
          </Text>
          <Button
            label="Check Out"
            type="primary"
            btnType="button"
            onClick={onSubmit}
            size="sm"
          />
        </View>
      ) : null}
    </React.Fragment>
  );
};

export default Booking;
