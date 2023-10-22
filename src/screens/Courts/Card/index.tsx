import React, { FC } from "react";
import { Image as ImageRN, Text, TouchableOpacity, View } from "react-native";
import { IconParking, IconToilet, IconWifi } from "../../../assets/images";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import { BASE_URL_PREVIEW_IMG } from "../../../constants/host";
import { useBooking } from "../../../hooks/useBooking";
import { Global, colorGray, colorPrimary } from "../../../styles/Global.style";
import { IDRFormat, subStringLongText } from "../../../utils/formattor";
import { CourtDetail } from "../../Booking/Booking.type";
import VenueStyle from "../../Venue/Venue.style";

const CardVenueCourt: FC<{ item: CourtDetail; navigation: any }> = ({
  item,
  navigation,
}) => {
  /* Hooks */
  const { fetchCourtDetail } = useBooking({ navigation });
  return (
    <React.Fragment>
      <TouchableOpacity style={[VenueStyle.cardVenue]}>
        <View style={[Global.justifyStart, { gap: 20 }]}>
          <Image
            src={`${BASE_URL_PREVIEW_IMG}/${item?.pathName}/${item?.imageName}`}
            height={123}
            width={86}
            style={{
              borderRadius: 8,
            }}
          />
          <View>
            <Text style={VenueStyle.cardTitle}>
              {subStringLongText(item.courtName, 30)}
            </Text>
            <Text style={VenueStyle.cardDescription}>{item.facility}</Text>
            <View
              style={[
                Global.justifyStart,
                { gap: 10, alignItems: "center", marginVertical: 8 },
              ]}
            >
              <ImageRN source={IconToilet} />
              <Text style={[{ fontSize: 5, color: colorGray[500] }]}>●</Text>
              <ImageRN source={IconParking} />
              <Text style={[{ fontSize: 5, color: colorGray[500] }]}>●</Text>
              <ImageRN source={IconWifi} />
            </View>
            <Text style={[VenueStyle.cardDescription]}>
              Starting Price{" "}
              <Text style={{ color: colorPrimary.default, fontWeight: "bold" }}>
                Rp {IDRFormat(item.min)} ,-
              </Text>
            </Text>
            <Button
              label="Book Now"
              btnType="button"
              type="primary"
              size="sm"
              onClick={() => fetchCourtDetail(item.id)}
              style={{ marginTop: 5, width: 150 }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default CardVenueCourt;
