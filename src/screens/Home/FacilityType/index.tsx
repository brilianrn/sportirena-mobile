import React, { FC } from "react";
import { Text, View } from "react-native";
import {
  IconBasketBall,
  IconPool,
  IconSoccer,
  IconTennisBall,
} from "../../../assets/images";
import { Global } from "../../../styles/Global.style";
import { FacilityTypeName } from "../../../types/common.type";
import HomeStyle from "../Home.style";
import { FacilityTypeProps } from "../Home.type";
import CardFacilityType from "./Card";

const FacilityType: FC<FacilityTypeProps> = ({ data }) => {
  const iconType = (facilityType: FacilityTypeName) => {
    switch (facilityType) {
      case "Football":
        return IconSoccer;
      case "Swimming Pool":
        return IconPool;
      case "Tennis":
        return IconTennisBall;
      case "Basketball":
        return IconBasketBall;
      default:
        return IconTennisBall;
    }
  };
  return (
    <React.Fragment>
      {data?.length ? (
        <>
          <Text style={[HomeStyle.titleHome, { marginBottom: 15 }]}>
            Facility Type
          </Text>
          <View style={[Global.justifyStart, { gap: 15 }]}>
            {data.map((e) => (
              <CardFacilityType
                titile={e.typeName}
                icon={iconType(e.typeName || e.facilityTypeName)}
                key={e.id}
              />
            ))}
          </View>
        </>
      ) : null}
    </React.Fragment>
  );
};

export default FacilityType;
