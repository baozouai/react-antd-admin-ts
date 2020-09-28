/*
 * @Description: 系统Layout
 * @Author: Moriaty
 * @Date: 2020-09-23 16:54:00
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-28 14:58:19
 */
import React from 'react';

import { Layout } from 'antd';
import RenderRoute from '@/components/render-route';

import styles from './index.less';
import { basicRouteList } from '@/routes';

function Index() {

  return (
    <Layout className={styles.wrapper}>
      <RenderRoute routes={basicRouteList} />
    </Layout>
  )
};

export default Index;

