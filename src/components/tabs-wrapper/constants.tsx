import React from 'react';

import { SizeType } from '@/types';

// 每一个Tab属性
export interface ITabItem {
  tab: string
  key?: string
  component?: React.ReactElement
}

export interface ITabProps {
  size?: SizeType,
  activeKey: string
  onChange: (activeTab: string) => void
  centered?: boolean
  tabsConfig: ITabItem[]
}