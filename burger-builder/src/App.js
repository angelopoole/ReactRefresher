import React, { Component } from 'react';

//components
import Layout from './components/Layout/Layout';

// containers
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

export default class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<BurgerBuilder />
					{console.log({ hit: 'hit' })}
				</Layout>
			</div>
		);
	}
}
