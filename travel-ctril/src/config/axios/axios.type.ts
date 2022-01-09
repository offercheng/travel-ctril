import { AxiosRequestConfig } from "axios";

export interface AxiosResponse<T = any> {
  data: T;
  config: AxiosRequestConfig;
}

// 返回数据类型
export interface IDataType<T = any> {
  status: string
  data: T;
}

export interface HYRequestInterceptors<T = AxiosResponse> {
  // 请求成功
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  // 请求失败
  requestInterceptorCatch?: (error: any) => any
  // 响应成功
  responseInterceptor?: (res: T) => T
  // 响应失败
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
}