import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Image as ImageRN, ScrollView, Text, View } from "react-native";
import * as Yup from "yup";
import React from "react";
import Layout from "../../components/Layout";
import { myBookingPath } from "../../constants";
import { InputRadio, InputText } from "../../components/Input";
import Button from "../../components/Button";
import MyBookingStyle from "./MyBooking.style";
import TabStyle from "../../components/Tab/Tab.style";
import { Global, colorDark, colorGray } from "../../styles/Global.style";
import { IconTrashRed } from "../../assets/images";
import Image from "../../components/Image";

const Guest = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    idNumber: Yup.string().required("ID number required"),
    gender: Yup.string().required("Gender required").default("male"),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Guest"
        backHref={myBookingPath}
      >
        <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 3 }}>
          Tell us who will be come over with you
        </Text>
        <Text
          style={{ fontSize: 12, color: colorGray[500], letterSpacing: 0.3 }}
        >
          Due to government’s regulation for Covid-19 issue, you have to write
          down your companion
        </Text>
        <InputText
          placeholder="Insert name"
          control={control}
          name="name"
          label="Name"
          type="default"
          style={{ marginTop: 24, marginBottom: 13 }}
        />
        <InputText
          placeholder="Insert ID number"
          control={control}
          name="idNumber"
          label="ID Number"
          type="default"
          style={{ marginBottom: 13 }}
        />
        <View style={{ height: "10%" }}>
          <InputRadio
            label="Choose Gender"
            style={{ marginBottom: 13 }}
            type="row"
            name="gender"
            control={control}
            options={[
              {
                label: "Male",
                value: "male",
              },
              {
                label: "Female",
                value: "female",
              },
            ]}
          />
        </View>
        <Button
          label="Add"
          onClick={console.log}
          style={{ marginBottom: 38, marginTop: 20 }}
          type="primary"
          btnType="submit"
          isDisable={!isValid || isSubmitting}
          isSubmit={isSubmitting && isValid}
        />
        <Text style={[Global.label, { marginBottom: 10 }]}>List</Text>
        <View
          style={[
            MyBookingStyle.card,
            TabStyle.shadowProp,
            { marginBottom: 13 },
          ]}
        >
          <View style={[Global.justifyBetween, { alignItems: "center" }]}>
            <View
              style={[Global.justifyStart, { alignItems: "center", gap: 10 }]}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                height={48}
                width={48}
              />
              <View>
                <Text style={{ fontSize: 12, fontWeight: "500" }}>
                  Damara Gilang Muharami
                </Text>
                <View
                  style={[
                    Global.justifyStart,
                    {
                      gap: 5,
                      alignItems: "center",
                      marginTop: 2,
                    },
                  ]}
                >
                  <Text
                    style={[
                      MyBookingStyle.cardInv,
                      { color: colorGray[500], fontWeight: "400" },
                    ]}
                  >
                    099988999888999900
                  </Text>
                  <Text style={[{ fontSize: 5, color: colorGray[500] }]}>
                    ●
                  </Text>
                  <Text
                    style={[
                      MyBookingStyle.cardInv,
                      { color: colorGray[500], fontWeight: "400" },
                    ]}
                  >
                    Female
                  </Text>
                </View>
              </View>
            </View>
            <ImageRN source={IconTrashRed} />
          </View>
        </View>
        <View
          style={[
            MyBookingStyle.card,
            TabStyle.shadowProp,
            { marginBottom: 13 },
          ]}
        >
          <View style={[Global.justifyBetween, { alignItems: "center" }]}>
            <View
              style={[Global.justifyStart, { alignItems: "center", gap: 10 }]}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                height={48}
                width={48}
              />
              <View>
                <Text style={{ fontSize: 12, fontWeight: "500" }}>
                  Damara Gilang Muharami
                </Text>
                <View
                  style={[
                    Global.justifyStart,
                    {
                      gap: 5,
                      alignItems: "center",
                      marginTop: 2,
                    },
                  ]}
                >
                  <Text
                    style={[
                      MyBookingStyle.cardInv,
                      { color: colorGray[500], fontWeight: "400" },
                    ]}
                  >
                    099988999888999900
                  </Text>
                  <Text style={[{ fontSize: 5, color: colorGray[500] }]}>
                    ●
                  </Text>
                  <Text
                    style={[
                      MyBookingStyle.cardInv,
                      { color: colorGray[500], fontWeight: "400" },
                    ]}
                  >
                    Female
                  </Text>
                </View>
              </View>
            </View>
            <ImageRN source={IconTrashRed} />
          </View>
        </View>
        <View
          style={[
            MyBookingStyle.card,
            TabStyle.shadowProp,
            { marginBottom: 13 },
          ]}
        >
          <View style={[Global.justifyBetween, { alignItems: "center" }]}>
            <View
              style={[Global.justifyStart, { alignItems: "center", gap: 10 }]}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                height={48}
                width={48}
              />
              <View>
                <Text style={{ fontSize: 12, fontWeight: "500" }}>
                  Damara Gilang Muharami
                </Text>
                <View
                  style={[
                    Global.justifyStart,
                    {
                      gap: 5,
                      alignItems: "center",
                      marginTop: 2,
                    },
                  ]}
                >
                  <Text
                    style={[
                      MyBookingStyle.cardInv,
                      { color: colorGray[500], fontWeight: "400" },
                    ]}
                  >
                    099988999888999900
                  </Text>
                  <Text style={[{ fontSize: 5, color: colorGray[500] }]}>
                    ●
                  </Text>
                  <Text
                    style={[
                      MyBookingStyle.cardInv,
                      { color: colorGray[500], fontWeight: "400" },
                    ]}
                  >
                    Female
                  </Text>
                </View>
              </View>
            </View>
            <ImageRN source={IconTrashRed} />
          </View>
        </View>
      </Layout>
    </React.Fragment>
  );
};

export default Guest;
