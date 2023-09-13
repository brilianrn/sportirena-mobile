export interface BookingType {
  statusBook:
    | "CLOSE"
    | "WAITING_FOR_APPROVED"
    | "APPROVED"
    | "WAITING_FOR_PAYMENT"
    | "SELECTED"
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
}
