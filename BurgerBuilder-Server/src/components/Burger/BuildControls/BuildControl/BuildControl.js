// More classified Build control component
import classes from './BuildControl.module.css';

const buildControl = props => (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                onClick={props.deleted} 
                disabled={props.isDisabled} 
                className={classes.Less}>Less
            </button>
            <button 
                onClick={props.added} 
                className={classes.More}>More
            </button>
        </div>
);

export default buildControl;