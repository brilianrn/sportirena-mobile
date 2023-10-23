import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from "react-redux";
import { ToastPosition, ToastType } from "../../App.type";
import { venueDetailPath } from "../constants";
import { getRegencies } from "../core/GET_Provinces";
import { getServiceFee } from "../core/GET_ServiceFee";
import { getVenueCourts } from "../core/GET_VenueCourts";
import { getVenueDetail } from "../core/GET_VenueDetail";
import { FacilityType } from "../screens/Home/Home.type";
import {
  setProvinces,
  setServiceFee,
  setVenueCourt,
  setVenueDetail,
} from "../store/actions/venue.action";
import { QueryParamVenueCourt, VenueType } from "../types/venue.type";

export const useVenue = () => {
  /* Local State */
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  /* Redux */
  const dispatch = useDispatch();

  /* Toast */
  const toast = useToast();

  /* Navigate */
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

  /* Venue Detail */
  const fetchVenueDetail = async (params?: VenueType, id?: string) => {
    if (params && !id) {
      const facilities: FacilityType[] = params.facilities.map((e: any) => ({
        ...e,
        id: e.facilityTypeId,
        typeName: e.facilityTypeName,
      }));
      setIsLoading(true);
      dispatch(setVenueDetail({ ...params, facilities }));
      setIsLoading(false);
    } else {
      setIsLoading(true);
      try {
        const { message, result } = await getVenueDetail(id as string);
        setIsLoading(false);
        if (!result) {
          setMessage(message);
          showToast({
            message: "Venue detail not found",
            type: "danger",
            placement: "bottom",
          });
          setIsError(true);
          return dispatch(setVenueCourt(undefined));
        }
        dispatch(setVenueDetail(result));
      } catch (err) {
        return err;
      }
    }
    navigate(venueDetailPath as never);
  };

  /* Venue Court */
  const fetchVenueCourt = async (id: string, params: QueryParamVenueCourt) => {
    setIsLoading(true);
    try {
      const { message, result } = await getVenueCourts(id, params);
      setIsLoading(false);
      if (!result?.length) {
        setMessage(message);
        showToast({
          message: "Venue court not found",
          type: "danger",
          placement: "bottom",
        });
        setIsError(true);
        return dispatch(setVenueCourt(undefined));
      }
      return dispatch(setVenueCourt(result));
    } catch (err) {
      return err;
    }
  };

  /* Provinces */
  const fetchRegencies = async () => {
    setIsLoading(true);
    try {
      const { message, result } = await getRegencies();
      setIsLoading(false);
      if (!result?.length) {
        setMessage(message);
        showToast({
          message: "Provinces not found",
          type: "danger",
          placement: "bottom",
        });
        setIsError(true);
        return dispatch(setProvinces(undefined));
      }
      return dispatch(setProvinces(result));
    } catch (err) {
      return err;
    }
  };

  /* Service Fee */
  const fetchServiceFee = async (venueId: string) => {
    setIsLoading(true);
    try {
      const { message, result } = await getServiceFee(venueId);
      setIsLoading(false);
      if (!result) {
        setMessage(message);
        showToast({
          message: "Service fee not found",
          type: "danger",
          placement: "bottom",
        });
        setIsError(true);
        dispatch(setServiceFee(undefined));
        return null;
      }
      dispatch(setServiceFee(result?.serviceFee));
      return result?.serviceFee;
    } catch (err) {
      return null;
    }
  };
  return {
    isError,
    message,
    isLoading,
    fetchVenueDetail,
    fetchVenueCourt,
    fetchRegencies,
    showToast,
    fetchServiceFee,
  };
};
