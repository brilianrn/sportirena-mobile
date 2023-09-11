import React, { useState } from "react";
import Layout from "../../components/Layout";
import CardMyBooking from "./Card";
import ShowMore from "../../components/ShowMore";
import { Image, Text, View } from "react-native";
import { IconMyBookingEmpty } from "../../assets/images";
import { colorPrimary } from "../../styles/Global.style";
import { ResultMyBooking } from "./MyBooking.type";
import { BookingStatus, OptionType } from "../../../App.type";

const tabs = [
  {
    label: "Waiting Payment",
    value: "WAITING_FOR_PAYMENT",
  },
  {
    label: "Reserved",
    value: "RESERVED",
  },
  {
    label: "Done",
    value: "DONE",
  },
];
const dummyData: ResultMyBooking = {
  count: 10,
  page: 1,
  pageSize: 3,
  rows: [
    {
      id: "4fd97e7e-0db0-40c2-8567-3e3fd8f0b5fd",
      customerId: "dd3b1d00-326e-41ba-a043-8488291245d2",
      customerName: "Nicolas Saputra",
      customerEmail: "sajudin.ssk@gmail.com",
      totalHour: 3,
      totalPrice: 180000,
      status: "ACTIVE",
      rejectedReason: "",
      invoiceUrl:
        "https://checkout-staging.xendit.co/v2/64f08c91cbdd91c40d8a602e",
      invoiceCode: "INV1693486224816",
      expiry_date: "2023-08-31T18:50:25.000Z",
      paymentType: "PAYMENT_GATEWAY",
      toBankName: null,
      toBankAccountHolder: null,
      toBankAccountNumber: null,
      fromBankName: null,
      fromBankAccountHolder: null,
      fromBankAccountNumber: null,
      transferDate: null,
      transferAmount: null,
      detailbooking: {
        id: "f22222b7-03f6-4f2f-a5b6-dc805a76c853",
        bookingId: "4fd97e7e-0db0-40c2-8567-3e3fd8f0b5fd",
        customerId: "dd3b1d00-326e-41ba-a043-8488291245d2",
        venueId: "19907786-35a6-49ca-905e-dd9e6f4125d2",
        venuePath: "Lapangan Tennis Puri Indah Staging",
        customerName: "Nicolas Saputra",
        customerEmail: "sajudin.ssk@gmail.com",
      },
      pathName: "venues",
      imageName: "venues-1691647363.jpeg",
      bookingScheduleId: "279abfde-605e-41a3-9e64-1fed9f049987",
      bookingId: "4fd97e7e-0db0-40c2-8567-3e3fd8f0b5fd",
      detailBookingId: "f22222b7-03f6-4f2f-a5b6-dc805a76c853",
      courtId: "66cb1626-627c-419c-ae11-46c18c25a6c4",
      courtName: "Lapangan Outdoor #1",
      openHoursId: "279abfde-605e-41a3-9e64-1fed9f049987",
      bookDate: "2023-09-01",
      startTime: "14.00",
      endTime: "15.00",
      startEndTime: "14001500",
      price: 50000,
      statusBook: "RESERVED",
      linkUrl: "puriindah",
    },
    {
      id: "9b736fb3-e806-4e38-a6fa-dcea14eb34e3",
      customerId: "dd3b1d00-326e-41ba-a043-8488291245d2",
      customerName: "Nicolas Saputra",
      customerEmail: "sajudin.ssk@gmail.com",
      totalHour: 1,
      totalPrice: 75000,
      status: "ACTIVE",
      rejectedReason: "",
      invoiceUrl:
        "https://checkout-staging.xendit.co/v2/64f085b9cbdd91e0d48a55f5",
      invoiceCode: "INV1693484471487",
      expiry_date: "2023-08-31T18:21:13.000Z",
      paymentType: "PAYMENT_GATEWAY",
      toBankName: null,
      toBankAccountHolder: null,
      toBankAccountNumber: null,
      fromBankName: null,
      fromBankAccountHolder: null,
      fromBankAccountNumber: null,
      transferDate: null,
      transferAmount: null,
      detailbooking: {
        id: "2119f938-a466-4e82-ada5-394ff72c2150",
        bookingId: "9b736fb3-e806-4e38-a6fa-dcea14eb34e3",
        customerId: "dd3b1d00-326e-41ba-a043-8488291245d2",
        venueId: "19907786-35a6-49ca-905e-dd9e6f4125d2",
        venuePath: "Lapangan Tennis Puri Indah Staging",
        customerName: "Nicolas Saputra",
        customerEmail: "sajudin.ssk@gmail.com",
      },
      pathName: "venues",
      imageName: "venues-1691647363.jpeg",
      bookingScheduleId: "38234dca-9fa7-43b4-8201-9ed919aca6c0",
      bookingId: "9b736fb3-e806-4e38-a6fa-dcea14eb34e3",
      detailBookingId: "2119f938-a466-4e82-ada5-394ff72c2150",
      courtId: "d4176936-de42-425a-b8cc-25c17bf9a7c5",
      courtName: "Lapangan Outdoor #4",
      openHoursId: "38234dca-9fa7-43b4-8201-9ed919aca6c0",
      bookDate: "2023-08-31",
      startTime: "21.00",
      endTime: "22.00",
      startEndTime: "21002200",
      price: 75000,
      statusBook: "WAITING_FOR_PAYMENT",
      linkUrl: "puriindah",
    },
    {
      id: "9b736fb3-e806-4e38-a6fa-dcea14eb34e3",
      customerId: "dd3b1d00-326e-41ba-a043-8488291245d2",
      customerName: "Nicolas Saputra",
      customerEmail: "sajudin.ssk@gmail.com",
      totalHour: 5,
      totalPrice: 75000,
      status: "ACTIVE",
      rejectedReason: "",
      invoiceUrl:
        "https://checkout-staging.xendit.co/v2/64f085b9cbdd91e0d48a55f5",
      invoiceCode: "INV1693484471487",
      expiry_date: "2023-08-31T18:21:13.000Z",
      paymentType: "PAYMENT_GATEWAY",
      toBankName: null,
      toBankAccountHolder: null,
      toBankAccountNumber: null,
      fromBankName: null,
      fromBankAccountHolder: null,
      fromBankAccountNumber: null,
      transferDate: null,
      transferAmount: null,
      detailbooking: {
        id: "2119f938-a466-4e82-ada5-394ff72c2150",
        bookingId: "9b736fb3-e806-4e38-a6fa-dcea14eb34e3",
        customerId: "dd3b1d00-326e-41ba-a043-8488291245d2",
        venueId: "19907786-35a6-49ca-905e-dd9e6f4125d2",
        venuePath: "Lapangan Tennis Puri Indah Staging",
        customerName: "Nicolas Saputra",
        customerEmail: "sajudin.ssk@gmail.com",
      },
      pathName: "venues",
      imageName: "venues-1691647363.jpeg",
      bookingScheduleId: "38234dca-9fa7-43b4-8201-9ed919aca6c0",
      bookingId: "9b736fb3-e806-4e38-a6fa-dcea14eb34e3",
      detailBookingId: "2119f938-a466-4e82-ada5-394ff72c2150",
      courtId: "d4176936-de42-425a-b8cc-25c17bf9a7c5",
      courtName: "Lapangan Outdoor #4",
      openHoursId: "38234dca-9fa7-43b4-8201-9ed919aca6c0",
      bookDate: "2023-08-31",
      startTime: "21.00",
      endTime: "22.00",
      startEndTime: "21002200",
      price: 75000,
      statusBook: "DONE",
      linkUrl: "puriindah",
    },
  ],
};

const MyBooking = () => {
  /* Local State */
  const [activeTab, setActiveTab] = useState<OptionType>(tabs[0]);
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
      >
        {dummyData.rows.filter((el) => el.statusBook === activeTab.value)
          .length ? (
          <>
            {dummyData.rows
              .filter((el) => el.statusBook === activeTab.value)
              .map((e) => (
                <CardMyBooking
                  key={e.id}
                  data={e}
                  status={activeTab.value as BookingStatus}
                />
              ))}
            <ShowMore />
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
