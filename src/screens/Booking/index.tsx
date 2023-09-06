import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Image as ImageRN, Text, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import {
  IconInformation,
  IconParking,
  IconTennisBall,
  IconToilet,
  IconWifi,
} from "../../assets/images";
import Image from "../../components/Image";
import {
  InputDate,
  InputRadio,
  InputSelect,
  InputText,
} from "../../components/Input";
import Layout from "../../components/Layout";
import { venueName } from "../../constants";
import {
  Global,
  colorBrown,
  colorDark,
  colorGray,
  colorPrimary,
} from "../../styles/Global.style";
import CardFacilityType from "../Home/FacilityType/Card";
import HomeStyle from "../Home/Home.style";

const Booking = () => {
  const validationSchema = Yup.object().shape({
    bookingType: Yup.string().required("Booking type required"),
    repeatType: Yup.string().required("Repeat type required"),
    untilDate: Yup.date().notRequired(),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid, defaultValues },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Booking Lapangan Tennis Puri Indah"
        backHref={venueName}
      >
        <Image
          src="https://liga.tennis/public/cache/images/2/7/6/2/3/fd22b57f2195a328230ec31388a9552e_1920_5760.jpg"
          style={[HomeStyle.banner, { height: 182 }]}
        />
        <Text
          style={[
            HomeStyle.titleHome,
            { marginBottom: 15, color: colorPrimary.default },
          ]}
        >
          Lapangan #1
        </Text>
        <View style={[Global.justifyBetween]}>
          <View
            style={[Global.justifyStart, { gap: 10, alignItems: "center" }]}
          >
            <ImageRN source={IconToilet} />
            <Text style={[{ fontSize: 5, color: colorGray[500] }]}>●</Text>
            <ImageRN source={IconParking} />
            <Text style={[{ fontSize: 5, color: colorGray[500] }]}>●</Text>
            <ImageRN source={IconWifi} />
          </View>
          <View style={[Global.justifyStart, { gap: 6 }]}>
            <Text
              style={{
                color: colorBrown.default,
                fontSize: 10,
                fontWeight: "400",
              }}
            >
              Starting Price
            </Text>
            <Text
              style={{
                color: colorPrimary.default,
                fontSize: 10,
                fontWeight: "600",
              }}
            >
              Rp 50.000,-
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 10,
            color: colorDark[600],
            textAlign: "justify",
            marginTop: 12,
            marginBottom: 8,
          }}
        >
          Lapangan Tennis Puri Indah is a standard outdoor sports arena that is
          located at Jl. Kembang Indah III. There are 5 private tennis court is
          already using international standard.
        </Text>
        <CardFacilityType titile="Tennis" icon={IconTennisBall} />
        <View
          style={[
            Global.justifyEnd,
            {
              marginTop: 20,
              gap: 10,
              flex: 0,
              alignItems: "flex-end",
              marginBottom: 13,
            },
          ]}
        >
          <InputSelect
            placeholder="Choose booking type"
            style={{ width: "91.8%" }}
            label="Booking Type"
            control={control}
            name="bookingType"
            errorMessage={errors.bookingType?.message}
            options={["Booking Lapangan", "Booking Venue", "Booking Hourly"]}
          />
          <TouchableOpacity style={{ marginBottom: "4%" }}>
            <ImageRN source={IconInformation} />
          </TouchableOpacity>
        </View>
        <View style={{ height: "10%" }}>
          <InputRadio
            label="Repeat Type"
            style={{ flex: 0 }}
            type="row"
            name="repeatType"
            control={control}
            options={[
              {
                label: "One Time",
                value: "once",
              },
              {
                label: "Weekly",
                value: "weekly",
              },
            ]}
          />
        </View>
        <InputDate
          label="Until"
          placeholder="DD-MMM-YYYY"
          control={control}
          name="untilDate"
        />
        <Text style={[Global.label, { marginTop: 13 }]}>Booking Court</Text>
        <Text
          style={[
            Global.justifyStart,
            {
              marginBottom: 11,
              gap: 10,
              color: colorGray[500],
              fontSize: 10,
              fontWeight: "300",
            },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>Search: </Text>
          <Text>{"Booking Lapangan > One Time > 16 October 2022"}</Text>
        </Text>
      </Layout>
    </React.Fragment>
  );
};

export default Booking;
