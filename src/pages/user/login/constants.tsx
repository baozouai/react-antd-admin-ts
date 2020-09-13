import React from 'react';
import { UserOutlined, LockOutlined,MobileOutlined  } from '@ant-design/icons';

import { IFormItemProps } from '@/components/form-item/constants';
import { ITabItem } from '@/components/tabs-wrapper/constants';

export const tabsConfig: ITabItem[] = [
  {
    tab: '账号密码登录',
    key: 'account',
  },
  {
    tab: '手机号登录',
    key: 'mobile',
  }
];

export const accountFormConfig: IFormItemProps[] = [
  {
    formItemProps: {
      name: 'account',
    },
    componentProps: {
      placeholder: '请输入6-18位账号',
      allowClear: true,
      prefix: <UserOutlined />,
      size: 'large',
    }
  },
  {
    formItemProps: {
      name: 'password',
    },
    componentProps: {
      propType: 'password',
      placeholder: '请输入6-18位密码',
      allowClear: true,
      prefix: <LockOutlined/>,
      size: 'large',
    }
  }
];
export const mobileLoginFormConfig: IFormItemProps[] = [
  {
    formItemProps: {
      name: 'mobile',
    },
    componentProps: {
      propType: 'mobile',
      placeholder: '请输入11位手机号',
      allowClear: true,
      prefix: <MobileOutlined />,
      size: 'large',
    }
  },
  {
    formItemProps: {
      name: 'password',
    },
    componentProps: {
      propType: 'password',
      placeholder: '请输入6-18位密码',
      allowClear: true,
      prefix: <LockOutlined/>,
      size: 'large',
    }
  }
];

export interface ILoginParams {
  account?: string
  mobile?: string
  password: string
}