import React, { Component } from 'react';

import './App.css';
import Layout from './containers/layout/layout';
import Input from './components/input/input';
import Output from './components/output/output';

class App extends Component {
  render() {
    return (
      <Layout>
        <Input />
        <Output />
      </Layout>
    );
  }
}

export default App;
