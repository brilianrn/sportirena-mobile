import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  IconCardBooked,
  IconCardClosed,
  IconCardWaiting,
  IconCart,
  IconCartCard,
  IconCartRoller,
} from "../../assets/images";
import Button from "../../components/Button";
import { InputDateRange } from "../../components/Input";
import Layout from "../../components/Layout";
import { paymentPath, venueDetailPath } from "../../constants";
import { useBooking } from "../../hooks/useBooking";
import { setScheduleTime } from "../../store/actions/booking.action";
import { IRootState } from "../../store/reducers";
import {
  Global,
  colorDanger,
  colorGray,
  colorPrimary,
  colorWarning,
} from "../../styles/Global.style";
import { formatDateArr, kFormatter } from "../../utils/formattor";
import { retrieveLocalStorageItem } from "../../utils/localStorage";
import BookingStyle from "./Booking.style";
import { ScheduleTime, TimeType } from "./Booking.type";
import BookingHeader from "./Header";

const Booking = ({ navigation }) => {
  /* Local State */
  const [dataSource, setDataSource] = useState<Array<ScheduleTime>>();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(
    new Date(moment().add(6, "days").toString())
  );

  /* Redux */
  const dispatch = useDispatch();
  const { cart, courtDetail, scheduleTime } = useSelector(
    (state: IRootState) => state.booking
  );
  const { venueDetail } = useSelector((state: IRootState) => state.venue);

  /* Hooks */
  const { fetchScheduleTime, addToCart, isLoading, fetchCart } = useBooking({
    navigation,
  });

  useEffect(() => {
    if (!courtDetail) navigation.push(venueDetailPath as never);
  }, [courtDetail]);

  useEffect(() => {
    if (courtDetail?.id && startDate && endDate) {
      fetchScheduleTime(
        courtDetail?.id,
        startDate?.toString(),
        endDate?.toString()
      );
      fetchCart(venueDetail?.id as string);
    } else {
      dispatch(setScheduleTime(undefined));
    }
  }, [courtDetail, startDate]);

  useEffect(() => {
    setDataSource(scheduleTime?.length ? scheduleTime : []);
    // setDataSource(
    //   scheduleTime?.length
    //     ? scheduleTime?.map((e: BookingType) => ({
    //         ...e,
    //         isOldCard: e.statusBook === "CART",
    //         isChecked: true,
    //       }))
    //     : []
    // );
  }, [scheduleTime]);

  const onChooseCard = (time: string, id: string) => {
    setDataSource(
      dataSource?.map((e) => {
        if (e.startEndTime === time) {
          return {
            ...e,
            times: e.times.map((el) => {
              if (id === el.id) {
                return {
                  ...el,
                  statusBook:
                    el.statusBook?.toUpperCase() === "AVAILABLE"
                      ? "SELECTED"
                      : el.statusBook?.toUpperCase() === "SELECTED"
                      ? "AVAILABLE"
                      : el.statusBook,
                };
              }
              return el;
            }),
          };
        }
        return e;
      })
    );
  };

  const onSubmit = async () => {
    navigation.push(paymentPath as never);
  };

  const selectedBook = useMemo(() => {
    const result: TimeType[] = [];
    dataSource?.forEach((e) => {
      e?.times?.forEach((el) => {
        if (el?.statusBook?.toLowerCase() === "selected") {
          result.push({
            ...el,
            courtId: courtDetail?.id,
            venueId: courtDetail?.idVenue,
            courtName: courtDetail?.courtName,
            openHoursId: el?.id,
          });
        }
      });
    });
    return result;
  }, [dataSource]);

  const onAddCart = async () => {
    const payload = selectedBook.filter(
      (e) => e.statusBook?.toLowerCase() === "selected"
    );
    if (payload?.length) {
      const user = await retrieveLocalStorageItem("userInfo");
      const userInfo = JSON.parse(user as string);
      addToCart(
        selectedBook.filter((e) => e.statusBook?.toLowerCase() === "selected"),
        {
          startDate: moment(new Date(startDate)).format("yyyy-MM-DD"),
          endDate: moment(new Date(endDate)).format("yyyy-MM-DD"),
          courtId: courtDetail?.id,
          customerId: userInfo?.id,
        },
        {
          courtId: courtDetail?.id,
          customerId: userInfo?.id,
          courtName: courtDetail?.label,
          date: moment(new Date(startDate)).format("yyyy-MM-DD"),
        }
      ).then(async () => {
        setDataSource(undefined);
        await fetchScheduleTime(
          courtDetail?.id,
          startDate?.toString(),
          endDate?.toString()
        );
      });
    }
  };

  const cartBook = useMemo(() => {
    const result: TimeType[] = [];
    dataSource?.forEach((e) => {
      e?.times?.forEach((el) => {
        if (el?.statusBook?.toLowerCase() === "cart") {
          result.push(el);
        }
      });
    });
    return result;
  }, [dataSource]);
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label={courtDetail?.courtName}
        backHref={venueDetailPath}
        navigation={navigation}
      >
        <BookingHeader
          courtDetail={courtDetail}
          venueName={venueDetail?.venueName}
        />
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <InputDateRange
            style={{
              width: 300,
              marginHorizontal: "auto",
              justifyContent: "center",
              marginTop: 23,
            }}
            totalDiffDays={6}
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            minDate={new Date()}
            maxDate={new Date(moment().add(29, "days").toString())}
          />
        </View>
        <View
          style={[
            Global.justifyBetween,
            { marginTop: 12, alignSelf: "center" },
          ]}
        >
          <View style={[Global.justifyStart, { gap: 5, flex: 1 }]}>
            <View
              style={{
                backgroundColor: colorPrimary[400],
                height: 15,
                width: 15,
                marginVertical: "auto",
              }}
            />
            <Text style={{ marginVertical: "auto", fontSize: 8, marginTop: 2 }}>
              Selected
            </Text>
          </View>
          <View style={[Global.justifyStart, { gap: 5, flex: 1 }]}>
            <View
              style={{
                backgroundColor: colorWarning[100],
                height: 15,
                width: 15,
                marginVertical: "auto",
              }}
            />
            <Text style={{ marginVertical: "auto", fontSize: 8, marginTop: 2 }}>
              Wait Payment
            </Text>
          </View>
          <View
            style={[Global.justifyStart, { gap: 5, flex: 1, paddingLeft: 20 }]}
          >
            <View
              style={{
                backgroundColor: colorDanger[100],
                height: 15,
                width: 15,
                marginVertical: "auto",
              }}
            />
            <Text style={{ marginVertical: "auto", fontSize: 8, marginTop: 2 }}>
              Booked
            </Text>
          </View>
          <View style={[Global.justifyStart, { gap: 5, flex: 1 }]}>
            <View
              style={{
                backgroundColor: colorGray[300],
                height: 15,
                width: 15,
                marginVertical: "auto",
              }}
            />
            <Text style={{ marginVertical: "auto", fontSize: 8, marginTop: 2 }}>
              Not Available
            </Text>
          </View>
        </View>
        <ScrollView horizontal style={{ alignSelf: "center" }}>
          <View>
            <View
              style={[
                Global.justifyBetween,
                {
                  gap: 7,
                  alignSelf: "center",
                  marginTop: 20,
                  marginBottom: 10,
                },
              ]}
            >
              {formatDateArr(startDate.toString(), endDate.toString()).map(
                (e, i) => (
                  <View style={{ width: 40 }} key={i}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 10,
                        fontWeight: "600",
                        color: "#737374",
                        marginBottom: 4,
                      }}
                    >
                      {moment(new Date(e).toString()).format("ddd")}
                    </Text>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 10,
                      }}
                    >
                      {moment(new Date(e).toString()).format("D MMM")}
                    </Text>
                  </View>
                )
              )}
            </View>
            {isLoading ? (
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 100,
                  color: colorPrimary.default,
                }}
              >
                Loading ...
              </Text>
            ) : (
              <>
                {dataSource?.map((e, i) => (
                  <View
                    key={i}
                    style={[
                      Global.justifyBetween,
                      { gap: 7, alignSelf: "center", marginTop: 5 },
                    ]}
                  >
                    {e.times.map((el, j) => (
                      <TouchableOpacity
                        onPress={() =>
                          (el.statusBook === "AVAILABLE" ||
                            el.statusBook === "SELECTED" ||
                            el.statusBook === "CART") &&
                          onChooseCard(e.startEndTime, el?.id as string)
                        }
                        style={[
                          BookingStyle[
                            el.statusBook === "AVAILABLE"
                              ? "cardAvailable"
                              : el.statusBook === "SELECTED" ||
                                el.statusBook === "CART"
                              ? "cardSelected"
                              : el.statusBook === "WAITING_FOR_PAYMENT"
                              ? "cardWaitingPayment"
                              : el.statusBook === "APPROVED" ||
                                el.statusBook === "WAITING_FOR_APPROVED"
                              ? "cardReserved"
                              : "cardClosed"
                          ],
                          {
                            width: 40,
                            borderWidth: 1,
                            borderColor: colorGray[300],
                            paddingVertical: 10,
                            paddingHorizontal: 2,
                            alignItems: "center",
                            justifyContent: "center",
                          },
                        ]}
                        key={j}
                      >
                        {el.startTime &&
                          (el.statusBook === "AVAILABLE" ||
                            el.statusBook === "SELECTED") && (
                            <Text
                              style={{
                                textAlign: "center",
                                fontSize: 10,
                                fontWeight: "600",
                                color: "#737374",
                                marginBottom: 3,
                              }}
                            >
                              {el.startTime}
                            </Text>
                          )}
                        {!el.startTime && !el.price ? (
                          <Image
                            source={IconCardClosed}
                            style={{ width: 15, height: 15 }}
                          />
                        ) : (
                          <>
                            {el.statusBook === "CART" ? (
                              <Image
                                source={IconCartCard}
                                style={{ height: 13, width: 15 }}
                              />
                            ) : el.statusBook === "WAITING_FOR_PAYMENT" ? (
                              <Image
                                source={IconCardWaiting}
                                style={{ height: 20 }}
                              />
                            ) : el.statusBook === "WAITING_FOR_APPROVED" ||
                              el.statusBook === "APPROVED" ? (
                              <Image
                                source={IconCardBooked}
                                style={{ width: 15, height: 15 }}
                              />
                            ) : null}
                          </>
                        )}
                        {el?.price &&
                          (el.statusBook === "AVAILABLE" ||
                            el.statusBook === "SELECTED") && (
                            <Text
                              style={{
                                textAlign: "center",
                                fontSize: 12,
                                fontWeight: "600",
                              }}
                            >
                              {el.price
                                ? kFormatter(el.price || 0)
                                : "Not Available"}
                            </Text>
                          )}
                      </TouchableOpacity>
                    ))}
                  </View>
                ))}
              </>
            )}
          </View>
        </ScrollView>
      </Layout>
      {selectedBook?.length || cartBook?.length ? (
        <View style={[Global.justifyBetween, BookingStyle.cardTotalHour]}>
          <TouchableOpacity
            onPress={onAddCart}
            style={{ marginTop: 10, position: "relative" }}
          >
            <View
              style={{
                backgroundColor: colorDanger.default,
                paddingVertical: 3,
                paddingHorizontal: 6,
                position: "absolute",
                top: -10,
                right: -18,
                borderRadius: 50,
                minWidth: 30,
                maxWidth: 50,
              }}
            >
              <Text
                style={{ fontSize: 10, color: "white", textAlign: "center" }}
              >
                {selectedBook?.length}
              </Text>
            </View>
            <Image source={IconCartRoller} />
          </TouchableOpacity>
          <View style={[Global.justifyEnd, { gap: 8 }]}>
            <Button
              label="Check Out"
              type="primary"
              btnType="button"
              onClick={onSubmit}
              size="sm"
              isSubmit={isLoading}
              isDisable={!cartBook?.length}
            />
            <TouchableOpacity
              onPress={cartBook?.length ? onSubmit : undefined}
              style={{ marginTop: 10, position: "relative" }}
            >
              <View
                style={{
                  backgroundColor: colorDanger.default,
                  paddingVertical: 3,
                  paddingHorizontal: 6,
                  position: "absolute",
                  top: -10,
                  right: -18,
                  borderRadius: 50,
                  width: 30,
                  maxWidth: 50,
                }}
              >
                <Text
                  style={{ fontSize: 10, color: "white", textAlign: "center" }}
                >
                  {cartBook?.length}
                </Text>
              </View>
              <Image source={IconCart} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </React.Fragment>
  );
};

export default Booking;
