import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IconPinLocation } from "../../../assets/images";
import { Global, colorBrown, colorPrimary } from "../../../styles/Global.style";
import HomeStyle from "../../Home/Home.style";
import { VenueType } from "../../../types/venue.type";
import { IDRFormat } from "../../../utils/formattor";
import { useVenue } from "../../../hooks/useVenue";

const OtherVenueCard: FC<{ item: VenueType }> = ({ item }) => {
  /* Hooks */
  const { fetchVenueDetail } = useVenue();
  return (
    <TouchableOpacity
      style={[HomeStyle.cardVenue, { height: "auto", width: 211 }]}
      onPress={() => fetchVenueDetail(item)}
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
        numberOfLines={1}
        style={{
          fontSize: 12,
          fontWeight: "600",
          marginTop: 9,
          marginLeft: 15,
          color: colorPrimary.default,
        }}
      >
        {item.venueName}
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
          {item.totalCourt} courts
        </Text>
      </View>
      <View
        style={[Global.justifyStart, { gap: 6, marginTop: 6, marginLeft: 15 }]}
      >
        <Image source={IconPinLocation} />
        <Text
          numberOfLines={1}
          style={{ color: colorBrown.default, fontSize: 10, fontWeight: "600" }}
        >
          {item.regencyName}
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
          Rp {IDRFormat(item.minPrice)} ,-
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OtherVenueCard;
