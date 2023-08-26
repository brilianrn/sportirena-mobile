import React, { useState } from "react";
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

const Venues = () => {
  const [activeItem, setActiveItem] = useState<any>();
  const carouselItems = [
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ];
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
            data={carouselItems}
            sliderWidth={210}
            itemWidth={190}
            renderItem={() => <Card />}
            onSnapToItem={(index) => setActiveItem(index)}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Venues;
