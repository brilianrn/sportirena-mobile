import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from "react-redux";
import { ToastPosition, ToastType } from "../../App.type";
import { useNavigation } from "@react-navigation/native";
import { venueDetailName } from "../constants";
import { setVenueCourt, setVenueDetail } from "../store/actions/venue.action";
import { QueryParamVenueCourt, VenueType } from "../types/venue.type";
import { FacilityType } from "../screens/Home/Home.type";
import { getVenueCourts } from "../core/GET_VenueCourts";

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
  const fetchVenueDetail = async (params: VenueType) => {
    const facilities: FacilityType[] = params.facilities.map((e: any) => ({
      ...e,
      id: e.facilityTypeId,
      typeName: e.facilityTypeName,
    }));
    setIsLoading(true);
    dispatch(setVenueDetail({ ...params, facilities }));
    setIsLoading(false);
    navigate(venueDetailName as never);
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
        return setIsError(true);
      }
      return dispatch(setVenueCourt(result));
    } catch (err) {
      return err;
    }
  };
  return { isError, message, isLoading, fetchVenueDetail, fetchVenueCourt };
};
