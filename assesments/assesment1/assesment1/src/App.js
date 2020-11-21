import './App.css';
import { useState } from 'react';
import Useroutput from './UserComponents/UserOutput';
import Userinput from './UserComponents/Userinput';

function App() {
	const [user, setUser] = useState({ username: 'Jangel' });

	let usernameChangeHandler = e => {
		setUser({ [e.target.name]: e.target.value });
	};

	return (
		<div className='App'>
			<Userinput usernameChangeHandler={usernameChangeHandler} />
			<Useroutput username={user.username}></Useroutput>
		</div>
	);
}

export default App;
