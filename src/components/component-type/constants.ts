/*
 * @Description: 
 * @Author: Moriaty
 * @Date: 2020-09-12 16:41:19
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-13 11:29:11
 */
import React from 'react';
import { Input, InputNumber} from 'antd';

import { SizeType, ALL_COMPONENT_TYPE} from '@/types';

const { Password } = Input;
// export enum ComponentType {
//   Input,
//   Password,
//   Mobile,
// }


export interface IComponentProps {
  propType?: ALL_COMPONENT_TYPE
  placeholder?: string
  allowClear?: boolean
  prefix?: string | React.ReactElement | any
  size?: SizeType
}

export const GET_COMPONENT_TYPE = {
  input: Input,
  password: Password,
  mobile: Input,
}