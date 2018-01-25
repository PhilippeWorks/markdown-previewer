import React, { Component } from 'react';

import './App.css';
import Layout from './containers/Layout/Layout';
import Input from './components/Input/Input';
import Output from './components/Output/Output';

class App extends Component {
	state = {
		markdown: "",
	}

	markdownHandler = (event) => {
		
	}

	render() {
		return (
		  <Layout>
		    <Input 
		    	value={this.state.value}
		    	markdownUpdate={this.markdownHandler} />
		    <Output />
		  </Layout>
		);
	}
}

export default App;
