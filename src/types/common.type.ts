export interface UserDetailType {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  gender: string;
  pathName: string;
  imageName: string;
}

export type Gender = "Male" | "Female" | string;

export type FacilityTypeName =
  | "Fustal"
  | "Badminton"
  | "Football"
  | "Basketball"
  | "Swimming Pool"
  | "Tennis";

export type QueryParamList = {
  page: number;
  pageSize: number;
  search?: string;
};

export interface PageComponent {
  isLoading: boolean;
}
