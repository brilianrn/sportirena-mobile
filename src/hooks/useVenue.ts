import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from "react-redux";
import { ToastPosition, ToastType } from "../../App.type";
import { useNavigation } from "@react-navigation/native";
import { venueDetailName } from "../constants";
import { setVenueDetail } from "../store/actions/venue.action";

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

  /* History Order List */
  const fetchVenueDetail = async (params: number) => {
    setIsLoading(true);
    dispatch(
      setVenueDetail({
        vanueName: "Lapangan Puri Indah",
        courtAvailable: 5,
        image:
          "https://admin.saraga.id/storage/images/anwa-cover_1680234506.jpg",
        location: "Jakarta Barat",
        startPrice: 50000,
      })
    );
    // When error show toast
    showToast({
      message: "Helloworld" + params,
      placement: "bottom",
      type: "danger",
    });
    setIsLoading(false);
    navigate(venueDetailName as never);
  };

  return { isError, message, isLoading, fetchVenueDetail };
};
