import React from 'react';

function Input(props) {
	return (
		<div className="Input">
			<textarea onChange={props.updateMarkdown} defaultValue={props.inputArea} />
		</div>
	)
}

export default Input;