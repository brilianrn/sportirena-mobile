import moment from "moment";
import React, { FC } from "react";
import {
  Image as ImageRN,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IconArrowChevronBlack, IconMoney } from "../../../assets/images";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import TabStyle from "../../../components/Tab/Tab.style";
import { useMyBooking } from "../../../hooks/useMyBooking";
import { Global, colorDark, colorGray } from "../../../styles/Global.style";
import { IDRFormat } from "../../../utils/formattor";
import MyBookingStyle from "../MyBooking.style";
import { MyBookingCard } from "../MyBooking.type";

const CardMyBooking: FC<MyBookingCard> = ({ data, status }) => {
  /* Hooks */
  const {
    getWaitingPaymentDetail,
    fetchWaitingApprovalDetail,
    fetchReservedDetail,
  } = useMyBooking();
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={() => fetchWaitingApprovalDetail(data.id)}
        style={[MyBookingStyle.card, TabStyle.shadowProp]}
      >
        <View style={[Global.justifyBetween]}>
          <View>
            <Text style={[MyBookingStyle.cardInv]}>
              #
              {status === "WAITING_FOR_PAYMENT" ||
              status === "WAITING_FOR_APPROVED"
                ? data?.invoiceCode
                : data?.booking?.invoiceCode}
            </Text>
            <Text style={[MyBookingStyle.cardTitle]}>
              {data.detailbooking?.venueName}
            </Text>
          </View>
          <Text style={[MyBookingStyle.cardInv]}>
            {data.statusBook.split("_").join(" ")}
          </Text>
        </View>
        <View style={[Global.justifyStart, { gap: 17 }]}>
          <Image
            src={data.pathName as string}
            style={{ height: 80, width: 80, borderRadius: 8 }}
          />
          <View style={{ position: "relative" }}>
            <Text
              style={[
                MyBookingStyle.cardInv,
                {
                  color: colorDark.default,
                  fontWeight: "400",
                  marginBottom: 5,
                },
              ]}
            >
              {data?.courtName}
            </Text>
            <View
              style={[
                Global.justifyStart,
                {
                  gap: 5,
                  alignItems: "center",
                },
              ]}
            >
              {status === "WAITING_FOR_PAYMENT" ? (
                <Text
                  style={[
                    MyBookingStyle.cardInv,
                    { color: colorDark.default, fontWeight: "400" },
                  ]}
                >
                  Booking Lapangan
                </Text>
              ) : (
                <Text
                  style={[
                    MyBookingStyle.cardInv,
                    { color: colorDark.default, fontWeight: "400" },
                  ]}
                >
                  {moment(data.bookDate).format("DD MMMM yyyy")}
                </Text>
              )}
              <Text style={[{ fontSize: 5 }]}>●</Text>
              {status === "WAITING_FOR_PAYMENT" ? (
                <Text style={[MyBookingStyle.cardInv]}>
                  {data.totalHour} Jam
                </Text>
              ) : (
                <Text style={[MyBookingStyle.cardInv]}>
                  {data.startTime} - {data.endTime}
                </Text>
              )}
            </View>
            <TouchableOpacity
              style={[
                Global.justifyStart,
                { gap: 5, alignItems: "center", marginTop: 6 },
              ]}
            >
              <Text style={[MyBookingStyle.cardInv]}>Kunjungi Venue</Text>
              <ImageRN
                source={IconArrowChevronBlack}
                style={[{ marginTop: 2 }]}
              />
            </TouchableOpacity>
            <View
              style={[
                {
                  marginTop: 12,
                  gap: 5,
                  alignItems: "center",
                },
                Global.justifyStart,
              ]}
            >
              <ImageRN source={IconMoney} />
              <Text style={[MyBookingStyle.cardInv]}>
                Rp{" "}
                {IDRFormat(
                  status === "WAITING_FOR_PAYMENT"
                    ? data.totalPrice
                    : data.price
                )}
              </Text>
            </View>
          </View>
        </View>
        {data.statusBook !== "DONE" && (
          <>
            {(data.statusBook === "WAITING_FOR_APPROVED" ||
              data.statusBook === "WAITING_FOR_PAYMENT") && (
              <View
                style={{
                  borderBottomColor: "gray",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginVertical: 11,
                }}
              />
            )}
            <View
              style={[
                Global.justifyBetween,
                {
                  alignItems: "center",
                  alignSelf:
                    data.statusBook === "WAITING_FOR_APPROVED" ||
                    data.statusBook === "APPROVED"
                      ? "flex-end"
                      : "auto",
                },
              ]}
            >
              {data.statusBook === "WAITING_FOR_PAYMENT" && (
                <View>
                  <Text
                    style={{
                      color: colorGray[500],
                      fontSize: 10,
                      fontWeight: "300",
                    }}
                  >
                    Bayar sebelum
                  </Text>
                  <Text
                    style={{
                      color: colorGray[500],
                      fontSize: 10,
                      fontWeight: "300",
                    }}
                  >
                    {moment(data.expiry_date).format("DD-MM-YYYY HH:mm")} WIB
                  </Text>
                </View>
              )}
              {data.statusBook === "WAITING_FOR_PAYMENT" ? (
                <Button
                  label="Payment"
                  btnType="button"
                  type="primary"
                  onClick={() => getWaitingPaymentDetail(data)}
                  size="sm"
                />
              ) : data.statusBook === "WAITING_FOR_APPROVED" ? (
                <View style={{ width: 100 }}>
                  <Button
                    label="Detail"
                    btnType="button"
                    type="outline-primary"
                    onClick={() =>
                      data.statusBook === "WAITING_FOR_APPROVED"
                        ? fetchWaitingApprovalDetail(data.id)
                        : fetchReservedDetail(data.id)
                    }
                    size="sm"
                  />
                </View>
              ) : null}
            </View>
          </>
        )}
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default CardMyBooking;
