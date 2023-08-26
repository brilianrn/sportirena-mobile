import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HomeStyle from "../Home.style";
import { Global, colorBrown } from "../../../styles/Global.style";
import { IconPinLocation } from "../../../assets/images";

const Card = () => {
  return (
    <TouchableOpacity style={[HomeStyle.cardVenue]}>
      <Image
        source={{
          uri: "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20210216101046.jpg",
          height: 75,
          width: 182,
        }}
        style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          marginTop: 9,
          marginLeft: 15,
        }}
      >
        Lapangan Puri Surya Jaya
      </Text>
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
    </TouchableOpacity>
  );
};

export default Card;
