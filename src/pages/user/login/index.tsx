/*
 * @Description: 登录页面
 * @Author: Moriaty
 * @Date: 2020-09-11 23:36:45
 * @Last modified by: Moriaty
 * @LastEditTime: 2020-09-16 22:47:59
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Checkbox, Button, message } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import useUpdateEffect from '@/hooks/useUpdateEffect';

import TabsWrapper from '@/components/tabs-wrapper';
import FormList from '@/components/form-list';
import SpaceBetween from '@/components/space-between';

import { tabsConfig, accountFormConfig, mobileLoginFormConfig, ILoginParams } from './constants';
import { IFormItemProps } from '@/components/form-item/constants';

import {
  accountLogin
} from './service';
import styles from './index.less';

function Index() {

  const [activeKey, setactiveKey] = useState<string>('account');
  const [formItemsConfig, setFormItemsConfig] = useState<IFormItemProps[]>(accountFormConfig);
  const [form] = Form.useForm();

  useUpdateEffect(() => {
    changeFormItemConfig();
  }, [activeKey])

  /**
   * @description: 切换表单类型
   */
  function changeFormItemConfig() {
    const newFormConfig = activeKey === 'account' ? accountFormConfig : mobileLoginFormConfig;
    setFormItemsConfig(newFormConfig);
  }

  /**
   * @description: 表单验证成功时提交
   * @param {type} 
   */
  function onFinish(values: ILoginParams) {
    accountLogin(values).then(res => {
      console.log(res);
    })
  }
  // tabProp start
  const tabsProps = {
    activeKey,
    centered: true,
    onChange: setactiveKey,
    tabsConfig
  };
  // tabProp end
  const formProps = {
    form,
    onFinish,
  };

  // 登录按钮props start
  const buttonProps = {
    type: 'primary' as 'primary',
    htmlType: 'submit' as 'submit',
    className: styles.loginBtn,
  }
  // 登录按钮props end
  return (
    <main className={styles.wrapper}>
      <TabsWrapper {...tabsProps} />
      <Form {...formProps}>
        <FormList formItemsConfig={formItemsConfig} />
        <SpaceBetween>
          <>
            <Checkbox>自动登录</Checkbox>
            <Link to='/user/recover-password'>忘记密码</Link>
          </>
        </SpaceBetween>
        <Button {...buttonProps}>登录</Button>
        <SpaceBetween>
          <>
            <span className={styles.otherLoginWay}>
              <label>其他登录方式</label>
              <GithubOutlined onClick={() => message.warning('暂未实现')} />
            </span>
            <Link to='/user/register'>注册账号</Link>
          </>
        </SpaceBetween>
      </Form>
    </main>
  )
};

export default Index;