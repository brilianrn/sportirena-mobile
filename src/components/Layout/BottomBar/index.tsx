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
import {
  homePath,
  myBookingPath,
  profileName,
  venuePath,
} from "../../../constants";
import { Global, colorGray, colorPrimary } from "../../../styles/Global.style";

const BottomBar = ({ navigation }) => {
  /* Navigate */
  const { name } = useRoute();
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
        <TouchableOpacity onPress={() => navigation.push(homePath as never)}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={name === homePath ? IconHomeActive : IconHome} />
            <Text
              style={{
                textAlign: "center",
                fontSize: 10,
                fontWeight: "bold",
                marginTop: 2,
                color: name === homePath ? colorPrimary.default : "black",
              }}
            >
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push(venuePath as never)}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={
                name === venuePath ? IconBasketFieldActive : IconBasketField
              }
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 10,
                fontWeight: "bold",
                marginTop: 2,
                color: name === venuePath ? colorPrimary.default : "black",
              }}
            >
              Venue
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.push(myBookingPath as never)}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={
                name === myBookingPath
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
                color: name === myBookingPath ? colorPrimary.default : "black",
              }}
            >
              My Booking
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push(profileName as never)}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={name === profileName ? IconUserActive : IconUser} />
            <Text
              style={{
                textAlign: "center",
                fontSize: 10,
                fontWeight: "bold",
                marginTop: 4,
                color: name === profileName ? colorPrimary.default : "black",
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
