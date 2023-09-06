import { AxiosRequestConfig } from "axios";

export interface GetPayload {
  endpoint: string;
  queryParam?: Record<string, any>;
  port: number;
  config?: AxiosRequestConfig;
}

export interface PostPayload extends GetPayload {
  body: Record<string, any>;
}

export interface DeletePayload extends GetPayload {
  bodyparam: any;
}
