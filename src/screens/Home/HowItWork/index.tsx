import React from "react";
import { Image, Text, View } from "react-native";
import {
  IconAtmCardActive,
  IconBasketFieldActive,
  IconCalendarTimeActive,
  IconManRunActive,
} from "../../../assets/images";
import { Global } from "../../../styles/Global.style";
import HomeStyle from "../Home.style";

const HowItWork = () => {
  return (
    <React.Fragment>
      <Text style={[HomeStyle.titleHome, { marginTop: 30 }]}>How it work?</Text>
      <View style={[HomeStyle.howItWorkCard, Global.justifyStart, { gap: 16 }]}>
        <Image source={IconBasketFieldActive} style={{ marginTop: 2 }} />
        <Text style={HomeStyle.howItWorkText}>
          Search the right sport venue and courts for your sport activity.
        </Text>
      </View>
      <View style={[HomeStyle.howItWorkCard, Global.justifyStart, { gap: 16 }]}>
        <Image source={IconCalendarTimeActive} style={{ marginTop: 2 }} />
        <Text style={HomeStyle.howItWorkText}>
          Pick date and time that is match with your sport schedule and then
          book.
        </Text>
      </View>
      <View style={[HomeStyle.howItWorkCard, Global.justifyStart, { gap: 16 }]}>
        <Image source={IconAtmCardActive} style={{ marginTop: 2 }} />
        <Text style={HomeStyle.howItWorkText}>
          Pay for your booking only with one click with your device.
        </Text>
      </View>
      <View style={[HomeStyle.howItWorkCard, Global.justifyStart, { gap: 16 }]}>
        <Image source={IconManRunActive} style={{ marginTop: 2 }} />
        <Text style={HomeStyle.howItWorkText}>
          Show up on time and have a wonderful sport journey with us!
        </Text>
      </View>
    </React.Fragment>
  );
};

export default HowItWork;
