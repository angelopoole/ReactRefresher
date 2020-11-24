// before react fragments we would wrap the lower components with an <Aux> tag in order to have these tags displayed next to eachother.

const layout = props => (
	<>
		<div>Toolbar, SideDrawer, BackDrop</div>
		<main>{props.children}</main>
	</>
);

export default layout;
