import React, { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { colorGray, colorPrimary } from "../../../styles/Global.style";

const VenueLocation: FC<{ lng: number; lat: number }> = ({ lat, lng }) => {
  const [region, setRegion] = useState<any>({
    latitude: -7.250445,
    longitude: 112.768845,
  });

  const onRegionChange = (region: any) => {
    setRegion({ region });
  };

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
        region={region}
        minZoomLevel={15}
        onRegionChange={onRegionChange}
        style={{
          marginTop: 15,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: colorGray[400],
          height: 144,
        }}
      >
        {[region].map((marker, index) => (
          <Marker key={index} coordinate={marker} />
        ))}
      </MapView>
    </React.Fragment>
  );
};

export default VenueLocation;
