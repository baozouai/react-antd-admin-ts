/*
 * @Description: 路由配置信息
 * @Author: Moriaty
 * @Date: 2020-09-10 23:17:34
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-12 13:03:10
 */
import { lazyImport } from './util';

//  路由信息
export interface IRouteMeta {
  title: string
  icon?: string
}
interface IRouteBase {
  // 路径
  path: string
  // 路由组件
  component?: any
  // 302 重定向
  redirect?: string
  // 路由信息
  meta: IRouteMeta
  // 是否校验权限 只有false才不校验 子路由会继承父路由的 auth 属性
  auth?: boolean,
  exact?: boolean,
}

export interface IRoute extends IRouteBase {
  children?: IRoute[]
}

/**
 *  第一层路由为最外层的Layout
 */

export const routes: IRoute[] = [
  {
    path: '/user',
    component: lazyImport(import('@/layouts/user')),
    meta: {
      title: '用户路由',
    },
    children: [
      {
        path: '/user/login',
        component: lazyImport(import('@/pages/user/login')),
        meta: {
          title: '登录',
        },
        exact: true,
      },
      {
        path: '/user/register',
        component: lazyImport(import('@/pages/user/register')),
        meta: {
          title: '注册',
        },
        exact: true,
      },
      {
        path: '/user',
        component: lazyImport(import('@/pages/user/login')),
        meta: {
          title: '登录',
        },
      },
    ]
  },
];

export const userRouteList:IRoute[] = routes.find(route => route.path === '/user')?.children || [];