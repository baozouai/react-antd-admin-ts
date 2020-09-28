/*
 * @Description: 系统介绍
 * @Author: Moriaty
 * @Date: 2020-09-23 16:56:56
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-28 15:01:36
 */
import React from 'react';
import { useLocation } from 'react-router-dom';

function Index() {
  const location = useLocation();

  return <div>{location.pathname}</div>
};

export default Index;