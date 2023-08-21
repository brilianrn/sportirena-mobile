import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Image, ScrollView, Text, View } from "react-native";
import * as Yup from "yup";
import LoginStyle from "../Login/Login.style";
import {
  IconArrowBlue,
  IconEye,
  IconEyeOff,
  IconLogin,
} from "../../assets/images";
import { InputText } from "../../components/Input";
import Button from "../../components/Button";
import { Global } from "../../styles/Global.style";

const ResetPassowrd = ({ navigation }: any) => {
  /* Local State */
  const [showPassword, setShowpassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password required"),
    confirmPassword: Yup.string()
      .required("Confirm password required")
      .oneOf([Yup.ref("password")], "Invalid password"),
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
    <ScrollView>
      <View style={[LoginStyle.container, { height: 900 }]}>
        <Text style={LoginStyle.greeting}>Reset your password</Text>
        <Text style={LoginStyle.title}>
          Enter your new password and confirm
        </Text>
        <Image source={IconLogin} style={LoginStyle.iconLogin} />
        <InputText
          control={control}
          name="password"
          placeholder="Insert password"
          label="Password"
          type="visible-password"
          secureTextEntry={!showPassword}
          errorMessage={errors?.password?.message?.toString()}
          icon={!showPassword ? IconEye : IconEyeOff}
          iconPosition="right"
          iconOnClick={() => setShowpassword(!showPassword)}
          style={{ marginBottom: 13 }}
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
          style={{ marginBottom: 65 }}
        />
        <Button
          label="Save New Password"
          onClick={console.log}
          style={{ marginBottom: 28 }}
          type="primary"
          btnType="submit"
          isDisable={!isValid || isSubmitting}
          isSubmit={isSubmitting && isValid}
        />
        <View
          style={[Global.justifyCenter, { gap: 8 }]}
          onTouchStart={() => navigation.push("Login")}
        >
          <Image source={IconArrowBlue} style={{ marginTop: 5 }} />
          <Button.Link label="Back to Login" />
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassowrd;
