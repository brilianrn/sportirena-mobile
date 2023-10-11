import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { IconEye, IconEyeOff } from "../../assets/images";
import Button from "../../components/Button";
import { InputText } from "../../components/Input";
import Layout from "../../components/Layout";
import { profileName } from "../../constants";
import { useProfile } from "../../hooks/useProfile";

const UpdatePassword = ({ navigation }) => {
  /* Local State */
  const [showOldPassword, setShowOldpassword] = useState<boolean>(false);
  const [showPassword, setShowpassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  /* Hooks */
  const { updatePassword } = useProfile();

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old password required"),
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
    <React.Fragment>
      <Layout
        useTopBar
        isSearchBar={false}
        label="Change Password"
        backHref={profileName}
      >
        <InputText
          control={control}
          name="oldPassword"
          placeholder="Insert old password"
          label="Password"
          type="visible-password"
          secureTextEntry={!showOldPassword}
          errorMessage={errors?.oldPassword?.message?.toString()}
          icon={!showOldPassword ? IconEye : IconEyeOff}
          iconPosition="right"
          iconOnClick={() => setShowOldpassword(!showOldPassword)}
          style={{ marginBottom: 13 }}
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
          label="Save"
          onClick={handleSubmit(updatePassword)}
          style={{ marginBottom: 10, marginTop: 15 }}
          type="primary"
          btnType="submit"
          isDisable={!isValid || isSubmitting}
          isSubmit={isSubmitting && isValid}
        />
      </Layout>
    </React.Fragment>
  );
};

export default UpdatePassword;
