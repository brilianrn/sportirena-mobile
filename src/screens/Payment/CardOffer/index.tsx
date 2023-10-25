import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { IconCoupon } from "../../../assets/images";
import Barier from "../../../components/Barrier";
import { InputCheckbox } from "../../../components/Input";
import { privacyPolicePath } from "../../../constants";
import { Global, colorGray, colorPrimary } from "../../../styles/Global.style";
import { CardOfferProps } from "../Payment.type";
import { IDRFormat } from "../../../utils/formattor";

const CardOffer: FC<CardOfferProps> = ({
  normalPrice,
  setCoupon,
  coupon,
  totalHours,
  isCheckPrivacyPolice,
  setIsCheckPrivacyPolice,
  priceWithServiceFee,
}) => {
  /* Router */
  const { navigate } = useNavigation();
  return (
    <React.Fragment>
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: colorGray[300],
          marginTop: 10,
          padding: 18,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "600",
            color: colorPrimary.default,
          }}
        >
          OFFER
        </Text>
        <View style={[Global.justifyStart, { gap: 12 }]}>
          <Image source={IconCoupon} style={{ marginTop: "4.5%" }} />
          <TextInput
            onChangeText={setCoupon}
            value={coupon}
            keyboardType="default"
            placeholder="Apply Coupon Code"
            autoCapitalize="none"
            style={{
              fontSize: 9,
              fontWeight: "500",
              color: colorGray[600],
              width: "90%",
              height: "100%",
              borderBottomWidth: 1,
              borderColor: colorGray[500],
              paddingLeft: 8,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "600",
            color: colorPrimary.default,
            marginTop: 20,
            marginBottom: 7,
          }}
        >
          PRICE SUMMARY
        </Text>
        <View style={[Global.justifyBetween]}>
          <View>
            <Text style={{ fontSize: 10 }}>Total Hours</Text>
            <Text style={{ fontSize: 10, marginVertical: 10 }}>Item Price</Text>
            <Text style={{ fontSize: 10, marginBottom: 10 }}>Service Fee</Text>
            <Text style={{ fontSize: 10 }}>Subtotal</Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                marginVertical: 10,
              }}
            >
              Grand Total
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 10, fontWeight: "600" }}>
              {totalHours} Jam
            </Text>
            <Text
              style={{ fontSize: 10, fontWeight: "600", marginVertical: 10 }}
            >
              IDR {IDRFormat(normalPrice)},-
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "600", marginBottom: 10 }}>
              IDR{" "}
              {IDRFormat(Number(process.env.EXPO_PUBLIC_SERVICE_FEE || 1500))},-
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "600" }}>
              IDR {IDRFormat(priceWithServiceFee)},-
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: "600", marginVertical: 10 }}
            >
              IDR {IDRFormat(priceWithServiceFee)},-
            </Text>
          </View>
        </View>
        <Barier style={{ marginVertical: 11 }} />
        <View style={[Global.justifyStart, { gap: 8 }]}>
          <InputCheckbox
            checked={isCheckPrivacyPolice}
            setChecked={setIsCheckPrivacyPolice}
          />
          <Text
            style={{
              width: "88%",
              textAlign: "justify",
              fontSize: 10,
              color: colorGray[500],
            }}
          >
            Dengan melakukan proses checkout, saya menyatakan bahwa saya telah
            membaca, memahami, dan setuju dengan semua{" "}
            <Text
              onPress={() => navigate(privacyPolicePath as never)}
              style={{
                fontSize: 10,
                color: colorPrimary.default,
                textDecorationLine: "underline",
              }}
            >
              Privacy Policy{" "}
            </Text>
            yang berlaku sesuai standar dari venue ini.
          </Text>
        </View>
      </View>
    </React.Fragment>
  );
};

export default CardOffer;
