import classes from './BuildControl.module.css';

const buildControl = props => {
	return (
		<div className={classes.BuildControl}>
			<div className={classes.Label}>{props.label}</div>
			<button className={classes.Less}>less</button>
			<button className={classes.More}>more</button>
		</div>
	);
};

export default buildControl;
