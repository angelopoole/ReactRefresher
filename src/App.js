import './App.css';
import Person from './Person/Person';
import React, { useState } from 'react';

function App() {
	const [people, setPeople] = useState({
		persons: [
			{ name: 'angelo', age: 21 },
			{ name: 'victoria', age: 20 },
			{ name: 'booboo', age: 200 },
		],
	});

	const listAllPeople = people => {
		// You have to return the map function at the top level aswell. not just the output of the map function.

		return people.persons.map(person => (
			<Person name={person.name} age={person.age} />
		));
	};

	// console.log(people.persons.forEach(a => console.log(a.name, a.age)));

	return (
		<div className='App'>
			<h1>Hi im a React app</h1>
			<p> -> {listAllPeople(people)}</p>
		</div>
	);
}

export default App;
