/*
 * @Description: Tab标签页
 * @Author: Moriaty
 * @Date: 2020-09-12 14:14:31
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-13 18:28:26
 */
import React from 'react';
import { Tabs } from 'antd';

import { ITabProps, ITabItem } from './constants';

const { TabPane } = Tabs;

function Index(props: ITabProps) {
  const {
    size,
    activeKey,
    centered,
    onChange,
    tabsConfig,
  } = props;

  const tabProps = {
    size,
    activeKey,
    centered,
    onChange
  };
  return (
    <Tabs {...tabProps}>
      {tabsConfig.map((tabItem: ITabItem) => <TabItem {...tabItem} key={tabItem.key ?? tabItem.tab} />)}
    </Tabs>
  )
};
/**
 * @description: 每一个标签页
 * @param {ITabItem} props
 */
function TabItem(props: ITabItem) {
  const {
    // 标签名
    tab,
    key,
    component,
  } = props;
  const tabProps = { tab, key };
  return (<TabPane {...tabProps}>{component}</TabPane>)
}
export default Index;