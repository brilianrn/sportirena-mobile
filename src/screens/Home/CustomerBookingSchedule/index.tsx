import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import HomeStyle from "../Home.style";
import { Global } from "../../../styles/Global.style";
import { IconArrowChevronBlack } from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { venuePath } from "../../../constants";

const CustomerBookingSchedule = () => {
  /* Navigate */
  const { navigate } = useNavigation();
  return (
    <React.Fragment>
      <View style={{ position: "relative" }}>
        <Image
          source={{
            uri: "https://www.scienceforsport.com/wp-content/uploads/2022/06/AdobeStock_26548800-e1655790596319.jpeg",
            width: 121,
            height: 149,
          }}
          style={{
            position: "absolute",
            zIndex: 10,
            right: 0,
            top: 55,
            borderRadius: 10,
          }}
        />
        <View style={HomeStyle.cardCustomerBooking}>
          <Text style={{ fontSize: 14, fontWeight: "600" }}>
            Portal Pemesanan Lapangan
          </Text>
          <Text
            style={{
              color: "#3D5A59",
              fontSize: 10,
              fontWeight: "600",
              lineHeight: 15,
              marginTop: 11,
            }}
          >
            Sportirena memungkinkan Anda untuk melakukan pemesanan online 24/7
            melalui portal pemesanan kami kapan saja dan di mana saja.
          </Text>
          <TouchableOpacity
            onPress={() => navigate(venuePath as never)}
            style={[Global.justifyStart, { gap: 4, marginTop: 25 }]}
          >
            <Text style={{ fontSize: 10, fontWeight: "600" }}>
              Mulai pemesanan
            </Text>
            <Image source={IconArrowChevronBlack} style={{ marginTop: 2 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ position: "relative" }}>
        <Image
          source={{
            uri: "https://www.macobserver.com/wp-content/uploads/2023/02/calendar-apps-for-iphone.jpg",
            width: 121,
            height: 150,
          }}
          style={{
            position: "absolute",
            zIndex: 10,
            left: 0,
            top: 75,
            borderRadius: 10,
          }}
        />
        <View style={[HomeStyle.cardBookingFacility]}>
          <Text style={{ fontSize: 14, fontWeight: "600", textAlign: "right" }}>
            Pemesanan dan Penjadwalan Fasilitas
          </Text>
          <Text
            style={{
              color: "#3D5A59",
              fontSize: 10,
              fontWeight: "600",
              lineHeight: 15,
              marginTop: 11,
              textAlign: "right",
            }}
          >
            Jadwal Anda tidak pernah sesuai dengan jadwal lapangan yang Anda
            inginkan? Sportirena dapat memberikan informasi terkait ketersediaan
            jadwal lapangan dari beberapa penyedia sarana olahraga.
          </Text>
          <TouchableOpacity
            onPress={() => navigate(venuePath as never)}
            style={[Global.justifyEnd, { gap: 4, marginTop: 25 }]}
          >
            <Text style={{ fontSize: 10, fontWeight: "600" }}>
              Mulai pemesanan
            </Text>
            <Image source={IconArrowChevronBlack} style={{ marginTop: 2 }} />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

export default CustomerBookingSchedule;
