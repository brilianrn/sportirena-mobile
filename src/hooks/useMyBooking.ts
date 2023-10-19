import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import { ToastPosition, ToastType } from "../../App.type";
import {
  myBookingDetailPath,
  myBookingPath,
  myBookingPaymentPath,
} from "../constants";
import { getDone } from "../core/GET_Done";
import { getReserved } from "../core/GET_Reserved";
import { getReservedDetail } from "../core/GET_ReservedDetail";
import { getWaitingApproval } from "../core/GET_WaitingApproval";
import { getWaitingApprovalDetail } from "../core/GET_WaitingApprovalDetail";
import { getWaitingPayment } from "../core/GET_WaitingPayment";
import {
  BodyConfirmPayment,
  putConfirmPayment,
} from "../core/PUT_ConfirmPayment";
import { MyBookingType } from "../screens/MyBooking/MyBooking.type";
import {
  setDone,
  setReserved,
  setWaitingApproval,
  setWaitingApprovalDetail,
  setWaitingPayment,
  setWaitingPaymentDetail,
} from "../store/actions/mybooking.action";
import { IRootState } from "../store/reducers";
import { QueryParamMyBooking } from "../types/common.type";

export const useMyBooking = () => {
  /* Local State */
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  /* Navigate */
  const { navigate } = useNavigation();

  /* Redux */
  const dispatch = useDispatch();

  /* Redux */
  const { waitingPayment, waitingApproval, reserved, done } = useSelector(
    (state: IRootState) => state.myBooking
  );

  /* Toast */
  const toast = useToast();

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

  /* Booking Waiting Payment List */
  const fetchWaitingPayment = async (param: QueryParamMyBooking) => {
    setIsLoading(true);
    try {
      const { message, result } = await getWaitingPayment(param);
      setIsLoading(false);
      if (!result.rows.length) {
        setMessage(message);
        showToast({
          message: "Booking waiting payment not found",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      if (param.isCount) {
        return dispatch(
          setWaitingPayment([...waitingPayment, ...result?.rows])
        );
      }
      return dispatch(setWaitingPayment(result?.rows));
    } catch (err) {
      return err;
    }
  };

  /* Booking Waiting Payment Detail */
  const getWaitingPaymentDetail = async (payload: MyBookingType) => {
    setIsLoading(true);
    dispatch(setWaitingPaymentDetail(payload));
    navigate(myBookingPaymentPath as never);
    setIsLoading(false);
  };

  /* Booking Waiting Approval List */
  const fetchWaitingApproval = async (param: QueryParamMyBooking) => {
    setIsLoading(true);
    try {
      const { message, result } = await getWaitingApproval(param);
      setIsLoading(false);
      if (!result.rows.length) {
        setMessage(message);
        showToast({
          message: "Booking waiting approval not found",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      if (param.isCount) {
        return dispatch(
          setWaitingApproval([...waitingApproval, ...result?.rows])
        );
      }
      return dispatch(setWaitingApproval(result?.rows));
    } catch (err) {
      return err;
    }
  };

  /* Booking Waiting Approval Detail */
  const fetchWaitingApprovalDetail = async (id: string) => {
    setIsLoading(true);
    try {
      const { message, result } = await getWaitingApprovalDetail(id);
      setIsLoading(false);
      if (!result) {
        setMessage(message);
        showToast({
          message: "Booking waiting approval detail not found",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      dispatch(setWaitingApprovalDetail(result));
      return navigate(myBookingDetailPath as never);
    } catch (err) {
      return err;
    }
  };

  /* Booking Reserved List */
  const fetchReserved = async (param: QueryParamMyBooking) => {
    setIsLoading(true);
    try {
      const { message, result } = await getReserved(param);
      setIsLoading(false);
      if (!result) {
        setMessage(message);
        showToast({
          message: "Booking reserved not found",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      if (param.isCount) {
        return dispatch(setReserved([...reserved, ...result?.rows]));
      }
      return dispatch(setReserved(result?.rows));
    } catch (err) {
      return err;
    }
  };

  /* Booking Waiting Reserved Detail */
  const fetchReservedDetail = async (id: string) => {
    setIsLoading(true);
    try {
      const { message, result } = await getReservedDetail(id);
      setIsLoading(false);
      if (!result) {
        setMessage(message);
        showToast({
          message: "Booking reserved detail not found",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      dispatch(setWaitingApprovalDetail(result));
      return navigate(myBookingDetailPath as never);
    } catch (err) {
      return err;
    }
  };

  /* Booking Done List */
  const fetchDone = async (param: QueryParamMyBooking) => {
    setIsLoading(true);
    try {
      const { message, result } = await getDone(param);
      setIsLoading(false);
      if (!result) {
        setMessage(message);
        showToast({
          message: "Booking done not found",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      if (param.isCount) {
        return dispatch(setDone([...done, ...result?.rows]));
      }
      return dispatch(setDone(result?.rows));
    } catch (err) {
      return err;
    }
  };

  /* Confirm Payment */
  const confirmPayment = async (payload: BodyConfirmPayment) => {
    console.log(payload);
    setIsLoading(true);
    try {
      const { message, success } = await putConfirmPayment(payload);
      setIsLoading(false);
      if (!success) {
        setMessage(message);
        showToast({
          message: message?.includes("413") ? "Max size image 2mb" : message,
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      setIsError(false);
      return navigate(myBookingPath as never);
    } catch (err) {
      return err;
    }
  };
  return {
    isError,
    message,
    isLoading,
    fetchWaitingPayment,
    fetchWaitingApproval,
    fetchDone,
    fetchReserved,
    getWaitingPaymentDetail,
    fetchWaitingApprovalDetail,
    fetchReservedDetail,
    confirmPayment,
  };
};
