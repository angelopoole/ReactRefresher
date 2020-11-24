// before react fragments we would wrap the lower components with an <Aux> tag in order to have these tags displayed next to eachother.

import classes from './Layout.module.css';

const layout = props => (
	<>
		<div>Toolbar, SideDrawer, BackDrop</div>
		<main className={classes.Content}>{props.children}</main>
	</>
);

export default layout;
