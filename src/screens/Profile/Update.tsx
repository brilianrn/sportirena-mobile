import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import * as Yup from "yup";
import Button from "../../components/Button";
import { InputImage, InputRadio, InputText } from "../../components/Input";
import Layout from "../../components/Layout";
import { loginPath, profileName } from "../../constants";
import { useProfile } from "../../hooks/useProfile";
import { UserDetailType } from "../../types/common.type";
import { retrieveLocalStorageItem } from "../../utils/localStorage";
import { isBase64, isPhone } from "../../utils/validator";

const UpdateProfile = ({ navigation }) => {
  /* Local State */
  const [img, setImg] = useState<string>();

  /* Hooks */
  const { updateProfile, isLoading } = useProfile({ navigation });

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name required")
      .test("name-check", "Name must be more than 6 character", (value) => {
        return value?.length >= 6;
      }),
    email: Yup.string().email("Wrong format email").required("Email required"),
    phoneNumber: Yup.string()
      .required("Phone number required")
      .test("isPhone", "Invalid phone number", (value) => {
        return !isPhone(value) ? false : true;
      }),
    gender: Yup.string().required("Gender required").default("Male"),
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    (async () => {
      const [token, user] = await Promise.all([
        retrieveLocalStorageItem("accessToken"),
        retrieveLocalStorageItem("userInfo"),
      ]);
      if (!token || !user) {
        navigation.replace(loginPath);
      } else {
        const dataUser: UserDetailType = user
          ? JSON.parse(user as string)
          : undefined;
        setValue("email", dataUser.email);
        setValue("name", dataUser.name);
        setValue("phoneNumber", dataUser.phoneNumber);
        setValue("gender", dataUser.gender);
        setImg(`${dataUser?.pathName}/${dataUser?.imageName}`);
      }
    })();
  }, [retrieveLocalStorageItem]);

  const onSubmit = (payload: any) => {
    updateProfile({ ...payload, base64: isBase64(img as string) ? img : "" });
  };
  return (
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Edit Profile"
        backHref={profileName}
        navigation={navigation}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <InputImage image={img as string} setImage={setImg} />
        </View>
        <InputText
          control={control}
          name="name"
          placeholder="Insert your name"
          label="Name"
          type="default"
          style={{ marginBottom: 13 }}
          errorMessage={errors?.name?.message?.toString()}
        />
        <InputText
          control={control}
          name="email"
          placeholder="Insert email address"
          label="Email"
          type="email-address"
          style={{ marginBottom: 13 }}
          errorMessage={errors?.email?.message?.toString()}
        />
        <InputText
          control={control}
          name="phoneNumber"
          placeholder="Insert phone number"
          label="Phone Number"
          type="default"
          style={{ marginBottom: 13 }}
          errorMessage={errors?.phoneNumber?.message?.toString()}
        />
        <View style={{ height: 80 }}>
          <InputRadio
            label="Choose Gender"
            style={{ marginBottom: 13 }}
            type="row"
            name="gender"
            control={control}
            options={[
              {
                label: "Male",
                value: "Male",
              },
              {
                label: "Female",
                value: "Female",
              },
            ]}
          />
        </View>
        <Button
          label="Save"
          onClick={handleSubmit(onSubmit)}
          style={{ marginBottom: 10, marginTop: 15 }}
          type="primary"
          btnType="submit"
          isDisable={!isValid || (img ? false : true)}
          isSubmit={(isSubmitting && isValid) || isLoading}
        />
      </Layout>
    </React.Fragment>
  );
};

export default UpdateProfile;
