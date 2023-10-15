import { OptionType } from "../../../App.type";
import {
  BankType,
  BookingType,
  CourtDetail,
} from "../../screens/Booking/Booking.type";
import { FacilityType } from "../../screens/Home/Home.type";
import { MyBookingType } from "../../screens/MyBooking/MyBooking.type";
import { UserDetailType } from "../../types/common.type";
import { VenueCourt, VenueType } from "../../types/venue.type";

export interface ReducerProps<
  T = object | object[] | [] | string | number | null
> {
  type: string;
  payload: T;
}

export interface VenueInitalState {
  venues: VenueType[] | null;
  venueDetail: VenueType | null;
  venueCourt: VenueCourt[] | null;
  regencies: OptionType[] | null;
}

export interface UserInitialState {
  userDetail: UserDetailType | null;
  tokenRequestForgot: string | null;
}

export interface DashboardInitialState {
  facilityTypes: FacilityType[] | null;
}

export interface MyBookingInitialState {
  waitingPayment: MyBookingType[] | null;
  waitingApproval: MyBookingType[] | null;
  waitingApprovalDetail: MyBookingType | null;
  reservedDetail: MyBookingType | null;
  reserved: MyBookingType[] | null;
  done: MyBookingType[] | null;
  waitingPaymentDetail: MyBookingType | null;
}

export interface BookingInitialState {
  courtDetail: CourtDetail | null;
  scheduleTime: BookingType[] | null;
  cart: BookingType[] | null;
  paymentBookingHour: BookingType[] | null;
  bankNames: BankType[] | null;
}
