import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  IconBasketField,
  IconBasketFieldActive,
  IconCalendarTime,
  IconCalendarTimeActive,
  IconHome,
  IconHomeActive,
  IconUser,
  IconUserActive,
} from "../../../assets/images";
import { Global, colorGray, colorPrimary } from "../../../styles/Global.style";
import {
  homeName,
  loginName,
  myBookingName,
  userName,
  venueName,
} from "../../../constants";

const BottomBar = () => {
  /* Navigate */
  const { name } = useRoute();
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 50,
        paddingVertical: 20,
        width: "100%",
        borderTopColor: colorGray[150],
        borderTopWidth: 1,
        backgroundColor: "white",
      }}
    >
      <View style={[Global.justifyCenter, { width: "100%", gap: 40 }]}>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={name === homeName ? IconHomeActive : IconHome} />
            <Text
              style={{
                textAlign: "center",
                fontSize: 10,
                fontWeight: "bold",
                marginTop: 2,
                color: name === homeName ? colorPrimary.default : "black",
              }}
            >
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={
                name === venueName ? IconBasketFieldActive : IconBasketField
              }
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 10,
                fontWeight: "bold",
                marginTop: 2,
                color: name === venueName ? colorPrimary.default : "black",
              }}
            >
              Venue
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={
                name === myBookingName
                  ? IconCalendarTimeActive
                  : IconCalendarTime
              }
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 10,
                fontWeight: "bold",
                marginTop: 2,
                color: name === myBookingName ? colorPrimary.default : "black",
              }}
            >
              My Booking
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate(loginName as never)}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={name === userName ? IconUserActive : IconUser} />
            <Text
              style={{
                textAlign: "center",
                fontSize: 10,
                fontWeight: "bold",
                marginTop: 4,
                color: name === userName ? colorPrimary.default : "black",
              }}
            >
              Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;
