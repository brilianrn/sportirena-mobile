import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Share, Text, View } from "react-native";
import { Carousel } from "react-native-auto-carousel";
import { useDispatch, useSelector } from "react-redux";
import {
  IconClock,
  IconMap,
  IconShare,
  IconTelephone,
} from "../../assets/images";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import { venuePath } from "../../constants";
import { BASE_URL_PREVIEW_IMG } from "../../constants/host";
import { useDashboard } from "../../hooks/useDashboard";
import { useVenue } from "../../hooks/useVenue";
import { setCourtDetail } from "../../store/actions/booking.action";
import { IRootState } from "../../store/reducers";
import {
  Global,
  colorDark,
  colorPrimary,
  deviceWidth,
} from "../../styles/Global.style";
import { iconTypeFormatter, subStringLongText } from "../../utils/formattor";
import CardFacilityType from "../Home/FacilityType/Card";
import { FacilityType } from "../Home/Home.type";
import AvailableCourt from "./AvailableCourt";
import VenueDetailStyle from "./VenueDetail.style";
import VenueLocation from "./Location";

const VenueDetail = ({ navigation }) => {
  /* Local State */

  const [galleries, setGalleries] = useState([]);
  const [isShare, setIsShare] = useState<boolean>(false);

  /* Redux */
  const dispatch = useDispatch();
  const { venueDetail, venueCourt } = useSelector(
    (state: IRootState) => state.venue
  );

  /* Navigate */
  const { goBack } = useNavigation();

  /* Hooks */
  const { fetchVenueCourt, showToast } = useVenue();
  const { fetchVenues } = useDashboard();

  useEffect(() => {
    fetchVenues({ page: 1, pageSize: 10 });
    dispatch(setCourtDetail(undefined));
    if (!venueDetail) {
      goBack();
    } else {
      fetchVenueCourt(venueDetail.id, { page: 1, pageSize: 10 });
    }
  }, [venueDetail]);

  const onShare = async () => {
    try {
      await Share.share({
        message: `${process.env.EXPO_PUBLIC_WEB_URL}/venue/${venueDetail.linkUrl}`,
        url: `${process.env.EXPO_PUBLIC_WEB_URL}/venue/${venueDetail.linkUrl}`,
        title: `${process.env.EXPO_PUBLIC_WEB_URL}/venue/${venueDetail.linkUrl}`,
      });
    } catch (error: any) {
      showToast({
        message: "Copy link failed",
        type: "danger",
        placement: "bottom",
      });
    }
    setIsShare(false);
  };

  // const SetGalleries = async () => {
  //   setGalleries([`${BASE_URL_PREVIEW_IMG}/${venueDetail?.pathName}/${venueDetail?.imageName}`])
  // }
  console.log(galleries)
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
          onClick={onShare}
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
        navigation={navigation}
      >
        <View
          style={{
            borderRadius: 10,
            height: 182,
          }}
        >
          {galleries && galleries.length > 0 && (
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
          )}
        </View>
        <View style={[Global.justifyBetween, { marginTop: 17 }]}>
          <Text
            style={{
              color: colorPrimary.default,
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            {subStringLongText(venueDetail.venueName, 32)}
          </Text>
          <Button
            btnType="button"
            label="Share"
            onClick={() => setIsShare(true)}
            type="outline-secondary"
            size="sm"
            icon={IconShare}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 10,
              color: colorDark[600],
              textAlign: "justify",
              marginTop: 10,
              marginBottom: 15,
            }}
          >
            {venueDetail.description}
          </Text>
        </View>
        <View style={[Global.justifyStart, { gap: 5, marginBottom: 16 }]}>
          {venueDetail.facilities.map((e: FacilityType) => (
            <CardFacilityType
              title={e.typeName}
              icon={iconTypeFormatter(e.typeName || e.facilityTypeName)}
              iconHeight={25}
              iconWidth={25}
              key={e.id}
            />
          ))}
        </View>
        <View style={[Global.justifyBetween, { marginBottom: 16 }]}>
          <View
            style={[
              Global.justifyStart,
              {
                gap: 5,
                width: "45%",
                borderWidth: 1,
                borderColor: "#EEE4E4",
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 17,
              },
            ]}
          >
            <Image source={IconClock} style={{ marginTop: 2 }} />
            <Text>
              {venueDetail.openTime}
              {"  "}-
            </Text>
            <Text>{venueDetail.closeTime}</Text>
          </View>
          <View
            style={[
              Global.justifyStart,
              {
                gap: 5,
                width: "45%",
                borderWidth: 1,
                borderColor: "#EEE4E4",
                borderRadius: 8,
                paddingVertical: 12,
                paddingHorizontal: 17,
              },
            ]}
          >
            <Image source={IconTelephone} style={{ marginTop: 2 }} />
            <Text>{venueDetail.telephone}</Text>
          </View>
        </View>
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
        <AvailableCourt data={venueCourt} navigation={navigation} />
        <VenueLocation
          lat={+venueDetail.latitude}
          lng={+venueDetail.longitude}
        />
      </Layout>
    </React.Fragment>
  );
};

export default VenueDetail;
