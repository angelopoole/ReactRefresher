// import React from 'react';
// you no longer have to import react to use jsx features in a react project. you only need to import it if you're using something that extends the React object (React.w/e)

const person = props => {
	let { name, age, id, logObject } = props;
	// console.log(id);
	return (
		// <div onClick={e => logObject(props)}>
		<h1>
			Hi! im a {name} and my age is {age}! my index is {id}
		</h1>
		// </div>
	);
};

export default person;
