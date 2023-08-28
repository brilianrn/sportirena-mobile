import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/Button";
import { Global, colorBrown, colorPrimary } from "../../../styles/Global.style";
import HomeStyle from "../../Home/Home.style";
import { IconTennisBall } from "../../../assets/images";

const AvailableCourtCard = () => {
  return (
    <TouchableOpacity
      style={[HomeStyle.cardVenue, { height: "auto", width: 211 }]}
    >
      <View style={{ position: "relative" }}>
        <View
          style={{
            position: "absolute",
            backgroundColor: "white",
            zIndex: 10,
            padding: 8,
            borderRadius: 5,
            right: 6,
            top: 6,
          }}
        >
          <Image
            source={IconTennisBall}
            height={10}
            width={10}
            style={{ maxHeight: 10, maxWidth: 10 }}
          />
        </View>
        <Image
          source={{
            uri: "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20210216101046.jpg",
            height: 75,
            width: 211,
          }}
          style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          marginTop: 9,
          marginLeft: 15,
          color: colorPrimary.default,
        }}
      >
        Lapangan Outdor #1
      </Text>
      <View
        style={[Global.justifyStart, { gap: 6, marginTop: 6, marginLeft: 15 }]}
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
      <Button
        label="Book Now"
        btnType="button"
        type="primary"
        size="sm"
        onClick={console.log}
        style={{ paddingHorizontal: 14, marginTop: 25, marginBottom: 10 }}
      />
    </TouchableOpacity>
  );
};

export default AvailableCourtCard;
