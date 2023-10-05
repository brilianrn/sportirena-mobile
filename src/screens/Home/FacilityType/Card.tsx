import { View, Text, Image } from "react-native";
import React, { FC, useMemo } from "react";
import { CardFacilityTypeProps } from "../Home.type";
import HomeStyle from "../Home.style";
import {
  IconBadminton,
  IconBasketBall,
  IconFutsal,
  IconPool,
  IconSoccer,
  IconTennisBall,
} from "../../../assets/images";

const CardFacilityType: FC<CardFacilityTypeProps> = ({
  icon,
  title,
  iconHeight,
  iconWidth,
  titleStyle,
}) => {
  const iconType = useMemo(() => {
    switch (title) {
      case "Football":
        return IconSoccer;
      case "Swimming Pool":
        return IconPool;
      case "Tennis":
        return IconTennisBall;
      case "Basketball":
        return IconBasketBall;
      case "Fustal":
        return IconFutsal;
      case "Badminton":
        return IconBadminton;
      default:
        return IconTennisBall;
    }
  }, [title]);
  return (
    <View
      style={{
        width: iconWidth ? iconWidth + 15 : 65,
        ...HomeStyle.cardOuterFacilityType,
      }}
    >
      <View
        style={{
          height: iconHeight ? iconHeight + 15 : 65,
          ...HomeStyle.cardInnerFacilityType,
        }}
      >
        <Image
          source={icon || iconType}
          style={{ height: iconHeight || 35, width: iconWidth || 35 }}
        />
      </View>
      <Text style={titleStyle || HomeStyle.cardTitle}>{title}</Text>
    </View>
  );
};

export default CardFacilityType;
