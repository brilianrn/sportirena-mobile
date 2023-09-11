import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconPinLocation } from "../../../assets/images";
import { useVenue } from "../../../hooks/useVenue";
import { Global, colorGray, colorPrimary } from "../../../styles/Global.style";
import { IDRFormat, subStringLongText } from "../../../utils/formattor";
import VenueStyle from "../Venue.style";
import { VenueType } from "../../../types/venue.type";
import { BASE_URL_PREVIEW_IMG } from "../../../constants/host";

const CardVenue: FC<{ item: VenueType | any }> = ({ item }) => {
  /* Hooks */
  const { fetchVenueDetail } = useVenue();

  return (
    <React.Fragment>
      <TouchableOpacity
        style={[VenueStyle.cardVenue]}
        onPress={() => fetchVenueDetail(item)}
      >
        <View style={[Global.justifyStart, { gap: 10 }]}>
          <Image
            source={{
              uri: `${BASE_URL_PREVIEW_IMG}/${item?.pathName}/${item?.imageName}`,
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
              {subStringLongText(item.venueName, 30)}
            </Text>
            <View style={[Global.justifyStart, { gap: 5, width: 120 }]}>
              <Image
                source={IconPinLocation}
                style={{ justifyContent: "center" }}
              />
              <Text style={VenueStyle.cardDescription}>{item.regencyName}</Text>
            </View>
            <Text style={[VenueStyle.cardDescription]}>
              Starting Price{" "}
              <Text style={{ color: colorPrimary.default, fontWeight: "bold" }}>
                {IDRFormat(item.minPrice)}
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
            {item.totalCourt} Lapangan
          </Text>
        </Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default CardVenue;
