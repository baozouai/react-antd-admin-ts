/*
 * @Description: 路由配置信息
 * @Author: Moriaty
 * @Date: 2020-09-10 23:17:34
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-28 14:55:40
 */
import { lazyImport, flattenRoute, formatRoute } from './util';

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

export const routes: IRoute[] = formatRoute([
  {
    path: 'user',
    component: lazyImport(import('@/layouts/user')),
    meta: {
      title: '用户路由',
    },
    redirect: '/user/login',
    children: [
      {
        path: 'login',
        component: lazyImport(import('@/pages/user/login')),
        meta: {
          title: '登录',
        },
        exact: true,
      },
      {
        path: 'register',
        component: lazyImport(import('@/pages/user/register')),
        meta: {
          title: '注册',
        },
        exact: true,
      },
    ]
  },
  {
    path: '',
    component: lazyImport(import('@/layouts/basic')),
    meta: {
      title: '系统',
    },
    redirect: '/user/login',
    children: [
      {
        path: 'dashboard',
        meta: {
          title: '登录',
          icon: 'dashboard',
        },
        exact: true,
        redirect: '/dashboard/readme',
        children: [
          {
            path: 'readme',
            exact: true,
            component: lazyImport(import('@/pages/dashboard/readme')),
            meta: {
              title: '系统介绍',
              icon: 'readme',
            }
          },
          {
            path: 'readme1',
            exact: true,
            component: lazyImport(import('@/pages/dashboard/readme')),
            meta: {
              title: '系统介绍',
              icon: 'readme',
            }
          }
        ]
      },
      {
        path: 'dashboard1',
        meta: {
          title: '登录',
          icon: 'dashboard',
        },
        exact: true,
        redirect: '/dashboard1/readme',
        children: [
          {
            path: 'readme',
            exact: true,
            component: lazyImport(import('@/pages/dashboard/readme')),
            meta: {
              title: '系统介绍',
              icon: 'readme',
            }
          },
          {
            path: 'readme1',
            exact: true,
            component: lazyImport(import('@/pages/dashboard/readme')),
            meta: {
              title: '系统介绍',
              icon: 'readme',
            }
          }
        ]
      },
    ]
  },
]);

export const layoutRouteList: IRoute[] = flattenRoute(routes, false, false);
export const userRouteList: IRoute[] = flattenRoute([routes.find(route => route.path === '/user')!], true, false, ['/user']);
export const basicRouteList: IRoute[] = flattenRoute([routes.find(route => route.path === '/')!], true, false, ['/']);