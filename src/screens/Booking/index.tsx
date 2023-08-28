import { View, Text } from "react-native";
import React from "react";
import Layout from "../../components/Layout";
import { venueName } from "../../constants";

const Booking = () => {
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Booking Lapangan Tennis Puri Indah"
        backHref={venueName}
      >
        <Text>Booking Screen</Text>
      </Layout>
    </React.Fragment>
  );
};

export default Booking;
