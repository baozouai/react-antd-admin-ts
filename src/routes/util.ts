/*
 * @Description: 路由的一些方法
 * @Author: Moriaty
 * @Date: 2020-09-10 23:11:19
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-12 14:07:28
 */
import React from 'react';

const { lazy } = React;
// 路由懒加载
function lazyImport(promise: Promise<{ default: React.ComponentType<string>; }>) {
  return lazy(() => promise);
};

export {
  lazyImport,
};
