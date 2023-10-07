import { BookingType, CourtDetail } from "../Booking/Booking.type";

export interface CardBookingProps {
  item: BookingType;
  setChooseBooking: (flag: boolean) => void;
  courtDetail: CourtDetail;
  onDetaleBooking: () => void;
}

export interface CardOfferProps {
  normalPrice: number;
  priceWithServiceFee: number;
  coupon?: string;
  setCoupon?: (value: string) => void;
  totalHours: number;
  isCheckPrivacyPolice: boolean;
  setIsCheckPrivacyPolice: (value: boolean) => void;
}
