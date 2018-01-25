import React, { Component } from 'react';
import Marked from 'marked';

import './App.css';

import Layout from './containers/Layout/Layout';
import Input from './components/Input/Input';
import Output from './components/Output/Output';
import initialMarkdown from './assets/initialMarkdown';

class App extends Component {
	state = {
		markdown: initialMarkdown,
	}

	markdownHandler = (event) => {

	}

	render() {
		return (
		  <Layout>
		    <Input 
		    	value={this.state.markdown}
		    	markdownUpdate={this.markdownHandler} />
		    <Output />
		  </Layout>
		);
	}
}

export default App;
