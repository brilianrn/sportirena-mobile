import React, { useEffect, useMemo, useState } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { BookingStatus, OptionType } from "../../../App.type";
import { IconMyBookingEmpty } from "../../assets/images";
import Layout from "../../components/Layout";
import ShowMore from "../../components/ShowMore";
import { loginPath } from "../../constants";
import { useMyBooking } from "../../hooks/useMyBooking";
import { IRootState } from "../../store/reducers";
import { colorPrimary } from "../../styles/Global.style";
import { QueryParamMyBooking } from "../../types/common.type";
import { retrieveLocalStorageItem } from "../../utils/localStorage";
import CardMyBooking from "./Card";
import { MyBookingType } from "./MyBooking.type";

const tabs = [
  {
    label: "Waiting Payment",
    value: "WAITING_FOR_PAYMENT",
  },
  {
    label: "Waiting Approval",
    value: "WAITING_FOR_APPROVED",
  },
  {
    label: "Reserved",
    value: "APPROVED",
  },
  {
    label: "Done",
    value: "DONE",
  },
];

const MyBooking = ({ navigation }) => {
  /* Local State */
  const [activeTab, setActiveTab] = useState<OptionType>(tabs[0]);
  const [paramWP, setParamWP] = useState<QueryParamMyBooking>({
    page: 1,
    pageSize: 10,
  });
  const [paramWA, setParamWA] = useState<QueryParamMyBooking>({
    page: 1,
    pageSize: 10,
  });
  const [paramR, setParamR] = useState<QueryParamMyBooking>({
    page: 1,
    pageSize: 10,
  });
  const [paramD, setParamD] = useState<QueryParamMyBooking>({
    page: 1,
    pageSize: 10,
  });

  /* Redux */
  const { waitingPayment, waitingApproval, reserved, done } = useSelector(
    (state: IRootState) => state.myBooking
  );

  /* Hooks */
  const {
    fetchDone,
    fetchReserved,
    fetchWaitingPayment,
    fetchWaitingApproval,
  } = useMyBooking();

  useEffect(() => {
    (async () => {
      const [token, user] = await Promise.all([
        retrieveLocalStorageItem("accessToken"),
        retrieveLocalStorageItem("userInfo"),
      ]);
      if (!token || !user) {
        navigation.replace(loginPath);
      }
    })();
  }, [retrieveLocalStorageItem]);

  useEffect(() => {
    switch (activeTab.value) {
      case "WAITING_FOR_PAYMENT":
        fetchWaitingPayment(paramWP);
        break;
      case "WAITING_FOR_APPROVED":
        fetchWaitingApproval(paramWA);
        break;
      case "APPROVED":
        fetchReserved(paramR);
        break;
      case "DONE":
        fetchDone(paramD);
        break;
    }
  }, [activeTab, paramD, paramR, paramWP]);

  const allData = useMemo(() => {
    switch (activeTab.value) {
      case "WAITING_FOR_PAYMENT":
        return waitingPayment;
      case "WAITING_FOR_APPROVED":
        return waitingApproval;
      case "APPROVED":
        return reserved;
      case "DONE":
        return done;
    }
  }, [activeTab, waitingPayment, waitingApproval, reserved, done]);

  const onShowMore = () => {
    switch (activeTab.value) {
      case "WAITING_FOR_PAYMENT":
        return setParamWP({
          ...paramWP,
          page: paramWP.page + 1,
          isCount: true,
        });
      case "WAITING_FOR_APPROVED":
        return setParamWA({
          ...paramWA,
          page: paramWA.page + 1,
          isCount: true,
        });
      case "APPROVED":
        return setParamR({ ...paramR, page: paramR.page + 1, isCount: true });
      case "DONE":
        return setParamD({ ...paramD, page: paramD.page + 1, isCount: true });
    }
  };
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isFixedTopBar
        isSearchBar={false}
        isTabBar
        useBottomBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
        navigation={navigation}
      >
        {allData?.filter(
          (el: MyBookingType) => el.statusBook === activeTab.value
        ).length ? (
          <>
            {allData
              ?.filter((el: MyBookingType) => el.statusBook === activeTab.value)
              .map((e: MyBookingType) => (
                <CardMyBooking
                  key={e.id}
                  data={e}
                  status={activeTab.value as BookingStatus}
                />
              ))}
            <ShowMore onClick={onShowMore} />
          </>
        ) : (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30%",
            }}
          >
            <Image source={IconMyBookingEmpty} />
            <Text
              style={{
                color: colorPrimary.default,
                fontWeight: "bold",
                fontSize: 14,
                marginTop: 28,
              }}
            >
              You don’t have an active booking yet
            </Text>
          </View>
        )}
      </Layout>
    </React.Fragment>
  );
};

export default MyBooking;
