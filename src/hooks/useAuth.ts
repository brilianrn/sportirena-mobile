import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from "react-redux";
import { ToastPosition, ToastType } from "../../App.type";
import { homePath, loginPath, resetPasswordName } from "../constants";
import { getProfile } from "../core/GET_Profile";
import { BodyLogin, postLogin } from "../core/POST_Login";
import { BodyRegister, postRegister } from "../core/POST_Register";
import {
  BodyRequestForgot,
  postRequestForgot,
} from "../core/POST_RequestForgot";
import { setTokenRequestForgot } from "../store/actions/user.action";
import {
  retrieveLocalStorageItem,
  storeLocalStorageItem,
} from "../utils/localStorage";
import {
  BodyForgotPassword,
  postForgotPassword,
} from "../core/POST_ForgotPassword";

export const useAuth = () => {
  /* Local State */
  const [loading, setLoading] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [messageData, setMessageData] = useState<string>("");

  /* Redux */
  const dispatch = useDispatch();

  /* Router */
  const { navigate } = useNavigation();

  /* Toast */
  const toast = useToast();

  const resetMessage = () => {
    setError(false);
    setMessageData("");
  };

  useEffect(() => {
    const timer = setTimeout(() => resetMessage(), 2500);
    return () => {
      clearTimeout(timer);
    };
  }, [messageData]);

  useEffect(() => {
    (async () => {
      const accessToken = await retrieveLocalStorageItem("accessToken");
      if (accessToken) {
        navigate(homePath as never);
      } else {
        setLoggedIn(false);
      }
    })();
  }, [navigate]);

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

  const signIn = async ({ email, password }: BodyLogin) => {
    try {
      const { success, result, message } = await postLogin({ email, password });
      if (success && result) {
        await storeLocalStorageItem({
          storageKey: "accessToken",
          storageValue: result.token,
        });
        const user = await getProfile();
        if (user.success && user.result) {
          await storeLocalStorageItem({
            storageKey: "userInfo",
            storageValue: JSON.stringify(user.result),
          });
          showToast({
            message: message || "Login successfully",
            type: "success",
            placement: "bottom",
          });
          setError(false);
          navigate(homePath as never);
          setLoading(false);
          return setMessageData(message);
        }
      }
      setMessageData(message);
      showToast({
        message: "Invalid email or password",
        type: "danger",
        placement: "bottom",
      });
      return setError(true);
    } catch (err) {
      return err;
    }
  };

  const signUp = async (payload: BodyRegister) => {
    try {
      const { success, token, message } = await postRegister(payload);
      if (success && token) {
        showToast({
          message: message || "Register successfully, please check your email!",
          type: "success",
          placement: "bottom",
        });
        setError(false);
        navigate(loginPath as never);
        setLoading(false);
        return setMessageData(message);
      }
      setMessageData(message);
      showToast({
        message: "Register failed",
        type: "danger",
        placement: "bottom",
      });
      return setError(true);
    } catch (err) {
      return err;
    }
  };

  const requestForgot = async (payload: BodyRequestForgot) => {
    try {
      const { success, token, message } = await postRequestForgot(payload);
      if (success && token) {
        dispatch(setTokenRequestForgot(token));
        setError(false);
        navigate(resetPasswordName as never);
        setLoading(false);
        return setMessageData(message);
      }
      setMessageData(message);
      showToast({
        message: "Request forgot password failed",
        type: "danger",
        placement: "bottom",
      });
      return setError(true);
    } catch (err) {
      return err;
    }
  };

  const forgotPassword = async (payload: BodyForgotPassword) => {
    try {
      const { success, message } = await postForgotPassword(payload);
      if (success) {
        setError(false);
        navigate(loginPath as never);
        setLoading(false);
        return setMessageData(message);
      }
      setMessageData(message);
      showToast({
        message: "Forgot password failed",
        type: "danger",
        placement: "bottom",
      });
      return setError(true);
    } catch (err) {
      return err;
    }
  };

  return {
    error,
    loggedIn,
    messageData,
    loading,
    signIn,
    signUp,
    requestForgot,
    forgotPassword,
  };
};
