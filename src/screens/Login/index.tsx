import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Image, ScrollView, Text, View } from "react-native";
import * as Yup from "yup";
import { IconEye, IconEyeOff, IconLogin } from "../../assets/images";
import { InputCheckbox, InputText } from "../../components/Input";
import LoginStyle from "./Login.style";
import { Global } from "../../styles/Global.style";
import Button from "../../components/Button";

const Login = ({ navigation }: any) => {
  /* Local State */
  const [showPassword, setShowpassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Wrong format email").required("Email required"),
    password: Yup.string().required("Password required"),
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
        <Text style={LoginStyle.greeting}>Welcome back!</Text>
        <Text style={LoginStyle.title}>Login to continue.</Text>
        <Image source={IconLogin} style={LoginStyle.iconLogin} />
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
          name="password"
          placeholder="Insert password"
          label="Password"
          type="visible-password"
          secureTextEntry={!showPassword}
          errorMessage={errors?.password?.message?.toString()}
          icon={!showPassword ? IconEye : IconEyeOff}
          iconPosition="right"
          iconOnClick={() => setShowpassword(!showPassword)}
        />
        <View
          style={[Global.justifyBetween, { marginTop: 12, paddingBottom: 50 }]}
        >
          <InputCheckbox
            checked={rememberMe}
            setChecked={setRememberMe}
            label="Remember me"
          />
          <Button.Link label="Forgot Password" />
        </View>
        <Button
          label="Log In"
          onClick={console.log}
          style={{ marginBottom: 10 }}
          type="primary"
          btnType="submit"
          isDisable={!isValid || isSubmitting}
          isSubmit={isSubmitting && isValid}
        />
        <View style={[Global.justifyCenter, { gap: 5 }]}>
          <Text style={LoginStyle.haventAccount}>
            Don’t have an account as a customer?
          </Text>
          <Button.Link
            label="Register"
            onClick={() => navigation.push("Register")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
