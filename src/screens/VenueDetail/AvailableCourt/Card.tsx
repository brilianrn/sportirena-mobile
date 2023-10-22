import React, { FC } from "react";
import { Image as ImageRN, Text, TouchableOpacity, View } from "react-native";
import { IconTennisBall } from "../../../assets/images";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import { BASE_URL_PREVIEW_IMG } from "../../../constants/host";
import { useBooking } from "../../../hooks/useBooking";
import { Global, colorBrown, colorPrimary } from "../../../styles/Global.style";
import { VenueCourt } from "../../../types/venue.type";
import { IDRFormat } from "../../../utils/formattor";
import HomeStyle from "../../Home/Home.style";

const AvailableCourtCard: FC<{ item: VenueCourt; navigation: any }> = ({
  item,
  navigation,
}) => {
  /* Hooks */
  const { fetchCourtDetail } = useBooking({ navigation });
  return (
    <TouchableOpacity
      style={[HomeStyle.cardVenue, { height: "auto", width: 211 }]}
    >
      <View style={{ position: "relative" }}>
        <View
          style={{
            position: "absolute",
            backgroundColor: "white",
            zIndex: 10,
            padding: 8,
            borderRadius: 5,
            right: 6,
            top: 6,
          }}
        >
          <ImageRN
            source={IconTennisBall}
            height={10}
            width={10}
            style={{ maxHeight: 10, maxWidth: 10 }}
          />
        </View>
        <Image
          src={`${BASE_URL_PREVIEW_IMG}/${item?.pathName}/${item?.imageName}`}
          height={75}
          width={211}
          style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          marginTop: 9,
          marginLeft: 15,
          color: colorPrimary.default,
        }}
      >
        {item.courtName}
      </Text>
      <View
        style={[Global.justifyStart, { gap: 6, marginTop: 6, marginLeft: 15 }]}
      >
        <Text
          style={{ color: colorBrown.default, fontSize: 10, fontWeight: "400" }}
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
          Rp {IDRFormat(Number(item?.min) as number)} ,-
        </Text>
      </View>
      <Button
        label="Book Now"
        btnType="button"
        type="primary"
        size="sm"
        onClick={() => fetchCourtDetail(item.id)}
        style={{ paddingHorizontal: 14, marginTop: 25, marginBottom: 10 }}
      />
    </TouchableOpacity>
  );
};

export default AvailableCourtCard;
