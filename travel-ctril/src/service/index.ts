import { HYRequest } from './request/request';
import { BaseURL, TIMEOUT } from '../api/index.config'

export const hzRequest = new HYRequest({
  baseURL: BaseURL,
  timeout: TIMEOUT,
})


export const hyRequest = new HYRequest({
  baseURL: BaseURL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor:(config) => {
      const token = localStorage.getItem('token');
      if(token) {
        // 这里要注意的就是  ! 非空断言符号的使用
        config.headers!.Authorization = token; 
        console.log(config.headers, "-------");
      }
      return config
    }
  }
})