import React, { memo } from 'react';
import { Form, Col } from 'antd';

import CompomentType from '@/components/component-type';
import { IFormItemProps, getRules } from './constants';
const { Item } = Form;

function Index(props: IFormItemProps) {
  const {
    formItemProps,
    componentProps,
  } = props;
  const { name, required } = formItemProps;
  const { propType, } = componentProps;
  const getRulesProps = {
    propType,
    name,
    required,
  }
  formItemProps.rules = getRules(getRulesProps);
  return (
    <Item {...formItemProps}>
      <Col>
        <CompomentType {...componentProps} />
      </Col>
    </Item>)
};

export default memo(Index);