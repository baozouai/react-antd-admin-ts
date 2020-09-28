import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { IRoute } from '@/routes';
interface IAuthProps extends RouteComponentProps {
  route: IRoute,
  children: React.ReactNode
}

function Index(props: IAuthProps) {
  const {
    route,
    children
  } = props;
  const {
    path,
    redirect,
  } = route;

  if (redirect) {
    const redrectProps = {
      from: path,
      to: redirect,
      push: true,
    }
    // return <Redirect {...redrectProps} push/>
  }
  return <>{children}</>;
};

export default Index;