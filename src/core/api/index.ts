import axios from "axios";
import { serializeParam } from "../../utils/formattor";
import {
  removeLocalStorageItem,
  retrieveLocalStorageItem,
} from "../../utils/localStorage";
import { DeletePayload, GetPayload, PostPayload } from "./api";

const http = axios.create({
  timeout: Number(process.env.EXPO_PUBLIC_BASE_TIMEOUT) as number,
});

http.interceptors.request.use(async (req) => {
  const accessToken = (await retrieveLocalStorageItem("accessToken")) || null;
  if (accessToken) {
    req.headers["x-access-token"] = accessToken;
  }
  return req;
});

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401 || status === 405) {
      removeLocalStorageItem("accessToken");
      removeLocalStorageItem("userInfo");
    }
    throw error;
  }
);

const get = async ({ endpoint, queryParam, port, config }: GetPayload) => {
  const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;
  const portEnv = port || process.env.EXPO_PUBLIC_PORT_CUST;
  const version = process.env.EXPO_PUBLIC_BASE_VERSION;
  let url = `${baseUrl}${portEnv}${version}${endpoint}`;
  if (queryParam && Object.keys(queryParam).length > 0) {
    url = url + "?" + serializeParam(queryParam);
  }
  const res = await http.get(url, config);
  return res;
};

const post = async ({
  endpoint,
  body,
  queryParam,
  port,
  config,
}: PostPayload) => {
  const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;
  const portEnv = port || process.env.EXPO_PUBLIC_PORT_CUST;
  const version = process.env.EXPO_PUBLIC_BASE_VERSION;
  let url = `${baseUrl}${portEnv}${version}${endpoint}`;
  if (queryParam && Object.keys(queryParam).length > 0) {
    url = url + "?" + serializeParam(queryParam);
  }
  const res = await http.post(url, body, config);
  return res;
};

const put = async ({
  endpoint,
  body,
  queryParam,
  port,
  config,
}: PostPayload) => {
  const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;
  const portEnv = port || process.env.EXPO_PUBLIC_PORT_CUST;
  const version = process.env.EXPO_PUBLIC_BASE_VERSION;
  let url = `${baseUrl}${portEnv}${version}${endpoint}`;
  if (queryParam && Object.keys(queryParam).length > 0) {
    url = url + "?" + serializeParam(queryParam);
  }
  const res = await http.put(url, body, config);
  return res;
};

const patch = async ({
  endpoint,
  body,
  queryParam,
  port,
  config,
}: PostPayload) => {
  const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;
  const portEnv = port || process.env.EXPO_PUBLIC_PORT_CUST;
  const version = process.env.EXPO_PUBLIC_BASE_VERSION;
  let url = `${baseUrl}${portEnv}${version}${endpoint}`;
  if (queryParam && Object.keys(queryParam).length > 0) {
    url = url + "?" + serializeParam(queryParam);
  }
  const res = await http.patch(url, body, config);
  return res;
};

const apiDelete = async ({
  endpoint,
  bodyparam,
  queryParam,
  port,
  config,
}: DeletePayload) => {
  const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;
  const portEnv = port || process.env.EXPO_PUBLIC_PORT_CUST;
  const version = process.env.EXPO_PUBLIC_BASE_VERSION;
  let url = `${baseUrl}${portEnv}${version}${endpoint}`;
  if (queryParam && Object.keys(queryParam).length > 0) {
    url = url + "?" + serializeParam(queryParam);
  }
  const axiosConfig = {
    ...config,
    data: bodyparam,
  };
  const res = await http.delete(url, axiosConfig);
  return res;
};

export default { delete: apiDelete, get, post, patch, put, http };
