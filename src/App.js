import React, { Component } from 'react';
import logo from './logo.svg';
import Link from './component/Link';
import CheckboxWithLabel from './component/CheckboxWithLabel';
import './App.css';
import {testFetch} from './utils/Api'
class App extends Component {
  componentWillMount () {
    // testFetch((res) => {
    //   console.log(res);
    // });
  }
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <div><Link page='www.google.com' children='这是一个超链接'/></div>
        <div><CheckboxWithLabel labelOn='选中' labelOff='未选中'/></div>
      </div>
    );
  }
}

export default App;
