/*
 * @Description: 渲染路由
 * @Author: Moriaty
 * @Date: 2020-09-12 10:14:01
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-28 14:59:27
 */
import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import Authorized from '@/pages/components/authorized';

import { IRoute } from '@/routes';
import { Route } from 'react-router-dom';

interface IRenderRoute {
  routes: IRoute[]
};
function RenderRoutes(props: IRenderRoute) {

  const { routes } = props;
  if (!Array.isArray(routes)) {
    return null;
  }
  return (
    <Switch>
      {routes.map((route: IRoute) => <RouteItem {...route} key={route.path} />)}
    </Switch>
  )
};

function RouteItem(route: IRoute) {
  const {
    path,
    redirect,
    component: Component,
    exact,
    meta,
  } = route;

  if (redirect && !Component) {
    const directProps = {
      from: path,
      to: redirect,
    }
    return (<Redirect {...directProps}/>)
  }

  function render(props: any) {
    const { title } = meta;
    const componentProps = {
      ...props,
    }
    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta content={title} />
        </Helmet>
        <Component {...componentProps} />
      </>
    )
  }

  const routeProps = {
    path,
    exact,
    render
  };
  return <Route {...routeProps} />
}

export default RenderRoutes;