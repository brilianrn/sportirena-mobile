import moment from "moment";
import {
  IconBadminton,
  IconBasketBall,
  IconFutsal,
  IconPool,
  IconSoccer,
  IconTennisBall,
} from "../assets/images";
import { FacilityTypeName } from "../types/common.type";

export const subStringLongText = (text: string, limit: number) => {
  return text.length > limit ? text.substring(0, limit - 3) + "..." : text;
};

export const IDRFormat = (num: number, prefix?: string) => {
  if (!num) return "0";
  const number_string = num
    .toString()
    .replace(/[^,\d]/g, "")
    .toString();
  const split = number_string.split(",");
  const sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);
  let separator = "";

  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] !== undefined ? `${rupiah},${split[1]}` : rupiah;
  return prefix === undefined ? rupiah : rupiah ? `Rp. ${rupiah}` : "";
};

// eslint-disable-next-line
export const serializeParam = (obj: Record<string, any>): string => {
  let resolveObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (obj[key]) {
      resolveObj = { ...resolveObj, [key]: value };
    }
  });

  const params = new URLSearchParams(resolveObj);
  return params.toString();
};

// eslint-disable-next-line
export const deserializeParam = (str: string): Record<string, any> => {
  const params = new URLSearchParams(str);
  // eslint-disable-next-line
  const obj: Record<string, any> = {};

  params.forEach((value, key) => {
    obj[key] = value;
  });

  return obj;
};

export const iconTypeFormatter = (facilityType: FacilityTypeName) => {
  switch (facilityType) {
    case "Football":
      return IconSoccer;
    case "Swimming Pool":
      return IconPool;
    case "Tennis":
      return IconTennisBall;
    case "Basketball":
      return IconBasketBall;
    case "Fustal":
      return IconFutsal;
    case "Badminton":
      return IconBadminton;
    default:
      return IconTennisBall;
  }
};

export const convertNumToArr = (num: number) => {
  const tempArr: number[] = [];
  for (let i = 0; i < num; i++) {
    tempArr.push(i);
  }
  return tempArr;
};

export const formatDateArr = (startDate: string, endDate: string) => {
  if (new Date(startDate) >= new Date(endDate)) return [];
  const date1 = moment(startDate);
  const date2 = moment(endDate);
  const arrNum = convertNumToArr(date2.diff(date1, "days"));
  return [
    ...arrNum.map((e) => new Date(moment(startDate).add(e, "days").toString())),
    new Date(endDate),
  ];
};

export const kFormatter = (num: number) => {
  const absValue = Math.abs(num) / 1000;
  return Math.abs(num) > 999
    ? Math.sign(num) * absValue + "k"
    : Math.sign(num) * absValue;
};

export const formatCmpctNumber = (number: number) => {
  const usformatter = Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    notation: "compact",
    compactDisplay: "short",
  });
  return usformatter.format(number);
};
