import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from "react-redux";
import { ToastPosition, ToastType } from "../../App.type";
import { loginPath, myBookingPath, paymentPath } from "../constants";
import { getCart } from "../core/GET_Cart";
import { getCourtDetail } from "../core/GET_CourtDetail";
import { getScheduleTime } from "../core/GET_ScheduleTime";
import { postCart } from "../core/POST_Cart";
import { BodyCreateBooking, postBooking } from "../core/POST_CreateBooking";
import { BookingType } from "../screens/Booking/Booking.type";
import {
  setBankNames,
  setCart,
  setCourtDetail,
  setScheduleTime,
} from "../store/actions/booking.action";
import { getBankNames } from "../core/GET_BankNames";

export const useBooking = () => {
  /* Local State */
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  /* Redux */
  const dispatch = useDispatch();

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

  /* Court Detail */
  const fetchCourtDetail = async (id: string) => {
    setIsLoading(true);
    try {
      const { message, result } = await getCourtDetail(id);
      setIsLoading(false);
      if (!result) {
        setMessage(message);
        showToast({
          message: "Court detail not found",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      setIsError(false);
      return dispatch(setCourtDetail(result));
    } catch (err) {
      return err;
    }
  };

  /* Schedule Time */
  const fetchScheduleTime = async (id: string, date: string) => {
    setIsLoading(true);
    try {
      const formatDate = moment(new Date(date)).format("YYYY-MM-DD");
      const { message, result, success } = await getScheduleTime(
        id,
        formatDate
      );
      setIsLoading(false);
      if (!result) {
        setMessage(message);
        showToast({
          message: message || "Schedule time not found",
          type: "danger",
          placement: "bottom",
        });
        if (!success) navigate(loginPath as never);
        return setIsError(true);
      }
      setIsError(false);
      return dispatch(setScheduleTime(result));
    } catch (err) {
      return err;
    }
  };

  /* Cart Booking */
  const fetchCart = async (idCustomer: string) => {
    setIsLoading(true);
    try {
      const { message, result } = await getCart(idCustomer);
      setIsLoading(false);
      if (!result) {
        setMessage(message);
        showToast({
          message: message || "Booking cart not found",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      setIsError(false);
      return dispatch(setCart(result));
    } catch (err) {
      return err;
    }
  };

  /* Add Booking to Cart */
  const addToCart = async (payload: BookingType[]) => {
    setIsLoading(true);
    try {
      const { message, success } = await postCart(payload);
      setIsLoading(false);
      if (!success) {
        setMessage(message);
        showToast({
          message: message || "Add to cart failed",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      setIsError(false);
      return navigate(paymentPath as never);
    } catch (err) {
      return err;
    }
  };

  /* Fetch Bank */
  const fetchBankNames = async (venueId: string) => {
    setIsLoading(true);
    try {
      const { message, success, result } = await getBankNames(venueId);
      setIsLoading(false);
      if (!success) {
        setMessage(message);
        showToast({
          message: message || "Get bank names failed",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      setIsError(false);
      return dispatch(setBankNames(result));
    } catch (err) {
      return err;
    }
  };

  /* Create Booking */
  const createBooking = async (payload: BodyCreateBooking) => {
    setIsLoading(true);
    try {
      const { message, success } = await postBooking(payload);
      setIsLoading(false);
      if (!success) {
        setMessage(message);
        showToast({
          message: message || "Create booking failed",
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
    fetchCourtDetail,
    fetchScheduleTime,
    createBooking,
    addToCart,
    fetchCart,
    fetchBankNames,
  };
};
