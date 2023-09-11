import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { useDispatch, useSelector } from "react-redux";
import { ToastPosition, ToastType } from "../../App.type";
import { getFacilityType } from "../core/GET_FacilityType";
import { setFacilityTypes } from "../store/actions/dashboard.action";
import { getVenues } from "../core/GET_Venues";
import { setVenueList } from "../store/actions/venue.action";
import { QueryParamVenues } from "../types/venue.type";
import { IRootState } from "../store/reducers";

export const useDashboard = () => {
  /* Local State */
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  /* Redux */
  const dispatch = useDispatch();
  const { venues } = useSelector((state: IRootState) => state.venue);

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

  /* Facility Type List */
  const fetchFalicityType = async () => {
    setIsLoading(true);
    try {
      const { message, result } = await getFacilityType();
      setIsLoading(false);
      if (!result?.length) {
        setMessage(message);
        showToast({
          message: "Facility type not found",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      return dispatch(setFacilityTypes(result));
    } catch (err) {
      return err;
    }
  };

  /* Venue List */
  const fetchVenues = async (queryParam?: QueryParamVenues) => {
    setIsLoading(true);
    try {
      const { success, message, result } = await getVenues(queryParam);
      setIsLoading(false);
      if (!success) {
        setMessage(message);
        showToast({
          message: "Venues not found",
          type: "danger",
          placement: "bottom",
        });
        return setIsError(true);
      }
      if (queryParam?.isScroll) {
        return dispatch(setVenueList(venues.concat(result)));
      }
      return dispatch(setVenueList(result));
    } catch (err) {
      return err;
    }
  };

  return { isError, message, isLoading, fetchFalicityType, fetchVenues };
};
