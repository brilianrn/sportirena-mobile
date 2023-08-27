import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Dimensions, Image, View } from "react-native";
import { Carousel } from "react-native-auto-carousel";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { venueName } from "../../constants";
import { IRootState } from "../../store/reducers";
import { colorDark, deviceWidth } from "../../styles/Global.style";

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
        <View style={{ borderRadius: 10, flex: 1, backgroundColor: "red" }}>
          <Carousel
            data={IMAGES}
            autoPlay
            autoPlayTime={4000}
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
      </Layout>
    </React.Fragment>
  );
};

export default VenueDetail;
