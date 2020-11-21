import './App.css';
import Person from './Person/Person';
import React, { useState, useEffect } from 'react';
import person from './Person/Person';

function App() {
	let [counter, setCounter] = useState(0);

	const [showPerson, setShowPerson] = useState(false);

	let [people, setPeople] = useState({
		persons: [
			{ id: Math.floor(Math.random() * 100) + 1, name: 'angelo', age: 21 },
			{ id: Math.floor(Math.random() * 100) + 1, name: 'victoria', age: 20 },
			{ id: Math.floor(Math.random() * 100) + 1, name: 'booboo', age: 200 },
		],
	});

	// console.log(people);

	const listAllPeople = people => {
		// You have to return the map function at the top level aswell. not just the output of the map function.
		return people.persons.map((person, index) => (
			<Person
				key={person.id}
				id={person.id}
				name={person.name}
				age={person.age}
				// logObject={loggerHandler}
			/>
		));
	};

	// const loggerHandler = e => {
	// 	let { name, age, id } = e;
	// 	let found = people.persons.filter(el => el.id == id);

	// 	setPeople(el => console.log(el));
	// 	// let removeAge = age => {
	// 	// 	return setPeople(...people, (age = 0));
	// 	// };
	// 	// return removeAge;
	// };

	const counterCountUp = () => {
		counter = setInterval(() => {
			setCounter(counter => counter + 1);
		}, 1000);
	};

	useEffect(() => {
		counterCountUp();
	}, []);

	let togglePersonsHandler = e => {
		setShowPerson(val => (val = !val));
	};

	return (
		<div className='App'>
			<h1>Hi im a React app</h1>
			<h1>page timer: {counter}</h1>
			<button onClick={togglePersonsHandler}> toggle people</button>
			{showPerson ? <div>{listAllPeople(people)}</div> : null}
		</div>
	);
}

export default App;
