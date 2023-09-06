export interface ResponseREST {
  success: boolean;
  message: string;
  statusCode?: number;
}

export interface ResultDataList {
  count: number;
  page: number;
  pageSize: number;
}
