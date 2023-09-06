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
