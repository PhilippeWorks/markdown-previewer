import React from 'react';

function Output(props) {
	return <div className="Output" dangerouslySetInnerHTML={{__html: props.markdown}} />
}

export default Output;
