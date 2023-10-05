import React, { FC } from "react";
import { Image as ImageRN, Text, View } from "react-native";
import { IconParking, IconToilet, IconWifi } from "../../../assets/images";
import Barier from "../../../components/Barrier";
import Image from "../../../components/Image";
import {
  Global,
  colorBrown,
  colorDark,
  colorGray,
  colorPrimary,
} from "../../../styles/Global.style";
import { IDRFormat } from "../../../utils/formattor";
import CardFacilityType from "../../Home/FacilityType/Card";
import HomeStyle from "../../Home/Home.style";
import { BookingHeaderProps } from "../Booking.type";

const BookingHeader: FC<BookingHeaderProps> = ({ courtDetail, venueName }) => {
  return (
    <React.Fragment>
      <Image
        useBaseUrl
        src={`${courtDetail?.pathName}/${courtDetail?.imageName}`}
        style={[HomeStyle.banner, { height: 182 }]}
      />
      <View style={[Global.justifyBetween, { gap: 8 }]}>
        <View>
          <Text style={{ fontSize: 12, fontWeight: "500" }}>
            {venueName || ""}
          </Text>
          <Text
            style={[
              HomeStyle.titleHome,
              { marginBottom: 15, color: colorPrimary.default },
            ]}
          >
            {courtDetail?.courtName}
          </Text>
          <View style={[Global.justifyStart, { gap: 6 }]}>
            <Text
              style={{
                color: colorBrown.default,
                fontSize: 10,
                fontWeight: "400",
              }}
            >
              Starting Price
            </Text>
            <Text
              style={{
                color: colorPrimary.default,
                fontSize: 10,
                fontWeight: "600",
              }}
            >
              Rp {IDRFormat(courtDetail?.min)},-
            </Text>
          </View>
        </View>
        <CardFacilityType
          title={courtDetail?.facility}
          iconHeight={20}
          iconWidth={20}
          titleStyle={{
            fontSize: 10,
            marginTop: 10,
            fontWeight: "500",
            textAlign: "center",
            color: colorGray[500],
          }}
        />
      </View>
      <Barier style={{ marginTop: 7, marginBottom: 11 }} />
      <View style={[Global.justifyStart, { gap: 10, alignItems: "center" }]}>
        <ImageRN source={IconToilet} />
        <Text style={[{ fontSize: 5, color: colorGray[500] }]}>●</Text>
        <ImageRN source={IconParking} />
        <Text style={[{ fontSize: 5, color: colorGray[500] }]}>●</Text>
        <ImageRN source={IconWifi} />
      </View>
      <Text
        style={{
          fontSize: 10,
          color: colorDark[600],
          textAlign: "justify",
          marginTop: 12,
          marginBottom: 8,
        }}
      >
        {courtDetail?.description}
      </Text>
    </React.Fragment>
  );
};

export default BookingHeader;
