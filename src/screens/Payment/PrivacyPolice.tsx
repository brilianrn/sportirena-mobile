import React from "react";
import { Text } from "react-native";
import RenderHtml from "react-native-render-html";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { IRootState } from "../../store/reducers";
import { colorPrimary } from "../../styles/Global.style";

const PrivacyPolice = ({ navigation }) => {
  /* Redux */
  const { venueDetail } = useSelector((state: IRootState) => state.venue);
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Privacy Police"
        navigation={navigation}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: colorPrimary.default,
            marginBottom: 18,
          }}
        >
          {venueDetail.venueName}
        </Text>
        <RenderHtml
          source={{
            html: venueDetail.privacyPolicy,
          }}
        />
      </Layout>
    </React.Fragment>
  );
};

export default PrivacyPolice;
