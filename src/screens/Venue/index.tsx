import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import CardVenue from "./Card";
import { IconVenueNotFound } from "../../assets/images";
import { Global, colorPrimary } from "../../styles/Global.style";

const cards: number[] = [1, 2];

const Venue = () => {
  const [search, setSearch] = useState<string>("");
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
        {cards?.length ? (
          cards?.map((e) => <CardVenue key={e} />)
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
