/*
 * @Description: 登录layout
 * @Author: Moriaty
 * @Date: 2020-09-10 23:06:02
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-12 13:43:14
 */
import React from 'react';
import {Layout} from 'antd';
import RenderRoute from '@/components/render-route';

import Header from './header';
import Footer from './footer';

import { userRouteList } from '@/routes';
import styles from './index.less';

function Index() {

  return (
    <Layout className={styles.wrapper}>
      <Header/>
      <RenderRoute routes={userRouteList}/>
      <Footer/>
    </Layout>
  )
};

export default Index;