import React from "react";
import { View } from "react-native";
import {
  IconBasketBall,
  IconPool,
  IconSoccer,
  IconTennisBall,
} from "../../../assets/images";
import CardFacilityType from "./Card";
import { Global } from "../../../styles/Global.style";

const FacilityType = () => {
  return (
    <View style={[Global.justifyBetween, { gap: 3 }]}>
      <CardFacilityType titile="Tennis" icon={IconTennisBall} />
      <CardFacilityType titile="Footbal" icon={IconSoccer} />
      <CardFacilityType titile="Basketball" icon={IconBasketBall} />
      <CardFacilityType titile="Pool" icon={IconPool} />
    </View>
  );
};

export default FacilityType;
