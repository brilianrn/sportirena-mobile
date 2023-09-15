import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { Image as ImageRN, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { IconArrowChevron, IconTrashRed } from "../../assets/images";
import Image from "../../components/Image";
import { InputCheckbox } from "../../components/Input";
import Layout from "../../components/Layout";
import { bookingName } from "../../constants";
import { IRootState } from "../../store/reducers";
import {
  Global,
  colorDark,
  colorGray,
  colorPrimary,
} from "../../styles/Global.style";
import { BookingType } from "../Booking/Booking.type";
import BookingStyle from "../Booking/Booking.style";
import Button from "../../components/Button";
import { IDRFormat } from "../../utils/formattor";

const Payment = () => {
  /* Local State */
  const [dataSource, setDataSource] = useState<BookingType[]>();

  /* Redux */
  const { cart, courtDetail } = useSelector(
    (state: IRootState) => state.booking
  );

  /* Router */
  const { navigate } = useNavigation();

  useEffect(() => {
    if (cart) setDataSource(cart);
    else navigate(bookingName as never);
  }, [cart, setDataSource]);

  const normalPrice = useMemo(() => {
    const tempArr = dataSource?.filter((e) => e.isChecked).map((e) => e.price);
    let price = 0;
    if (tempArr) {
      for (let i = 0; i < tempArr?.length; i++) {
        price += tempArr[i];
      }
      return IDRFormat(price);
    }
    return 0;
  }, [dataSource]);
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Payment"
        backHref={bookingName}
      >
        <View style={[Global.justifyBetween]}>
          <Text style={{ fontSize: 12, fontWeight: "500" }}>
            Booking {dataSource?.filter((e) => e.isChecked)?.length} jam
          </Text>
          <TouchableOpacity
            style={[Global.justifyEnd, { gap: 3, marginTop: 4 }]}
            onPress={() => navigate(bookingName as never)}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 10,
                color: colorPrimary.default,
              }}
            >
              Add more
            </Text>
            <ImageRN source={IconArrowChevron} style={{ marginTop: 1 }} />
          </TouchableOpacity>
        </View>
        {dataSource?.length ? (
          dataSource?.map((e: BookingType) => (
            <View
              key={e.id}
              style={[
                {
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: colorGray[300],
                  marginTop: 10,
                  padding: 18,
                },
              ]}
            >
              <View style={[Global.justifyBetween]}>
                <View style={[Global.justifyStart, { gap: 13 }]}>
                  <InputCheckbox
                    checked={e.isChecked}
                    setChecked={(value) => {
                      setDataSource(
                        dataSource.map((el) => ({
                          ...el,
                          isChecked: el.id === e.id ? value : el.isChecked,
                        }))
                      );
                    }}
                  />
                  <Image
                    useBaseUrl
                    src={`${courtDetail?.pathName}/${courtDetail?.imageName}`}
                    width={70}
                    height={90}
                    style={{ borderRadius: 8 }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: colorPrimary.default,
                        fontWeight: "600",
                      }}
                    >
                      {courtDetail?.courtName}
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        marginVertical: 3,
                      }}
                    >
                      {moment(e.date).format("DD MMMM yyyy")}
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: "600",
                      }}
                    >
                      {e.startTime} - {e.endTime}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    setDataSource(dataSource.filter((el) => e.id !== el.id))
                  }
                >
                  <ImageRN source={IconTrashRed} />
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={{ textAlign: "center" }}>-- Data not found --</Text>
        )}
        <View
          style={{
            backgroundColor: colorPrimary[100],
            padding: 18,
            borderRadius: 10,
            marginTop: 25,
          }}
        >
          <View style={[Global.justifyBetween]}>
            <View>
              <Text style={{ fontSize: 10 }}>Normal Price</Text>
              <Text style={{ fontSize: 10, marginVertical: 10 }}>
                Discount (0%)
              </Text>
              <Text style={{ fontSize: 10 }}>Total Price</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>
                Rp {normalPrice},-
              </Text>
              <Text
                style={{ fontSize: 10, fontWeight: "600", marginVertical: 10 }}
              >
                Rp {0},-
              </Text>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>
                Rp {normalPrice},-
              </Text>
            </View>
          </View>
        </View>
      </Layout>
      {dataSource?.filter((e) => e.isChecked)?.length ? (
        <View style={[Global.justifyBetween, BookingStyle.cardTotalHour]}>
          <View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
              }}
            >
              Grand Total (
              {dataSource?.filter((e) => e.isChecked)?.length?.toString()}{" "}
              Hours)
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: colorPrimary.default,
                marginTop: 3,
              }}
            >
              Rp {normalPrice},-
            </Text>
          </View>
          <Button
            label="Payment"
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

export default Payment;
