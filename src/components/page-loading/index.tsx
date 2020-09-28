/*
 * @Description: SpinLoading
 * @Author: Moriaty
 * @Date: 2020-09-28 15:11:35
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-28 15:34:25
 */
import React from 'react';
import { Spin } from 'antd';

import { SpinSizeType } from '@/types';

interface IPageLoadingProps {
  size?: SpinSizeType
  spinning?: boolean
  children?: React.ReactNode,
}
const loadingStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}
function Index(props: IPageLoadingProps) {
  const {
    size = 'default',
    spinning,
    children
  } = props;
  const spinProps = {
    size: size,
    spinning,
    style: loadingStyle,
  }
  return (
    <Spin {...spinProps}>{children}</Spin>
  )
};

export default Index;