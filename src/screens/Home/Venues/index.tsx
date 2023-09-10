import React, { FC, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { IconArrowChevron } from "../../../assets/images";
import { Global, colorPrimary } from "../../../styles/Global.style";
import Card from "./Card";
import { VenuesProps } from "../Home.type";
import { VenueType } from "../../../types/venue.type";

const Venues: FC<VenuesProps> = ({ data }) => {
  const [activeItem, setActiveItem] = useState<any>();
  return (
    <View>
      <View style={[Global.justifyBetween, { marginTop: 38, width: "100%" }]}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlignVertical: "center",
          }}
        >
          Venues
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
          <Carousel
            layout="default"
            data={data as VenueType[]}
            sliderWidth={210}
            itemWidth={190}
            renderItem={({ item, index }) => <Card data={item} key={index} />}
            onSnapToItem={(index) => setActiveItem(index)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Venues;
