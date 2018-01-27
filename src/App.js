import React, { Component } from 'react';
import marked from 'marked';

import './App.css';
import initialMarkdown from './assets/initialMarkdown';

import Layout from './containers/Layout/Layout';
import Input from './components/Input/Input';
import Output from './components/Output/Output';

class App extends Component {
	state = {
		markdownInput: initialMarkdown
	}

	markdownHandler = (event) => {
		this.setState({markdownInput: event.target.value});
	}

	render() {
		let markdownResult = marked(this.state.markdownInput, {sanitize: true, breaks: true} );

		return (
		  <Layout>
		    <Input 
		    	inputArea={this.state.markdownInput}
		    	updateMarkdown={this.markdownHandler} />
		    <Output markdown={markdownResult} />
		  </Layout>
		);
	}
}

export default App;
