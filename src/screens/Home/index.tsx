import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  IconArrowChevronBlack,
  IconBasketFieldActive,
  IconCustomerBookingHome,
  IconNotification,
} from "../../assets/images";
import Layout from "../../components/Layout";
import { Global } from "../../styles/Global.style";
import FacilityType from "./FacilityType";
import HomeStyle from "./Home.style";
import Venues from "./Venues";
import CustomerBookingSchedule from "./CustomerBookingSchedule";
import HowItWork from "./HowItWork";

const Home = () => {
  return (
    <Layout useBottomBar>
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
