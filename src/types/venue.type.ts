import { QueryParamList } from "./common.type";

export type VenueType = {
  // vanueName: string;
  // image: string;
  // location: string;
  // startPrice: number;
  // courtAvailable: number;
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
  facilities: {
    id: string;
    venueId: string;
    facilityTypeId: string;
    facilityTypeName: string;
    createdAt: string;
    updatedAt: string;
  }[];
  pathName: string;
  imageName: string;
};

export interface QueryParamVenues extends QueryParamList {
  facility?: string;
  location?: string;
}
