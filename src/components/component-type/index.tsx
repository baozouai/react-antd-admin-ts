import React, { memo } from 'react';
import {  GET_COMPONENT_TYPE, IComponentProps } from './constants';

function Index(props: IComponentProps) {
  const { 
    propType = 'input',
    ...restProps
  } = props;
  const C = GET_COMPONENT_TYPE[propType];
  return <C {...restProps}/>;
};

export default memo(Index);