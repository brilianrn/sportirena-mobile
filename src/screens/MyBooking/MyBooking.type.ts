import {
  BookingStatus,
  PaymentType,
  StatusActiveType,
} from "../../../App.type";
import { ResultDataList } from "../../core/response";

export interface DetailBooking {
  id: string;
  bookingId: string;
  customerId: string;
  venueId: string;
  venueName: string;
  customerName: string;
  customerEmail: string;
}

export interface MyBookingType {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  totalHour: number;
  totalPrice: number;
  status: StatusActiveType;
  rejectedReason?: string;
  invoiceUrl: string;
  invoiceCode: string;
  expiry_date: string;
  paymentType: PaymentType;
  toBankName?: string | null;
  toBankAccountHolder?: string | null;
  toBankAccountNumber?: string | null;
  fromBankName?: string | null;
  fromBankAccountHolder?: string | null;
  fromBankAccountNumber?: string | null;
  transferDate?: string | null;
  transferAmount?: string | null;
  detailbooking: DetailBooking;
  pathName: string;
  imageName: string;
  bookingScheduleId: string;
  bookingId: string;
  detailBookingId: string;
  courtId: string;
  courtName: string;
  openHoursId: string;
  bookDate: string;
  startTime: string;
  endTime: string;
  startEndTime: string;
  price: number;
  statusBook: BookingStatus;
  linkUrl: string;
}

export interface ResultMyBooking extends ResultDataList {
  rows: MyBookingType[];
}

export interface MyBookingCard {
  data: MyBookingType;
  status: BookingStatus;
}
