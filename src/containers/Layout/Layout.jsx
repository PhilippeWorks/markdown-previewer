import React from 'react';
import Auxiliary from './../Auxiliary/Auxiliary';

function Layout(props) {
	return (
		<Auxiliary>
			<header className="LayoutStyles" >
				<h1> Markdown Previewer </h1>
			</header>
			<div className="Jumbotron" >
				{props.children}
			</div>
			<footer className="LayoutStyles" >
				<p> Markdown is a way to style text on the web. You control the display of the document; formatting words as
bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly,
Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *. </p>
			</footer>
		</Auxiliary>
	) 
}
export default Layout;