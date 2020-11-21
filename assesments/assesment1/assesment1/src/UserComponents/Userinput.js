import React, { Component } from 'react';
import './user.css';

export default class userinput extends Component {
	render() {
		return (
			<div>
				<input
					type='text'
					name='username'
					onChange={e => this.props.usernameChangeHandler(e)}
				/>
			</div>
		);
	}
}
