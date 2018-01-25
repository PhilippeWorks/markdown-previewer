import React from 'react';
import Auxiliary from './../Auxiliary/Auxiliary';

function Layout(props) {
	return (
		<Auxiliary>
			<header className="Header" >
				<h1> Markdown Previewer </h1>
			</header>
			{props.children}
		</Auxiliary>
	) 
}
export default Layout;