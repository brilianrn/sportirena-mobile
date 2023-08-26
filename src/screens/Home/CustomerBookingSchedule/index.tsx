import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import HomeStyle from "../Home.style";
import { Global } from "../../../styles/Global.style";
import { IconArrowChevronBlack } from "../../../assets/images";

const CustomerBookingSchedule = () => {
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
            Customer Booking Portal
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
            Don’t let your sport planning only stuck on your list. Sportirena
            allow you to book online 24/7 via our booking portal whenever and
            wherever.
          </Text>
          <TouchableOpacity
            style={[Global.justifyStart, { gap: 4, marginTop: 25 }]}
          >
            <Text style={{ fontSize: 10, fontWeight: "600" }}>
              Start your journey
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
            Booking & Facility Scheduling
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
            Your schedules are never match with the venue’s? Sportirena let you
            know availability in resource specific calendar views. Manage your
            facilities bookings in just a few clicks.
          </Text>
          <TouchableOpacity
            style={[Global.justifyEnd, { gap: 4, marginTop: 25 }]}
          >
            <Text style={{ fontSize: 10, fontWeight: "600" }}>
              Start your journey
            </Text>
            <Image source={IconArrowChevronBlack} style={{ marginTop: 2 }} />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
};

export default CustomerBookingSchedule;
