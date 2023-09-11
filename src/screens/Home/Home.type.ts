import { ImageSourcePropType } from "react-native";
import { FacilityTypeName, PageComponent } from "../../types/common.type";
import { VenueType } from "../../types/venue.type";

export interface CardFacilityTypeProps {
  titile: string;
  icon: ImageSourcePropType;
  iconHeight?: number;
  iconWidth?: number;
}

export interface FacilityType {
  id: string;
  typeName: FacilityTypeName;
  facilityTypeName?: FacilityTypeName;
  description?: string;
}

export interface FacilityTypeProps extends PageComponent {
  data?: FacilityType[];
}

export interface VenuesProps extends PageComponent {
  data?: VenueType[];
}
