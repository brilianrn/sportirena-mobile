import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IconPinLocation } from "../../../assets/images";
import { Global, colorBrown, colorPrimary } from "../../../styles/Global.style";
import HomeStyle from "../../Home/Home.style";

const OtherVenueCard = () => {
  return (
    <TouchableOpacity
      style={[HomeStyle.cardVenue, { height: "auto", width: 211 }]}
    >
      <Image
        source={{
          uri: "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20210216101046.jpg",
          height: 75,
          width: 211,
        }}
        style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          marginTop: 9,
          marginLeft: 15,
          color: colorPrimary.default,
        }}
      >
        Lapangan Basket Putra Jaya
      </Text>
      <View
        style={[Global.justifyStart, { gap: 6, marginTop: 6, marginLeft: 15 }]}
      >
        <Text
          style={{ color: colorBrown.default, fontSize: 10, fontWeight: "400" }}
        >
          Facility,
        </Text>
        <Text
          style={{
            color: colorPrimary.default,
            fontSize: 10,
            fontWeight: "600",
          }}
        >
          5 courts
        </Text>
      </View>
      <View
        style={[Global.justifyStart, { gap: 6, marginTop: 6, marginLeft: 15 }]}
      >
        <Image source={IconPinLocation} />
        <Text
          style={{ color: colorBrown.default, fontSize: 10, fontWeight: "600" }}
        >
          Jakarta Barat
        </Text>
      </View>
      <View
        style={[
          Global.justifyStart,
          { gap: 6, marginTop: 6, marginLeft: 15, marginBottom: 16 },
        ]}
      >
        <Text
          style={{ color: colorBrown.default, fontSize: 10, fontWeight: "400" }}
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
    </TouchableOpacity>
  );
};

export default OtherVenueCard;
