import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Carousel } from "react-native-auto-carousel";
import { useSelector } from "react-redux";
import {
  IconCalendarTimeActive,
  IconHeart,
  IconMap,
  IconShare,
} from "../../assets/images";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import { venuePath } from "../../constants";
import { BASE_URL_PREVIEW_IMG } from "../../constants/host";
import { useDashboard } from "../../hooks/useDashboard";
import { useVenue } from "../../hooks/useVenue";
import { IRootState } from "../../store/reducers";
import {
  Global,
  colorDark,
  colorPrimary,
  deviceWidth,
} from "../../styles/Global.style";
import { subStringLongText } from "../../utils/formattor";
import FacilityType from "../Home/FacilityType";
import AvailableCourt from "./AvailableCourt";
import VenueLocation from "./Location";
import OtherVenue from "./OtherVenue";
import VenueDetailStyle from "./VenueDetail.style";

const VenueDetail = () => {
  /* Local State */
  const [isShare, setIsShare] = useState<boolean>(false);

  /* Redux */
  const { venueDetail, venueCourt, venues } = useSelector(
    (state: IRootState) => state.venue
  );

  /* Navigate */
  const { goBack } = useNavigation();

  /* Hooks */
  const { fetchVenueCourt } = useVenue();
  const { fetchVenues } = useDashboard();

  useEffect(() => {
    fetchVenues({ page: 1, pageSize: 10 });
    if (!venueDetail) {
      goBack();
    } else {
      fetchVenueCourt(venueDetail.id, { page: 1, pageSize: 10 });
    }
  }, [venueDetail]);
  return (
    <React.Fragment>
      <Modal
        show={isShare}
        title="Share with link"
        description="Share this venue to your friends by copying the link below!"
        setShow={setIsShare}
      >
        <Button
          label="Copy Link"
          onClick={() => setIsShare(false)}
          style={{ marginTop: 16 }}
          type="primary"
          btnType="button"
        />
      </Modal>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Detail Venue"
        backHref={venuePath}
      >
        <View
          style={{
            borderRadius: 10,
            height: 182,
          }}
        >
          <Carousel
            data={[
              `${BASE_URL_PREVIEW_IMG}/${venueDetail?.pathName}/${venueDetail?.imageName}`,
            ]}
            autoPlay
            autoPlayTime={4000}
            dotStyle={{
              backgroundColor: "white",
              width: 8,
              height: 8,
              borderRadius: 20,
              marginBottom: 42,
            }}
            renderItem={(item) => (
              <Image
                key={item}
                source={{ uri: item }}
                style={{
                  height: 182,
                  width: deviceWidth - 80,
                  borderRadius: 10,
                }}
              />
            )}
          />
        </View>
        <View style={[Global.justifyBetween, { marginTop: 23 }]}>
          <Text
            style={{
              color: colorPrimary.default,
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 4,
            }}
          >
            {subStringLongText(venueDetail.venueName, 42)}
          </Text>
          <Image source={IconCalendarTimeActive} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 10,
              color: colorDark[600],
              textAlign: "justify",
              marginTop: 10,
            }}
          >
            {venueDetail.description}
          </Text>
        </View>
        <View
          style={[
            Global.justifyStart,
            { gap: 5, marginTop: 10, marginBottom: 19 },
          ]}
        >
          <Button
            btnType="button"
            label="Favorite"
            onClick={console.log}
            type="outline-secondary"
            size="sm"
            icon={IconHeart}
          />
          <Button
            btnType="button"
            label="Share"
            onClick={() => setIsShare(true)}
            type="outline-secondary"
            size="sm"
            icon={IconShare}
          />
        </View>
        <FacilityType isLoading={!venueDetail} data={venueDetail.facilities} />
        <View
          style={[
            Global.justifyStart,
            VenueDetailStyle.cardAddress,
            { gap: 12 },
          ]}
        >
          <Image source={IconMap} />
          <Text style={[Global.textDescription, { width: deviceWidth - 170 }]}>
            {venueDetail.address}
          </Text>
        </View>
        <AvailableCourt data={venueCourt} />
        <VenueLocation
          lat={+venueDetail.latitude}
          lng={+venueDetail.longitude}
        />
        <OtherVenue data={venues} />
      </Layout>
    </React.Fragment>
  );
};

export default VenueDetail;
