// import React from 'react';
// you no longer have to import react to use jsx features in a react project. you only need to import it if you're using something that extends the React object (React.w/e)

const person = props => {
	let { name, age } = props;

	return (
		<h1>
			Hi! im a {name} and my age is {age}!
		</h1>
	);
};

export default person;
