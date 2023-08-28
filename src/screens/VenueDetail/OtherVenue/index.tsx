import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { Global, colorPrimary } from "../../../styles/Global.style";
import CarouselCourt from "react-native-snap-carousel";
import { IconArrowChevron } from "../../../assets/images";
import OtherVenueCard from "./Card";

const OtherVenue = () => {
  return (
    <React.Fragment>
      <View style={[Global.justifyBetween, { width: "100%", marginTop: 37 }]}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlignVertical: "center",
            color: colorPrimary.default,
          }}
        >
          Available Courts
        </Text>
        <TouchableOpacity style={[Global.justifyEnd, { gap: 3, marginTop: 4 }]}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 10,
              color: colorPrimary.default,
            }}
          >
            Show all
          </Text>
          <Image source={IconArrowChevron} style={{ marginTop: 1 }} />
        </TouchableOpacity>
      </View>
      <SafeAreaView
        style={{
          width: "114%",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CarouselCourt
            layout="default"
            loop
            data={[1, 2, 3, 4, 5]}
            sliderWidth={210}
            itemWidth={220}
            renderItem={() => <OtherVenueCard />}
          />
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default OtherVenue;
