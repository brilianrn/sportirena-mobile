import { View, Text } from "react-native";
import React, { useState } from "react";
import Layout from "../../components/Layout";

const tabs = ["Waiting Payment", "Reserved", "Done"];

const MyBooking = () => {
  /* Local State */
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        isTabBar
        useBottomBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      >
        <Text>Masok</Text>
      </Layout>
    </React.Fragment>
  );
};

export default MyBooking;
