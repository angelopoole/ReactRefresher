import React from 'react';

const ValidationComponent = props => {
	// let response = null;
	console.log(props.inputLength);
	if (props.inputLength < 5) {
		return <div> Too short </div>;
	} else {
		return <div> Long enough </div>;
	}
};

export default ValidationComponent;
