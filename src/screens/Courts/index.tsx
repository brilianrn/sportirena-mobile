import moment from "moment";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { IconSettingGreen, IconVenueNotFound } from "../../assets/images";
import Button from "../../components/Button";
import { InputDate, InputSelect } from "../../components/Input";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import { venueDetailPath } from "../../constants";
import { useDashboard } from "../../hooks/useDashboard";
import { useVenue } from "../../hooks/useVenue";
import { IRootState } from "../../store/reducers";
import { Global, colorPrimary } from "../../styles/Global.style";
import { FacilityType } from "../Home/Home.type";
import CardVenueCourt from "./Card";
import { CourtDetail } from "../Booking/Booking.type";

const Courts = ({ navigation }) => {
  /* Local State */
  const [date, setDate] = useState<Date>();
  const [showSetting, setShowSetting] = useState<boolean>(false);
  const [facility, setFacility] = useState<string>("");

  /* Redux */
  const { facilityTypes } = useSelector((state: IRootState) => state.dashboard);
  const { venueDetail, venueCourt } = useSelector(
    (state: IRootState) => state.venue
  );

  /* Hooks */
  const { fetchFalicityType } = useDashboard();
  const { fetchVenueCourt } = useVenue();

  useEffect(() => {
    if (showSetting) {
      fetchFalicityType();
    }
  }, [showSetting]);

  useEffect(() => {
    if (venueDetail || date) {
      getAllVenueCourt();
    }
  }, [venueDetail, date]);

  const getAllVenueCourt = () => {
    fetchVenueCourt(venueDetail.id, {
      page: 1,
      pageSize: 10000,
      date: date ? moment(date).format("YYYY-MM-dd") : undefined,
      facility,
    });
    setShowSetting(false);
  };
  return (
    <React.Fragment>
      <Modal show={showSetting} setShow={setShowSetting}>
        <InputSelect
          isOptObj
          placeholder="Choose facility type"
          label="Facility Type"
          setValue={setFacility}
          value={facility}
          obtOptions={
            facilityTypes?.length
              ? facilityTypes.map((e: FacilityType) => ({
                  ...e,
                  value: e.typeName,
                  key: e.id,
                }))
              : []
          }
        />
        <View style={[Global.justifyBetween, { marginTop: 33, width: "100%" }]}>
          <Button
            label="Cancel"
            style={{ width: "45%" }}
            type="outline-primary"
            btnType="button"
            onClick={() => setShowSetting(false)}
            size="sm"
          />
          <Button
            label="Apply"
            style={{ width: "45%" }}
            type="primary"
            btnType="button"
            onClick={getAllVenueCourt}
            size="sm"
          />
        </View>
      </Modal>
      <Layout
        useTopBar
        isSearchBar={false}
        label={venueDetail.venueName}
        backHref={venueDetailPath}
        navigation={navigation}
      >
        <View style={[Global.justifyBetween, { gap: 10 }]}>
          <View style={{ width: "90%" }}>
            <InputDate
              placeholder="DD-MMM-YYYY"
              name="untilDate"
              setValue={setDate}
              value={date}
            />
          </View>
          <TouchableOpacity
            style={{ justifyContent: "center", width: "10%" }}
            onPress={() => setShowSetting(true)}
          >
            <Image source={IconSettingGreen} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginTop: 13,
            marginBottom: 22,
            fontSize: 10,
          }}
        >
          Show 5
          <Text style={{ color: colorPrimary.default, fontWeight: "600" }}>
            {" "}
            courts available{" "}
          </Text>
          in {venueDetail.venueName}
        </Text>
        {venueCourt ? (
          venueCourt?.map((e: CourtDetail, i: number) => (
            <CardVenueCourt key={i} item={e} />
          ))
        ) : (
          <View style={{ marginTop: 79 }}>
            <Image source={IconVenueNotFound} style={{ alignSelf: "center" }} />
            <Text
              style={{
                color: colorPrimary.default,
                fontSize: 14,
                marginTop: 19,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Venue not found
            </Text>
          </View>
        )}
      </Layout>
    </React.Fragment>
  );
};

export default Courts;
