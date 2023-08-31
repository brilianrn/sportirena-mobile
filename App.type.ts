export type OptionType = {
  value: string | number;
  label: string;
};

export type ToastType = "normal" | "success" | "warning" | "danger" | "custom";

export type ToastPosition = "top" | "bottom";

export type StatusActiveType = "ACTIVE" | "NON_ACTIVE";

export type PaymentType = "PAYMENT_GATEWAY" | "CASH";

export type BookingStatus = "WAITING_FOR_PAYMENT" | "RESERVED" | "DONE";
