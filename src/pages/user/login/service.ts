/*
 * @Description:
 * @Author: Moriaty
 * @Date: 2020-09-16 22:13:50
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-16 22:47:50
 */
import request from '@/request';
import {
  ILoginParams
} from './constants';

const accountLogin = (data:ILoginParams) => request({
  method: 'POST',
  url: '/user/login',
  data
});

export {
  accountLogin
};