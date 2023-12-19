import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from "react-redux";
import { ToastPosition, ToastType } from "../../App.type";
import { bookingName, loginPath, myBookingPath } from "../constants";
import { deleteCart } from "../core/DELETE_Cart";
import { getBankNames } from "../core/GET_BankNames";
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
import { retrieveLocalStorageItem } from "../utils/localStorage";

export const useBooking = ({ navigation }) => {
  /* Local State */
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  /* Redux */
  const dispatch = useDispatch();

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

  /* Court Detail */
  const fetchCourtDetail = async (id: string) => {
    setIsLoading(true);
    try {
      const accessToken = await retrieveLocalStorageItem("accessToken");
      if (!accessToken) {
        return navigation.replace(loginPath as never);
      }
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
      dispatch(setCourtDetail(result));
      return navigation.push(bookingName as never);
    } catch (err) {
      return err;
    }
  };

  /* Schedule Time */
  const fetchScheduleTime = async (
    id: string,
    fromDate: string,
    toDate: string
  ) => {
    setIsLoading(true);
    try {
      const startDate = moment(new Date(fromDate)).format("YYYY-MM-DD");
      const endDate = moment(new Date(toDate)).format("YYYY-MM-DD");
      const { message, result, success } = await getScheduleTime({
        endDate,
        courtId: id,
        startDate,
      });
      if (!result) {
        setMessage(message);
        showToast({
          message: message || "Schedule time not found",
          type: "danger",
          placement: "bottom",
        });
        if (!success) navigation.push(loginPath as never);
        setIsLoading(false);
        return setIsError(true);
      }
      setIsLoading(false);
      setIsError(false);
      return dispatch(setScheduleTime(result.slice(0, 7)));
    } catch (err) {
      return err;
    }
  };

  /* Cart Booking */
  const fetchCart = async (idVenue: string) => {
    setIsLoading(true);
    try {
      const { message, result } = await getCart(idVenue);
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
      dispatch(
        setCart(result.map((e) => ({ ...e, isChecked: true, cartId: e.id })))
      );
      return result;
    } catch (err) {
      return null;
    }
  };

  /* Add Booking to Cart */
  // const addToCart = async (payload: BookingType[], venueId?: string) => {
  //   setIsLoading(true);
  //   try {
  //     const { message, success } = await postCart(payload);
  //     setIsLoading(false);
  //     if (!success) {
  //       setMessage(message);
  // showToast({
  //   message: message || "Add to cart failed",
  //   type: "danger",
  //   placement: "bottom",
  // });
  //       return setIsError(true);
  //     }
  //     await fetchCart(venueId as string);
  //     return setIsError(false);
  //   } catch (err) {
  //     return err;
  //   }
  // };
  const addToCart = async (
    payload: any,
    filter: any,
    { courtId, date, customerId, courtName }
  ) => {
    setIsLoading(true);
    try {
      const { success, message } = await postCart(payload);
      if (success) {
        // await eventTotalCart(filter.customerId);
        // await fetchBookingAllHours(filter, {
        //   courtId,
        //   courtName,
        //   customerId,
        //   date,
        // });
        showToast({
          message: message || "Add to cart success",
          type: "success",
          placement: "bottom",
        });
      } else {
        setMessage("Add to cart failed");
        showToast({
          message: message || "Add to cart failed",
          type: "danger",
          placement: "bottom",
        });
      }
      return setIsLoading(false);
    } catch (err) {
      setMessage("Internal server error!");
      showToast({
        message: message || "Add to cart failed",
        type: "danger",
        placement: "bottom",
      });
      return setIsLoading(false);
    }
  };

  // const eventTotalCart = async (customerId) => {
  //   setIsLoading(true);
  //   try {
  //     const { success, message, rows } = await getTotalCart(customerId);
  //     if (success) {
  //       dispatch(setTotalCart(rows));
  //     } else {
  //       dispatch(setTotalCart(0));
  //       setMessage("Get total cart failed");
  //       toastNotif({
  //         message: message || "Get total cart failed",
  //         type: "error",
  //       });
  //     }
  //     return setIsLoading(false);
  //   } catch (err) {
  //     dispatch(setTotalCart(0));
  //     setMessage("Internal server error!");
  //     toastNotif({
  //       message: err.message || "Internal server error!",
  //       type: "error",
  //     });
  //     return setIsLoading(false);
  //   }
  // };

  // const fetchBookingAllHours = async (
  //   queryParams,
  //   { courtId, date, customerId, courtName }
  // ) => {
  //   setLoading(true);
  //   try {
  //     const { success, message, result } = await getBookingsAllHours(
  //       queryParams
  //     );
  //     if (success && result) {
  //       const d = result?.map((e) => ({
  //         ...e,
  //         times: e?.times?.map((el) => ({
  //           ...el,
  //           customerId,
  //           courtId,
  //           courtName,
  //           openHoursId: el?.id,
  //         })),
  //       }));
  //       dispatch(setBookingsAllHours(d));
  //     } else {
  //       dispatch(setBookingsAllHours());
  //       setMessage("Data not found");
  //       toastNotif({ message: message || "Data not found", type: "error" });
  //     }
  //     return setLoading(false);
  //   } catch (err) {
  //     setMessage("Internal server error!");
  //     toastNotif({
  //       message: err.message || "Internal server error!",
  //       type: "error",
  //     });
  //     return setLoading(false);
  //   }
  // };

  /* Delete Cart */
  const removeCart = async (id: string, venueId?: string) => {
    setIsLoading(true);
    try {
      const { success } = await deleteCart(id);
      if (success) await fetchCart(venueId as string);
      return setIsLoading(false);
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
      const { message, success } = await postBooking({
        ...payload,
        data: payload?.data?.filter((e) => e?.isChecked),
      });
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
      return navigation?.push(myBookingPath as never);
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
    showToast,
    removeCart,
  };
};
