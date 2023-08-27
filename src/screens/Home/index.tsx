import React from "react";
import { Image, Text, View } from "react-native";
import { IconNotification } from "../../assets/images";
import Layout from "../../components/Layout";
import { Global } from "../../styles/Global.style";
import CustomerBookingSchedule from "./CustomerBookingSchedule";
import FacilityType from "./FacilityType";
import HomeStyle from "./Home.style";
import HowItWork from "./HowItWork";
import Venues from "./Venues";

const Home = () => {
  return (
    <Layout useBottomBar isSearchBar={false}>
      <View>
        <View style={Global.justifyBetween}>
          <View>
            <Text style={HomeStyle.titleHome}>
              Selamat Datang di Sportirena,
            </Text>
            <Text style={[HomeStyle.titleHome, { marginTop: 5 }]}>
              Nicholas!
            </Text>
          </View>
          <Image source={IconNotification} alt="notif" />
        </View>
        <Image
          source={{
            uri: "https://liga.tennis/public/cache/images/2/7/6/2/3/fd22b57f2195a328230ec31388a9552e_1920_5760.jpg",
          }}
          style={HomeStyle.banner}
        />
        <Text style={[HomeStyle.titleHome, { marginBottom: 15 }]}>
          Facility Type
        </Text>
        <FacilityType />
        <Venues />
        <CustomerBookingSchedule />
        <HowItWork />
      </View>
    </Layout>
  );
};

export default Home;
