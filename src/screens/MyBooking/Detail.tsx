import moment from "moment";
import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import Image from "../../components/Image";
import Layout from "../../components/Layout";
import { myBookingPath } from "../../constants";
import { IRootState } from "../../store/reducers";
import { Global, colorGray, colorPrimary } from "../../styles/Global.style";
import { IDRFormat } from "../../utils/formattor";
import HomeStyle from "../Home/Home.style";
import { BookingSchedule } from "./MyBooking.type";

const Detail = () => {
  /* Redux */
  const { waitingApprovalDetail } = useSelector(
    (state: IRootState) => state.myBooking
  );
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Detail Booking"
        backHref={myBookingPath}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 3,
            color: colorPrimary.default,
          }}
        >
          {waitingApprovalDetail?.detailbooking?.venueName}
        </Text>
        <Image
          useBaseUrl
          src={`${waitingApprovalDetail?.pathName}/${waitingApprovalDetail?.imageName}`}
          style={[HomeStyle.banner, { height: 182 }]}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 3,
          }}
        >
          #{waitingApprovalDetail?.invoiceCode}
        </Text>
        {waitingApprovalDetail?.detailbooking?.bookingschedules?.map(
          (e: BookingSchedule, i: number) => (
            <View key={i}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  marginBottom: 11,
                  color: colorPrimary.default,
                  marginVertical: 12,
                }}
              >
                {e.courtName}
              </Text>
              <View style={Global.justifyBetween}>
                <View style={{ width: "70%" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: colorGray[500],
                      marginBottom: 7,
                    }}
                  >
                    Date
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: colorGray[500],
                      marginBottom: 7,
                    }}
                  >
                    {moment(e.bookDate).format("dddd, DD MMMM yyyy")}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: colorGray[500],
                      marginBottom: 7,
                    }}
                  >
                    {e.startTime} - {e.endTime}
                  </Text>
                </View>
                <View style={{ width: "30%" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: colorGray[500],
                      marginBottom: 7,
                    }}
                  >
                    Price
                  </Text>
                  <Text style={{ color: "transparent", fontSize: 0 }}>0</Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginBottom: 7,
                      fontWeight: "bold",
                      color: colorPrimary.default,
                    }}
                  >
                    Rp {IDRFormat(e.price)},-
                  </Text>
                </View>
              </View>
            </View>
          )
        )}
      </Layout>
    </React.Fragment>
  );
};

export default Detail;
