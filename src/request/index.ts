/*
 * @Description: 接口请求配置
 * @Author: Moriaty
 * @Date: 2020-09-13 22:44:55
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-13 23:39:25
 */
import axios, { AxiosRequestConfig } from 'axios';
import Config from '@/config';
import { axiosRequest, axiosRError, axiosResponse } from './constants';



// 请求头
axios.defaults.headers = {
  'Content-Type': 'applacation/json;charset=utf-8',
};
// 请求地址
axios.defaults.baseURL = Config.API_URL;
// 添加请求拦截器
axios.interceptors.request.use(axiosRequest, axiosRError);
// 添加响应拦截器 拦截登录过期或没权限
axios.interceptors.response.use(axiosResponse, axiosRError);

// 统一发起请求函数
export default function <T>(params: AxiosRequestConfig) {
  return axios.request<T>(params);
}

