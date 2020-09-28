/*
 * @Description: 路由的一些方法
 * @Author: Moriaty
 * @Date: 2020-09-10 23:11:19
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-28 15:06:20
 */
import React from 'react';
import { IRoute } from './index';
const { lazy } = React;
// 路由懒加载
function lazyImport(promise: Promise<{ default: React.ComponentType<string>; }>) {
  return lazy(() => promise);
};
/**
 * @description: 将路由转换为一维数组
 * @param {IRoute[]} routes 路由配置信息
 * @param {boolean} isDeep 是否深层
 * @param {boolean} isAuto 是否授权
 * @param {string[]} ingnoreRoutes 不加入result的路由
 */
function flattenRoute(routes: IRoute[], isDeep: boolean, isAuto: boolean, ingnoreRoutes: string[] = []): IRoute[] {
  const result: IRoute[] = [];
  for (let i = 0; i < routes.length; ++i) {
    const route: IRoute = routes[i];
    let { path, auth, children, redirect, component } = route;
    if (redirect) {
      // 如果有重定向，则加上重定向，且重定向加上*，且去掉component和exact设为false
      result.push({
        ...route,
        path: `${path}*`,
        redirect,
        component: undefined,
        exact: false,
      })
      redirect = undefined;
    }
    // 不加入result的路由
    if (!ingnoreRoutes.includes(path)) {
      if (component) {
        result.push({
          ...route,
          redirect,
          auth: auth ?? isAuto,
        })
      }
    }
    // 如果需要拿到深层，测继续遍历
    if (Array.isArray(children) && isDeep) {
      result.push(...flattenRoute(children, isDeep, isAuto, ingnoreRoutes))
    }
  }
  // 最终返回的是一维的路由配置，且redirect的路由信息都在底层，按照path长度排序，path越短，越靠低
  return [...result.filter(({ redirect }) => !redirect), ...result.filter(({ redirect }) => redirect).sort(({ path: p1 }, { path: p2 }) => p2.length - p1.length)];
}

function formatRoute(routes: IRoute[], parentPath: string = '') {
  routes.forEach((route: IRoute) => {
    const {
      path,
      children,
    } = route;
    if (path !== parentPath || path === '') {
      route.path = `${parentPath}/${path}`;
    }
    if (children?.length) {
      formatRoute(children, route.path === '/' ? '' : route.path);
    }
  })
  return routes;
}
export {
  lazyImport,
  flattenRoute,
  formatRoute,
};
