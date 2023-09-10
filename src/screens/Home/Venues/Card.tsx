import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import HomeStyle from "../Home.style";
import { Global, colorBrown } from "../../../styles/Global.style";
import { IconPinLocation } from "../../../assets/images";
import { VenueType } from "../../../types/venue.type";
import { BASE_URL_PREVIEW_IMG } from "../../../constants/host";

const Card: FC<{ data: VenueType }> = ({ data }) => {
  return (
    <TouchableOpacity style={[HomeStyle.cardVenue]}>
      <Image
        source={{
          uri: `${BASE_URL_PREVIEW_IMG}/${data?.pathName}/${data?.imageName}`,
          height: 75,
          width: 182,
        }}
        style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
      />
      <Text
        numberOfLines={1}
        style={[
          {
            fontSize: 12,
            fontWeight: "500",
            marginTop: 9,
            marginLeft: 15,
          },
        ]}
      >
        {data.venueName}
      </Text>
      <View
        style={[Global.justifyStart, { gap: 6, marginTop: 6, marginLeft: 15 }]}
      >
        <Image source={IconPinLocation} />
        <Text
          style={{ color: colorBrown.default, fontSize: 10, fontWeight: "600" }}
        >
          {data.regencyName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
