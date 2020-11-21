import React, { Component } from 'react';

export default class userOutput extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<p>user: {this.props.username}</p>
				<p> text </p>
			</div>
		);
	}
}
