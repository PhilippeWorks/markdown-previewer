import React from 'react';

function Output(props) {
	return <span className="Output" dangerouslySetInnerHTML={{__html: props.markdown}} />
}

export default Output;
