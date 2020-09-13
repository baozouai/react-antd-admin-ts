/*
 * @Description: 渲染路由
 * @Author: Moriaty
 * @Date: 2020-09-12 10:14:01
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-12 13:01:06
 */
import React from 'react';
import { Switch } from 'react-router-dom';
import { IRoute } from '@/routes';
import { Route } from 'react-router-dom';

interface IRenderRoute {
  routes: IRoute[]
};
function Index(props: IRenderRoute) {

  const { routes } = props;
  return (
    <Switch>
      {routes.map((route: IRoute) => <RouteItem {...route} key={route.path} />)}
    </Switch>
  )
};

function RouteItem(route: IRoute) {
  const {
    path,
    component,
    exact,
  } = route;
  const routeProps = {
    path,
    component,
    exact,
  };
  return <Route {...routeProps} />
}

export default Index;