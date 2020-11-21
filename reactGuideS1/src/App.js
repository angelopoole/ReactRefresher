import './App.css';
import Person from './Person/Person';
import React, { useState, useEffect } from 'react';

function App() {
	let [counter, setCounter] = useState(0);

	let [people, setPeople] = useState({
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

	const counterCountUp = () => {
		counter = setInterval(() => {
			setCounter(counter => counter + 1);
		}, 1000);
	};

	useEffect(() => {
		counterCountUp();
	}, []);

	// console.log(people.persons.forEach(a => console.log(a.name, a.age)));

	return (
		<div className='App'>
			<h1>Hi im a React app</h1>
			<h1>page timer -> {counter}</h1>
			<p> -> {listAllPeople(people)}</p>
		</div>
	);
}

export default App;
