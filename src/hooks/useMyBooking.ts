import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import { ToastPosition, ToastType } from "../../App.type";
import { getDone } from "../core/GET_Done";
import { getReserved } from "../core/GET_Reserved";
import { getWaitingPayment } from "../core/GET_WaitingPayment";
import {
  setDone,
  setReserved,
  setWaitingPayment,
} from "../store/actions/mybooking.action";
import { IRootState } from "../store/reducers";
import { QueryParamMyBooking } from "../types/common.type";

export const useMyBooking = () => {
  /* Local State */
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  /* Redux */
  const dispatch = useDispatch();

  /* Redux */
  const { waitingPayment, reserved, done } = useSelector(
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
  return {
    isError,
    message,
    isLoading,
    fetchWaitingPayment,
    fetchDone,
    fetchReserved,
  };
};
