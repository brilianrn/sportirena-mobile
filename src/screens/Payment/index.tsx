import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  Image as ImageRN,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IconArrowChevron, IconInformationGray } from "../../assets/images";
import Button from "../../components/Button";
import { InputRadio } from "../../components/Input";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import { bookingName, transferBankPath } from "../../constants";
import { useBooking } from "../../hooks/useBooking";
import { IRootState } from "../../store/reducers";
import { Global, colorGray, colorPrimary } from "../../styles/Global.style";
import { IDRFormat } from "../../utils/formattor";
import { BookingType } from "../Booking/Booking.type";
import CardBooking from "./CardBooking";
import CardOffer from "./CardOffer";
import { setPaymentBookingHour } from "../../store/actions/booking.action";

const Payment = () => {
  /* Local State */
  const [dataSource, setDataSource] = useState<BookingType[]>();
  const [coupon, setCoupon] = useState<string>();
  const [paymentMethod, setPaymentMethod] = useState<
    "va" | "transfer" | string
  >("va");
  const [isCheckPrivacyPolice, setIsCheckPrivacyPolice] =
    useState<boolean>(false);
  const [isInformation, setIsInformation] = useState<boolean>(false);

  /* Redux */
  const dispatch = useDispatch();
  const { cart, courtDetail } = useSelector(
    (state: IRootState) => state.booking
  );

  /* Router */
  const { navigate } = useNavigation();

  /* Hooks */
  const { createBooking, isLoading } = useBooking();

  useEffect(() => {
    if (cart)
      setDataSource(
        cart.map((e: BookingType) => ({ ...e, bookDate: e?.date }))
      );
    else navigate(bookingName as never);
  }, [cart, setDataSource]);

  const normalPrice = useMemo(() => {
    const tempArr = dataSource?.filter((e) => e.isChecked).map((e) => e.price);
    let price = 0;
    if (tempArr) {
      for (let i = 0; i < tempArr?.length; i++) {
        price += tempArr[i];
      }
      return price;
    }
    return 0;
  }, [dataSource]);

  const priceWithServiceFee = useMemo(
    () =>
      normalPrice
        ? Number(normalPrice) +
          Number(process.env.EXPO_PUBLIC_SERVICE_FEE || 1000)
        : 0,
    [normalPrice]
  );

  const onContinuePayment = async () => {
    if (paymentMethod === "va") {
      return await createBooking({
        data: dataSource as BookingType[],
        serviceFee: Number(process.env.EXPO_PUBLIC_SERVICE_FEE || 1000),
      });
    }
    dispatch(setPaymentBookingHour(dataSource));
    return navigate(transferBankPath as never);
  };
  return (
    <React.Fragment>
      <Modal show={isInformation} setShow={setIsInformation}>
        <FlatList
          data={[
            {
              key: "1. Metode pembayaran virtual account melalui pihak ketiga dengan menggunakan virtual account",
            },
            {
              key: "2. Metode pembayaran Bank Account langsung ke bank account pemilik venue",
            },
          ]}
          renderItem={({ item }) => (
            <Text
              style={{
                fontSize: 12,
                fontWeight: "300",
                color: colorGray[500],
                textAlign: "justify",
                lineHeight: 18,
              }}
            >
              {item.key}
            </Text>
          )}
        />
      </Modal>
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
          dataSource?.map((e: BookingType, i: number) => (
            <CardBooking
              courtDetail={courtDetail}
              item={e}
              key={i}
              onDetaleBooking={() =>
                setDataSource(dataSource.filter((el) => e.id !== el.id))
              }
              setChooseBooking={(value) => {
                setDataSource(
                  dataSource.map((el) => ({
                    ...el,
                    isChecked: el.id === e.id ? value : el.isChecked,
                  }))
                );
              }}
            />
          ))
        ) : (
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              fontStyle: "italic",
              fontSize: 12,
            }}
          >
            -- Data not found --
          </Text>
        )}
        <CardOffer
          normalPrice={normalPrice}
          priceWithServiceFee={priceWithServiceFee}
          coupon={coupon}
          setCoupon={setCoupon}
          totalHours={dataSource?.filter((e) => e.isChecked)?.length as number}
          isCheckPrivacyPolice={isCheckPrivacyPolice}
          setIsCheckPrivacyPolice={setIsCheckPrivacyPolice}
        />
        <View
          style={[
            Global.justifyStart,
            { gap: 8, marginTop: 14, marginBottom: 7 },
          ]}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: colorPrimary.default,
            }}
          >
            Metode Pembayaran
          </Text>
          <TouchableOpacity
            onPress={() => setIsInformation(true)}
            style={{ paddingTop: "1%" }}
          >
            <ImageRN source={IconInformationGray} />
          </TouchableOpacity>
        </View>
        <View style={{ height: "5%" }}>
          <InputRadio
            type="row"
            value={paymentMethod}
            setValue={setPaymentMethod}
            options={[
              {
                label: "Virtual Account",
                value: "va",
              },
              {
                label: "Bank Account",
                value: "transfer",
              },
            ]}
          />
        </View>
        <Button
          label="Continue Payment"
          type="primary"
          btnType="button"
          onClick={onContinuePayment}
          size="sm"
          isDisable={
            !dataSource?.filter((e) => e.isChecked)?.length ||
            !isCheckPrivacyPolice
          }
          isSubmit={isLoading}
          style={{ marginTop: 19 }}
        />
      </Layout>
    </React.Fragment>
  );
};

export default Payment;
