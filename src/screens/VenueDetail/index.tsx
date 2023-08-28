import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { Carousel } from "react-native-auto-carousel";
import { useSelector } from "react-redux";
import {
  IconCalendarTimeActive,
  IconHeart,
  IconMap,
  IconShare,
} from "../../assets/images";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { venueName } from "../../constants";
import { IRootState } from "../../store/reducers";
import {
  Global,
  colorDark,
  colorPrimary,
  deviceWidth,
} from "../../styles/Global.style";
import { subStringLongText } from "../../utils/formattor";
import FacilityType from "../Home/FacilityType";
import AvailableCourt from "./AvailableCourt";
import VenueDetailStyle from "./VenueDetail.style";
import VenueLocation from "./Location";
import OtherVenue from "./OtherVenue";

const IMAGES = [
  "https://gelora-public-storage.s3-ap-southeast-1.amazonaws.com/upload/public-20210216101046.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvoLuL2zhXNoQ5UcCUCxc3eRkBuCNqtgstKMp9SxKy_fvQ4sbS6frHfrL6__IW6e7z-M&usqp=CAU",
  "https://liga.tennis/public/cache/images/1/9/4/6/1/1c2c656d0df11b6a72ee14d0c866eef9_1920_5760.jpg",
];
const VenueDetail = () => {
  /* Redux */
  const { venueDetail } = useSelector((state: IRootState) => state.venue);

  /* Navigate */
  const { goBack } = useNavigation();

  useEffect(() => {
    if (!venueDetail) {
      goBack();
    }
  }, [venueDetail]);

  return (
    <React.Fragment>
      <Layout
        useBottomBar
        useTopBar
        isSearchBar={false}
        label="Detail Venue"
        backHref={venueName}
      >
        <View
          style={{
            borderRadius: 10,
            height: 182,
          }}
        >
          <Carousel
            data={IMAGES}
            autoPlay
            autoPlayTime={4000}
            dotStyle={{
              backgroundColor: "white",
              width: 8,
              height: 8,
              borderRadius: 20,
              marginBottom: 42,
            }}
            renderItem={(item) => (
              <Image
                key={item}
                source={{ uri: item }}
                style={{
                  height: 182,
                  width: deviceWidth - 80,
                  borderRadius: 10,
                }}
              />
            )}
          />
        </View>
        <View style={[Global.justifyBetween, { marginTop: 23 }]}>
          <Text
            style={{
              color: colorPrimary.default,
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 4,
            }}
          >
            {subStringLongText("Lapangan Tenis Puri Indah", 42)}
          </Text>
          <Image source={IconCalendarTimeActive} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 10,
              color: colorDark[600],
              textAlign: "justify",
              marginTop: 10,
            }}
          >
            Lapangan Tennis Puri Indah is a standard outdoor sports arena that
            is located at Jl. Kembang Indah III. There are 5 private tennis
            court is already using international standard.
          </Text>
        </View>
        <View
          style={[
            Global.justifyStart,
            { gap: 5, marginTop: 10, marginBottom: 19 },
          ]}
        >
          <Button
            btnType="button"
            label="Favorite"
            onClick={console.log}
            type="outline-secondary"
            size="sm"
            icon={IconHeart}
          />
          <Button
            btnType="button"
            label="Share"
            onClick={console.log}
            type="outline-secondary"
            size="sm"
            icon={IconShare}
          />
        </View>
        <FacilityType />
        <View
          style={[
            Global.justifyStart,
            VenueDetailStyle.cardAddress,
            { gap: 12 },
          ]}
        >
          <Image source={IconMap} />
          <Text style={[Global.textDescription, { width: deviceWidth - 170 }]}>
            Jl. Kembang Indah III Blok G. 1 No. 20, RT6/RW6, Kembangan Sel.,
            Kec. Kembangan, Kota Jakarta Barat, 116010
          </Text>
        </View>
        <AvailableCourt />
        <VenueLocation />
        <OtherVenue />
      </Layout>
    </React.Fragment>
  );
};

export default VenueDetail;
