import { ImageSourcePropType, StyleProp, TextStyle } from "react-native";
import { FacilityTypeName, PageComponent } from "../../types/common.type";
import { VenueType } from "../../types/venue.type";

export interface CardFacilityTypeProps {
  title?: FacilityTypeName | string;
  titleStyle?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType;
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
  useTitle?: boolean;
}

export interface VenuesProps extends PageComponent {
  data?: VenueType[];
}
