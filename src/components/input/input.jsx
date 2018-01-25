import React from 'react';
import './UserInput.css';

function Input(props) {
	return (
		<div className="UserInput">
			<input type="text" onChange={props.updateMarkdown} value={props.value} />
		</div>
		)
}

export default Input;