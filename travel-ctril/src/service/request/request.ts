import axios from "axios";
// 引入 axios 实例类型
import type { AxiosInstance, AxiosRequestConfig } from "axios";
// 引入 自己封装的接口 ，实现 拦截器的合法转入
import { HYRequestInterceptors, HYRequestConfig } from '../../config/axios/axios.type'

export class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  // 
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    // 从实例配置 config 中获取拦截器配置 
    this.interceptors = config.interceptors

    // 全局的请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        // console.log(config);
        // console.log('请求拦截成功');
        return config
      },
      (error) => {
        console.log('全局请求失败', error);
      }
    )
    // 全局响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        // res 为 AxiosResponse 类型，含有 config/data/headers/request/status/statusText 属性
        // console.log(res);
        // console.log('响应拦截成功');
        return res.data
      },
      (error) => {
        console.log('全局响应失败拦截');
        console.log(error.request);
        console.log(error.response);
        return error
      }
    )

    // 实例级别拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }
  // 加入 泛型限定 返回数据类型 T
  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // 请求拦截设置位置
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 响应拦截设置位置
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          console.log("=====", err);
          reject(err)
        })
    })
  }
  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET'
    })
  }
  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'POST'
    })
  }

}