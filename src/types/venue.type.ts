import { FacilityType } from "../screens/Home/Home.type";
import { QueryParamList } from "./common.type";

export type VenueType = {
  id: string;
  provinceName: string;
  regencyName: string;
  districtName: string;
  villageName: string;
  venueName: string;
  address: string;
  email: string;
  linkFb: string;
  linkTwitter: string;
  linkIg: string;
  linkUrl: string;
  openTime: string;
  closeTime: string;
  description: string;
  contactWa: string;
  telephone: string;
  longitude: string;
  latitude: string;
  totalCourt: number;
  minPrice: number;
  maxPrice: number;
  privacyPolicy: string;
  facilities:
    | {
        id: string;
        venueId: string;
        facilityTypeId: string;
        facilityTypeName: string;
        createdAt: string;
        updatedAt: string;
      }[]
    | FacilityType[];
  pathName: string;
  imageName: string;
};

export interface QueryParamVenues extends QueryParamList {
  isScroll?: boolean;
  facility?: string;
  location?: string;
}

export type VenueCourt = {
  id: string;
  courtName: string;
  facilityId: string;
  facility: string;
  min: number | null;
  description: string;
  pathName: string | null;
  imageName: string | null;
};

export interface QueryParamVenueCourt extends QueryParamList {
  facility?: string;
  date?: string;
}
