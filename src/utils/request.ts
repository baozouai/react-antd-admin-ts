/*
 * @Description: 
 * @Author: Moriaty
 * @Date: 2020-09-13 22:56:29
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-13 23:04:20
 */
import cookie from 'js-cookie';
import Config from '@/config';

const { TOKEN_KEY } = Config;
const getToken: () => string = () => cookie.get(TOKEN_KEY) || '';

export {
  getToken
};