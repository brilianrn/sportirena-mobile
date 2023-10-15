import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image as ImageRN,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useDispatch, useSelector } from "react-redux";
import { IconCart, IconCartRoller } from "../../assets/images";
import Button from "../../components/Button";
import ButtonLink from "../../components/Button/Link";
import { InputDate } from "../../components/Input";
import Layout from "../../components/Layout";
import { paymentPath, venueDetailPath } from "../../constants";
import { useBooking } from "../../hooks/useBooking";
import { setCart, setScheduleTime } from "../../store/actions/booking.action";
import { IRootState } from "../../store/reducers";
import {
  Global,
  colorDanger,
  colorDark,
  colorGray,
  colorPrimary,
} from "../../styles/Global.style";
import { IDRFormat } from "../../utils/formattor";
import BookingStyle from "./Booking.style";
import { BookingType } from "./Booking.type";
import BookingHeader from "./Header";
import { MyBookingType } from "../MyBooking/MyBooking.type";

const Booking = () => {
  /* Local State */
  const [dataSource, setDataSource] = useState<BookingType[]>();
  const [dateChoosen, setDateChoosen] = useState<Date>();

  /* Router */
  const { navigate } = useNavigation();

  /* Redux */
  const dispatch = useDispatch();
  const { courtDetail, scheduleTime } = useSelector(
    (state: IRootState) => state.booking
  );
  const { venueDetail } = useSelector((state: IRootState) => state.venue);

  /* Hooks */
  const { fetchScheduleTime, addToCart, isLoading, removeCart, fetchCart } =
    useBooking();

  useEffect(() => {
    if (!courtDetail) navigate(venueDetailPath as never);
  }, [courtDetail]);

  useEffect(() => {
    if (courtDetail?.id && dateChoosen) {
      fetchScheduleTime(courtDetail?.id, dateChoosen?.toString() as string);
    } else {
      dispatch(setScheduleTime(undefined));
    }
  }, [courtDetail, dateChoosen]);

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
          if (e.statusBook !== "AVAILABLE") removeCart(id);
          return {
            ...e,
            statusBook: e.statusBook === "AVAILABLE" ? "SELECTED" : "AVAILABLE",
          };
        }
        return e;
      })
    );
  };

  const onSubmit = async () => {
    await addToCart(
      dataSource
        ?.filter((e) => e.statusBook === "SELECTED" || e.statusBook === "CART")
        .map((e) => ({
          ...e,
          date: moment(dateChoosen).format("yyyy-MM-DD"),
          openHoursId: e.id,
          courtId: courtDetail?.id,
          venueId: courtDetail?.idVenue,
        }))!
    ).then(async (_) => {
      await fetchCart(dataSource?.[0]?.customerId as string).then((_) =>
        navigate(paymentPath as never)
      );
    });
    // dispatch(
    //   setCart(
    //     dataSource
    //       ?.filter(
    //         (e) => e.statusBook === "SELECTED" || e.statusBook === "CART"
    //       )
    //       .map((e) => ({
    //         ...e,
    //         date: moment(dateChoosen).format("yyyy-MM-DD"),
    //         openHoursId: e.id,
    //         courtId: courtDetail?.id,
    //         venueId: courtDetail?.idVenue,
    //       }))
    //   )
    // );
  };
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label={courtDetail?.courtName}
        backHref={venueDetailPath}
      >
        <BookingHeader
          courtDetail={courtDetail}
          venueName={venueDetail?.venueName}
        />
        <InputDate
          label="Date"
          placeholder="DD-MMM-YYYY"
          name="untilDate"
          setValue={setDateChoosen}
          value={dateChoosen}
          minDate={new Date()}
          maxDate={30}
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
            {dateChoosen && (
              <Text>{`${moment(dateChoosen).format("DD MMMM YYYY")}`}</Text>
            )}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "600",
            }}
          >
            {dateChoosen && (
              <ButtonLink
                label=" | Clear"
                style={{ fontSize: 10, color: colorDanger.default }}
                onClick={() => setDateChoosen(undefined)}
              />
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
          <View style={{ marginTop: 10, position: "relative" }}>
            <View
              style={{
                backgroundColor: colorDanger.default,
                paddingVertical: 3,
                paddingHorizontal: 6,
                position: "absolute",
                top: -10,
                right: -10,
                borderRadius: 50,
              }}
            >
              <Text
                style={{ fontSize: 10, color: "white", textAlign: "center" }}
              >
                {
                  dataSource?.filter(
                    (e) =>
                      e.statusBook === "SELECTED" || e.statusBook === "CART"
                  )?.length
                }
              </Text>
            </View>
            <ImageRN source={IconCartRoller} />
          </View>
          <View style={[Global.justifyEnd, { gap: 8 }]}>
            <Button
              label="Check Out"
              type="primary"
              btnType="button"
              onClick={onSubmit}
              size="sm"
              isSubmit={isLoading}
            />
            <TouchableOpacity
              onPress={() =>
                addToCart(
                  dataSource
                    ?.filter(
                      (e) =>
                        e.statusBook === "SELECTED" || e.statusBook === "CART"
                    )
                    .map((e) => ({
                      ...e,
                      date: moment(dateChoosen).format("yyyy-MM-DD"),
                      openHoursId: e.id,
                      courtId: courtDetail?.id,
                      venueId: courtDetail?.idVenue,
                    }))
                )
              }
            >
              <ImageRN source={IconCart} style={{ marginTop: 10 }} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </React.Fragment>
  );
};

export default Booking;
