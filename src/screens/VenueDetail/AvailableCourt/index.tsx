import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import CarouselCourt from "react-native-snap-carousel";
import { IconArrowChevron } from "../../../assets/images";
import { Global, colorPrimary } from "../../../styles/Global.style";
import { VenueCourt } from "../../../types/venue.type";
import AvailableCourtCard from "./Card";

const AvailableCourt: FC<{ data: VenueCourt[]; title?: string }> = ({
  data,
  title,
}) => {
  return (
    <React.Fragment>
      <View style={[Global.justifyBetween, { width: "100%" }]}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlignVertical: "center",
            color: colorPrimary.default,
          }}
        >
          {title || "Available Courts"}
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
            data={data}
            sliderWidth={210}
            itemWidth={220}
            renderItem={({ item, index }) => (
              <AvailableCourtCard item={item} key={index} />
            )}
          />
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default AvailableCourt;
