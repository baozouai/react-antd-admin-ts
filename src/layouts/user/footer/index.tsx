import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';

const { Footer } = Layout;
const Index: React.FC = () => {
  return (<Footer className={styles.wrapper}>React TS Admin design by Moriaty(暴走)</Footer>)
};

export default Index;