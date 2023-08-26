import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { CardFacilityTypeProps } from "../Home.type";
import HomeStyle from "../Home.style";

const CardFacilityType: FC<CardFacilityTypeProps> = ({ icon, titile }) => {
  return (
    <View style={HomeStyle.cardOuterFacilityType}>
      <View style={HomeStyle.cardInnerFacilityType}>
        <Image source={icon} style={{ height: 35, width: 35 }} />
      </View>
      <Text style={HomeStyle.cardTitle}>{titile}</Text>
    </View>
  );
};

export default CardFacilityType;
