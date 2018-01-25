import React from 'react';

function Input(props) {
	return (
		<div className="Input">
			<textarea 
				type="text" 
				onChange={props.updateMarkdown} 
				value={props.value} />
		</div>
		)
}

export default Input;