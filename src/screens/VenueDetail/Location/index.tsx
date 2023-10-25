import React, { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import { colorGray, colorPrimary } from "../../../styles/Global.style";

const VenueLocation: FC<{ lng: number; lat: number }> = ({ lat, lng }) => {
  const [region, setRegion] = useState<any>({
    latitude: -7.250445,
    longitude: 112.768845,
  });

  useEffect(() => {
    setRegion({
      latitude: lat,
      longitude: lng,
    });
  }, [lat, lng]);
  return (
    <React.Fragment>
      <View style={{ marginTop: 37 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlignVertical: "center",
            color: colorPrimary.default,
          }}
        >
          Venue’s Location
        </Text>
      </View>
      <MapView
        initialRegion={{
          ...region,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={{
          marginTop: 15,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: colorGray[400],
          height: 144,
        }}
      />
    </React.Fragment>
  );
};

export default VenueLocation;
