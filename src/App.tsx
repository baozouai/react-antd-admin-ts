import React from 'react';
import logo from './logo.svg';
import {Button}  from 'antd';
import styles from './App.less';

function App() {
  return (
    <div className="App">
      <header className={styles["App-header"]}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles["App-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">1111</Button>
        <Button type="primary">1111</Button>
      </header>
    </div>
  );
}

export default App;
