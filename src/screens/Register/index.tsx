import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import * as Yup from "yup";
import { IconEye, IconEyeOff } from "../../assets/images";
import Button from "../../components/Button";
import { InputRadio, InputText } from "../../components/Input";
import { Global } from "../../styles/Global.style";
import { isPhone } from "../../utils/validatior";
import LoginStyle from "../Login/Login.style";

const Register = ({ navigation }: any) => {
  /* Local State */
  const [showPassword, setShowpassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name required"),
    email: Yup.string().email("Wrong format email").required("Email required"),
    phone: Yup.string()
      .required("Phone number required")
      .test("isPhone", "Invalid phone number", (value) => {
        return !isPhone(value) ? false : true;
      }),
    password: Yup.string().required("Password required"),
    gender: Yup.string().required("Gender required").default("male"),
    confirmPassword: Yup.string()
      .required("Confirm password required")
      .oneOf([Yup.ref("password")], "Invalid password"),
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
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          height: 33,
        }}
      />
      <ScrollView>
        <View style={[LoginStyle.container, { paddingTop: 60 }]}>
          <Text style={LoginStyle.greeting}>Registration</Text>
          <Text style={[LoginStyle.title, { marginBottom: 27 }]}>
            Registration for customer only.
          </Text>
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
            name="phone"
            placeholder="Insert phone number"
            label="Phone Number"
            type="default"
            style={{ marginBottom: 13 }}
            errorMessage={errors?.phone?.message?.toString()}
          />
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
          <InputText
            control={control}
            name="password"
            placeholder="Insert password"
            label="Password"
            type="visible-password"
            secureTextEntry={!showPassword}
            errorMessage={errors?.password?.message?.toString()}
            icon={!showPassword ? IconEye : IconEyeOff}
            style={{ marginBottom: 13 }}
            iconPosition="right"
            iconOnClick={() => setShowpassword(!showPassword)}
          />
          <InputText
            control={control}
            name="confirmPassword"
            placeholder="Retype your password"
            label="Confirm Password"
            type="visible-password"
            secureTextEntry={!showConfirmPassword}
            errorMessage={errors?.confirmPassword?.message?.toString()}
            icon={!showConfirmPassword ? IconEye : IconEyeOff}
            iconPosition="right"
            iconOnClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
          <Text
            style={[
              LoginStyle.haventAccount,
              { marginTop: 30, textAlign: "center" },
            ]}
          >
            By Registering, I agree with{" "}
            <Button.Link label="Term & Conditions" /> and{" "}
            <Button.Link label="Privacy Policy" /> of Sportirena
          </Text>
          <Button
            label="Register"
            onClick={console.log}
            style={{ marginBottom: 10, marginTop: 60 }}
            type="primary"
            btnType="submit"
            isDisable={!isValid || isSubmitting}
            isSubmit={isSubmitting && isValid}
          />
          <View style={[Global.justifyCenter, { gap: 5 }]}>
            <Text style={LoginStyle.haventAccount}>
              Already have an account?
            </Text>
            <Button.Link
              label="Login"
              onClick={() => navigation.push("Login")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
