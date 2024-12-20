export type TimeType = {
  timestamp: number;
  date: string;
  available: boolean;
  id?: string;
  idRelation?: string;
  idVenue?: string;
  status?: boolean | 0 | 1;
  day?: string;
  startTime?: string;
  endTime?: string;
  startEndTime?: string;
  startTimeOri?: string;
  statusBook?: string;
  price?: number;
  venueId?: string;
  courtId?: string;
  courtName?: string;
  openHoursId?: string;
};

export interface ScheduleTime {
  startEndTime: string;
  startTime: string;
  endTime: string;
  times: Array<TimeType>;
}

export interface BookingType {
  statusBook:
    | "CLOSE"
    | "WAITING_FOR_APPROVED"
    | "APPROVED"
    | "WAITING_FOR_PAYMENT"
    | "SELECTED"
    | "CART"
    | "AVAILABLE";
  id: string;
  idRelation: string;
  day: string;
  startTime: string;
  endTime: string;
  startEndTime: string;
  startTimeOri: string;
  status: boolean;
  price: number;
  venueId?: string;
  courtId?: string;
  courtName?: string;
  openHoursId?: string;
  cartId?: string;
  date?: string;
  bookDate?: string;
  customerId?: string;
  isOldCard?: boolean;
  isChecked?: boolean;
}

export interface CourtDetail {
  id: string;
  idVenue: string;
  courtName: string;
  facilityId: string;
  facility: string;
  description: string;
  min: number;
  max: number;
  linkUrl: string;
  pathName: string;
  imageName: string;
}

export interface BookingHeaderProps {
  courtDetail: CourtDetail;
  venueName: string;
}

export type BankType = {
  bankName: string;
  bankAccountHolder: string;
  bankAccountNumber: string;
};
