/*
 * @Description: form-item配置参数
 * @Author: Moriaty
 * @Date: 2020-09-12 16:12:25
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-13 11:26:53
 */
import { IComponentProps } from '@/components/component-type/constants';
import { ALL_COMPONENT_TYPE } from '@/types';

interface IFormItem {
  name: string
  label?: string
  required?: boolean
  rules?: any[]
  initialValue?: any
  style?: object
}

export interface IFormItemProps {
  formItemProps: IFormItem
  componentProps: IComponentProps
}
interface IGetRulesProps {
  propType: ALL_COMPONENT_TYPE
  name: string
  required?: boolean
}

export const ALL_Rules: any = {
  mobile: { pattern: /^1[3456789]\d{9}$/, message: '手机号码必须为11位整数' },
}

export const getRules = (props: IGetRulesProps) => {
  const {
    propType = 'input',
    name,
    required,
  } = props;
  const rules = [];
  if (required) {
    rules.push([{ required, message: `${name}不能为空`, }]);
  }
  ALL_Rules[propType] && rules.push(ALL_Rules[propType]);
  return rules;
}