/*
 * @Description: 表单列表
 * @Author: Moriaty
 * @Date: 2020-09-13 17:44:24
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-13 17:51:04
 */
import React, { memo } from 'react';
import FormItem from '@/components/form-item';
import { IFormItemProps } from '@/components/form-item/constants';
import { IFormItemListProps } from './constants';

function Index(props: IFormItemListProps) {
  const {
    formItemsConfig
  } = props;
  return (
    <>
      {
        formItemsConfig.map((formItemConfig: IFormItemProps) => <FormItem {...formItemConfig} key={formItemConfig.formItemProps.name} />)
      }
    </>
  )
};

export default memo(Index);