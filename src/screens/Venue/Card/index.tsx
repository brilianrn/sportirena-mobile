import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconPinLocation } from "../../../assets/images";
import { useVenue } from "../../../hooks/useVenue";
import { Global, colorGray, colorPrimary } from "../../../styles/Global.style";
import { subStringLongText } from "../../../utils/formattor";
import VenueStyle from "../Venue.style";

const CardVenue = () => {
  /* Hooks */
  const { fetchVenueDetail } = useVenue();

  return (
    <React.Fragment>
      <TouchableOpacity
        style={[VenueStyle.cardVenue]}
        onPress={() => {
          fetchVenueDetail(1);
        }}
      >
        <View style={[Global.justifyStart, { gap: 10 }]}>
          <Image
            source={{
              uri: "https://www.reuters.com/resizer/2Y-zYYhSrudDXnjurH9iQpyU-z8=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MIIB3ILLTNL2DLYO47IKHWBFRU.jpg",
              height: 73,
              width: 73,
            }}
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: colorGray[300],
            }}
          />
          <View>
            <Text style={VenueStyle.cardTitle}>
              {subStringLongText("Lapangan Puri Indah", 30)}
            </Text>
            <View style={[Global.justifyStart, { gap: 5, width: 120 }]}>
              <Image
                source={IconPinLocation}
                style={{ justifyContent: "center" }}
              />
              <Text style={VenueStyle.cardDescription}>Jakarta Barat</Text>
            </View>
            <Text style={[VenueStyle.cardDescription]}>
              Starting Price{" "}
              <Text style={{ color: colorPrimary.default, fontWeight: "bold" }}>
                Rp 50.000,-
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: colorGray[400],
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginVertical: 10,
          }}
        />
        <Text style={[VenueStyle.cardDescription, { marginBottom: 0 }]}>
          Tersedia{" "}
          <Text style={{ color: colorPrimary.default, fontWeight: "bold" }}>
            5 Lapangan
          </Text>
        </Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default CardVenue;
