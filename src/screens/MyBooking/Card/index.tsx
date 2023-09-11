import {
  View,
  Text,
  Image as ImageRN,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { FC } from "react";
import { Global, colorDark, colorGray } from "../../../styles/Global.style";
import MyBookingStyle from "../MyBooking.style";
import TabStyle from "../../../components/Tab/Tab.style";
import { IconArrowChevronBlack, IconMoney } from "../../../assets/images";
import { MyBookingCard } from "../MyBooking.type";
import { IDRFormat } from "../../../utils/formattor";
import Image from "../../../components/Image";
import Button from "../../../components/Button";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { myBookingGuestName } from "../../../constants";

const CardMyBooking: FC<MyBookingCard> = ({ data }) => {
  /* Navigate */
  const { navigate } = useNavigation();
  return (
    <React.Fragment>
      <View style={[MyBookingStyle.card, TabStyle.shadowProp]}>
        <View style={[Global.justifyBetween]}>
          <View>
            <Text style={[MyBookingStyle.cardInv]}>#{data.invoiceCode}</Text>
            <Text style={[MyBookingStyle.cardTitle]}>
              {data.detailbooking.venuePath}
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
            <View
              style={[
                Global.justifyStart,
                {
                  gap: 5,
                  alignItems: "center",
                },
              ]}
            >
              <Text
                style={[
                  MyBookingStyle.cardInv,
                  { color: colorDark.default, fontWeight: "400" },
                ]}
              >
                Booking Lapangan
              </Text>
              <Text style={[{ fontSize: 5 }]}>●</Text>
              <Text style={[MyBookingStyle.cardInv]}>{data.totalHour} Jam</Text>
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
                  position: "absolute",
                  bottom: 0,
                  right: -70,
                  gap: 5,
                  alignItems: "center",
                },
                Global.justifyStart,
              ]}
            >
              <ImageRN source={IconMoney} />
              <Text style={[MyBookingStyle.cardInv]}>
                Rp {IDRFormat(data.totalPrice)}
              </Text>
            </View>
          </View>
        </View>
        {data.statusBook !== "DONE" && (
          <>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginVertical: 11,
              }}
            />
            <View
              style={[
                Global.justifyBetween,
                {
                  alignItems: "center",
                  alignSelf:
                    data.statusBook === "RESERVED" ? "flex-end" : "auto",
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
                  onClick={console.log}
                  size="sm"
                />
              ) : data.statusBook === "RESERVED" ? (
                <View style={{}}>
                  <Button
                    label="Guest"
                    btnType="button"
                    type="primary"
                    onClick={() => navigate(myBookingGuestName as never)}
                    size="sm"
                  />
                </View>
              ) : null}
            </View>
          </>
        )}
      </View>
    </React.Fragment>
  );
};

export default CardMyBooking;
