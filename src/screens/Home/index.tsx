import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { IconNotification } from "../../assets/images";
import Layout from "../../components/Layout";
import { useDashboard } from "../../hooks/useDashboard";
import { IRootState } from "../../store/reducers";
import { Global } from "../../styles/Global.style";
import { UserDetailType } from "../../types/common.type";
import { retrieveLocalStorageItem } from "../../utils/localStorage";
import CustomerBookingSchedule from "./CustomerBookingSchedule";
import FacilityType from "./FacilityType";
import HomeStyle from "./Home.style";
import HowItWork from "./HowItWork";
import Venues from "./Venues";

const Home = () => {
  /* Local State */
  const [userDetail, setUserDetail] = useState<UserDetailType>();

  /* Redux */
  const { facilityTypes } = useSelector((state: IRootState) => state.dashboard);
  const { venues } = useSelector((state: IRootState) => state.venue);

  /* Hooks */
  const { fetchFalicityType, fetchVenues, isLoading } = useDashboard();

  useEffect(() => {
    (async () => {
      await Promise.all([
        fetchFalicityType(),
        fetchVenues({ page: 1, pageSize: 10 }),
      ]);
      const data = await retrieveLocalStorageItem("userInfo");
      const dataParse = JSON.parse(data as string);
      setUserDetail(dataParse);
    })();
  }, [retrieveLocalStorageItem]);
  return (
    <Layout useBottomBar isSearchBar={false}>
      <View>
        {userDetail && (
          <View style={Global.justifyBetween}>
            <View>
              <Text style={HomeStyle.titleHome}>
                Selamat Datang di Sportirena,
              </Text>
              <Text style={[HomeStyle.titleHome, { marginTop: 5 }]}>
                {userDetail?.name}
              </Text>
            </View>
            <Image source={IconNotification} alt="notif" />
          </View>
        )}
        <Image
          source={{
            uri: "https://liga.tennis/public/cache/images/2/7/6/2/3/fd22b57f2195a328230ec31388a9552e_1920_5760.jpg",
          }}
          style={HomeStyle.banner}
        />
        <FacilityType isLoading={isLoading} data={facilityTypes} />
        <Venues isLoading={isLoading} data={venues} />
        <CustomerBookingSchedule />
        <HowItWork />
      </View>
    </Layout>
  );
};

export default Home;
