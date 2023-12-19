import React, { FC } from "react";
import { Text, View } from "react-native";
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
      <View style={[Global.justifyBetween, { gap: 8 }]}>
        <View>
          <Text style={{ fontSize: 12, fontWeight: "500" }}>
            {venueName || ""}
          </Text>
          <Text
            style={{
              color: colorBrown.default,
              fontSize: 10,
              fontWeight: "400",
              marginTop: 13,
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
      <Image
        useBaseUrl
        src={`${courtDetail?.pathName}/${courtDetail?.imageName}`}
        style={[HomeStyle.banner, { height: 182 }]}
      />
      <Text
        style={{
          fontSize: 10,
          color: colorDark[600],
          textAlign: "justify",
          marginTop: 14,
          marginBottom: 8,
        }}
      >
        {courtDetail?.description}
      </Text>
      <Text
        style={{
          marginTop: 21,
          fontSize: 10,
          fontWeight: "bold",
          color: colorPrimary.default,
        }}
      >
        Booking Online at {venueName}
      </Text>
    </React.Fragment>
  );
};

export default BookingHeader;
