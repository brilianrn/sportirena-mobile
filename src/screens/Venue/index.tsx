import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { FlatList } from "react-native-bidirectional-infinite-scroll";
import { useSelector } from "react-redux";
import { IconVenueNotFound } from "../../assets/images";
import Layout from "../../components/Layout";
import { useDashboard } from "../../hooks/useDashboard";
import { IRootState } from "../../store/reducers";
import { colorPrimary } from "../../styles/Global.style";
import CardVenue from "./Card";

const Venue = () => {
  /* Local State */
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  /* Redux */
  const { venues } = useSelector((state: IRootState) => state.venue);

  /* Hooks */
  const { fetchVenues, isLoading } = useDashboard();

  useEffect(() => {
    fetchVenues({
      page: 1,
      pageSize: 10,
      search,
    });
    setPage(page === 0 ? page + 1 : page);
  }, [search]);

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
      >
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
