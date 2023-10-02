import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { FlatList } from "react-native-bidirectional-infinite-scroll";
import { useSelector } from "react-redux";
import { OptionType } from "../../../App.type";
import { IconVenueNotFound } from "../../assets/images";
import Button from "../../components/Button";
import { InputSelect } from "../../components/Input";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import { useDashboard } from "../../hooks/useDashboard";
import { useVenue } from "../../hooks/useVenue";
import { IRootState } from "../../store/reducers";
import { Global, colorPrimary } from "../../styles/Global.style";
import { FacilityType } from "../Home/Home.type";
import CardVenue from "./Card";

const Venue = () => {
  /* Local State */
  const [search, setSearch] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [facility, setFacility] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [showSetting, setShowSetting] = useState<boolean>(false);

  /* Redux */
  const { venues, provinces } = useSelector((state: IRootState) => state.venue);
  const { facilityTypes } = useSelector((state: IRootState) => state.dashboard);

  /* Hooks */
  const { fetchVenues, fetchFalicityType } = useDashboard();
  const { fetchProvinces } = useVenue();

  useEffect(() => {
    fetchVenues({
      page: 1,
      pageSize: 10,
      search,
    });
    setPage(page === 0 ? page + 1 : page);
  }, [search]);

  useEffect(() => {
    if (showSetting) {
      fetchFalicityType();
      fetchProvinces();
    }
  }, [showSetting]);

  const getVenues = async () => {
    if (page > 0) {
      setPage(page + 1);
      await fetchVenues({
        page: page + 1,
        pageSize: 10,
        search,
        isScroll: page + 1 > 1,
      });
    }
  };
  return (
    <React.Fragment>
      <Layout
        useBottomBar
        useTopBar
        isSearchBar
        placeholderSearch="Search Venues"
        search={search}
        setSearch={setSearch}
        onClickSetting={() => setShowSetting(true)}
      >
        <Modal show={showSetting} setShow={setShowSetting}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "700",
              color: "#616161",
              marginBottom: 6,
            }}
          >
            Filter
          </Text>
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
          <InputSelect
            isOptObj
            style={{ marginTop: 12 }}
            placeholder="Choose your location"
            label="Location"
            setValue={setLocation}
            value={location}
            obtOptions={
              provinces?.length
                ? provinces.map((e: OptionType) => ({
                    ...e,
                    key: e.value,
                    value: e.label,
                  }))
                : []
            }
          />
          <View
            style={[Global.justifyBetween, { marginTop: 33, width: "100%" }]}
          >
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
              onClick={() => {
                fetchVenues({
                  page: 1,
                  pageSize: 10,
                  search,
                  location,
                  facility,
                });
                setShowSetting(false);
              }}
              size="sm"
            />
          </View>
        </Modal>
        {venues?.length ? (
          <FlatList
            data={venues}
            onEndReached={getVenues}
            onEndReachedThreshold={0}
            onStartReached={getVenues}
            keyExtractor={(_item, i) => i.toString()}
            renderItem={({ item, index }) => (
              <CardVenue item={item} key={index} />
            )}
          />
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

export default Venue;
