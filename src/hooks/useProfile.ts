import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { ToastPosition, ToastType } from "../../App.type";
import { profileName } from "../constants";
import {
  BodyUpdateProfile,
  postUpdateProfile,
} from "../core/POST_UpdateProfile";
import {
  BodyUpdatePassword,
  postUpdatePassword,
} from "../core/POST_UpdatePassword";

export const useProfile = () => {
  /* Local State */
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  /* Toast */
  const toast = useToast();

  /* Router */
  const { navigate } = useNavigation();

  const resetState = () => {
    setIsError(false);
    setMessage(undefined);
  };

  useEffect(() => {
    const timer = setTimeout(() => resetState(), 2500);
    return () => clearTimeout(timer);
  }, [message]);

  const showToast = ({
    duration = 4000,
    message,
    placement,
    type,
  }: {
    type: ToastType;
    placement: ToastPosition;
    duration?: number;
    message: string;
  }) => {
    toast.show(message, {
      type,
      placement,
      duration,
      animationType: "slide-in",
    });
  };

  /* Update Profile */
  const updateProfile = async (payload: BodyUpdateProfile) => {
    setIsLoading(true);
    try {
      const { message, success, statusCode } = await postUpdateProfile(payload);
      console.log(message, success, statusCode);
      setIsLoading(false);
      if (!success) {
        setMessage(message);
        showToast({
          message: message?.includes("413")
            ? "Max size image 2mb"
            : "Update profile failed",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      setIsError(false);
      return navigate(profileName as never);
    } catch (err) {
      return err;
    }
  };

  /* Update Password */
  const updatePassword = async (payload: BodyUpdatePassword) => {
    setIsLoading(true);
    try {
      const { message, success } = await postUpdatePassword(payload);
      setIsLoading(false);
      if (!success) {
        setMessage(message);
        showToast({
          message: message || "Update password failed",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      setIsError(false);
      return navigate(profileName as never);
    } catch (err) {
      return err;
    }
  };
  return {
    isError,
    message,
    isLoading,
    updateProfile,
    showToast,
    updatePassword,
  };
};
