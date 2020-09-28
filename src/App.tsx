/*
 * @Description: 根路由页面
 * @Author: Moriaty
 * @Date: 2020-09-09 20:54:08
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-28 15:35:02
 */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';

import PageLoading from '@/components/page-loading';
import RenderRoute from '@/components/render-route';

import { layoutRouteList } from '@/routes';

import Config from '@/config';


function App() {

  return (
    <Suspense fallback={<PageLoading />}>
      <Router basename={Config.BASE_NAME}>
        <RenderRoute routes={layoutRouteList} />
      </Router>
    </Suspense>

  );
}

export default App;

