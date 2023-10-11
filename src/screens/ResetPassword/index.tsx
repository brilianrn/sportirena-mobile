import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Image, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import {
  IconArrowBlue,
  IconEye,
  IconEyeOff,
  IconLogin,
} from "../../assets/images";
import Button from "../../components/Button";
import { InputText } from "../../components/Input";
import { loginPath } from "../../constants";
import { useAuth } from "../../hooks/useAuth";
import { IRootState } from "../../store/reducers";
import { Global } from "../../styles/Global.style";
import LoginStyle from "../Login/Login.style";

const ResetPassowrd = () => {
  /* Local State */
  const [showPassword, setShowpassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  /* Redux */
  const { tokenRequestForgot } = useSelector((state: IRootState) => state.user);

  /* Navigate */
  const { navigate } = useNavigation();

  /* Hooks */
  const { forgotPassword, loading } = useAuth();

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password required"),
    confirmPassword: Yup.string()
      .required("Confirm password required")
      .oneOf([Yup.ref("password")], "Invalid password"),
  });

  const {
    control,
    handleSubmit,
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
            onClick={handleSubmit((e) =>
              forgotPassword({ ...e, token: tokenRequestForgot })
            )}
            style={{ marginBottom: 28 }}
            type="primary"
            btnType="submit"
            isDisable={!isValid || isSubmitting}
            isSubmit={(isSubmitting && isValid) || loading}
          />
          <View
            style={[Global.justifyCenter, { gap: 8 }]}
            onTouchStart={() => navigate(loginPath as never)}
          >
            <Image source={IconArrowBlue} style={{ marginTop: 5 }} />
            <Button.Link label="Back to Login" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResetPassowrd;
