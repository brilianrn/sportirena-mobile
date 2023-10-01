import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";
import {
  IconEye,
  IconEyeOff,
  IconLogin,
  IconSportirena,
} from "../../assets/images";
import Button from "../../components/Button";
import { InputCheckbox, InputText } from "../../components/Input";
import Modal from "../../components/Modal";
import { homePath, registerName } from "../../constants";
import { useAuth } from "../../hooks/useAuth";
import { Global } from "../../styles/Global.style";
import {
  removeLocalStorageItem,
  retrieveLocalStorageItem,
} from "../../utils/localStorage";
import LoginStyle from "./Login.style";

const Login = () => {
  /* Local State */
  const [showPassword, setShowpassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
  const [emailForgot, setEmailForgot] = useState<string>();

  /* Navigate */
  const { navigate } = useNavigation();

  /* Hooks */
  const { signIn, loading, requestForgot } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Wrong format email").required("Email required"),
    password: Yup.string().required("Password required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    (async () => {
      const token = await retrieveLocalStorageItem("accessToken");
      const user = await retrieveLocalStorageItem("userInfo");
      if (token || user) navigate(homePath as never);
      else {
        await Promise.all([
          removeLocalStorageItem("accessToken"),
          removeLocalStorageItem("userInfo"),
        ]);
      }
    })();
  }, []);

  const onRequestForgot = async () => {
    await requestForgot({ email: emailForgot as string });
    setEmailForgot("");
    return setForgotPassword(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          height: 33,
        }}
      />
      <ScrollView>
        <View style={[LoginStyle.container, { height: 900 }]}>
          <Modal
            show={forgotPassword}
            title="Forgot your password?"
            description="Enter your email for a reset password link"
            setShow={setForgotPassword}
          >
            <InputText
              value={emailForgot}
              setValue={setEmailForgot}
              placeholder="Insert email address"
              type="email-address"
              style={{ marginTop: 35 }}
            />
            <Button
              label="Send Reset Password Link"
              onClick={onRequestForgot}
              style={{ marginTop: 16 }}
              type="primary"
              btnType="button"
              isDisable={!emailForgot}
            />
          </Modal>
          <View style={Global.justifyBetween}>
            <View>
              <Text style={LoginStyle.greeting}>Welcome back!</Text>
              <Text style={LoginStyle.title}>Login to continue.</Text>
            </View>
            <TouchableOpacity onPress={() => navigate(homePath as never)}>
              <Image source={IconSportirena} />
            </TouchableOpacity>
          </View>
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
            type="default"
            secureTextEntry={!showPassword}
            errorMessage={errors?.password?.message?.toString()}
            icon={!showPassword ? IconEye : IconEyeOff}
            iconPosition="right"
            iconOnClick={() => setShowpassword(!showPassword)}
          />
          <View
            style={[
              Global.justifyBetween,
              { marginTop: 12, paddingBottom: 50 },
            ]}
          >
            <InputCheckbox
              checked={rememberMe}
              setChecked={setRememberMe}
              label="Remember me"
            />
            <Button.Link
              label="Forgot Password"
              onClick={() => setForgotPassword(true)}
            />
          </View>
          <Button
            label="Log In"
            onClick={handleSubmit(signIn)}
            style={{ marginBottom: 10 }}
            type="primary"
            btnType="submit"
            isDisable={!isValid || isSubmitting || loading}
            isSubmit={(isSubmitting && isValid) || loading}
          />
          <View style={[Global.justifyCenter, { gap: 5 }]}>
            <Text style={LoginStyle.haventAccount}>
              Don’t have an account as a customer?
            </Text>
            <Button.Link
              label="Register"
              onClick={() => navigate(registerName as never)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
