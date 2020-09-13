import React, { memo } from 'react';

import { ISpaceBetweenProps } from './constants';
import styles from './index.less';

function Index(props: ISpaceBetweenProps) {
  const {
    style,
    children
  } = props;
  const wrapperProps = {
    className: styles.wrapper,
    style
  };
  return (
    <div {...wrapperProps}>{children}</div>
  )
};

export default memo(Index);