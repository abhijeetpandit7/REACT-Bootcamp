// import './Person.css';
import classes from './Person.module.css';

const person = (props) => {

    // Producing error purposely
    const rnd = Math.random()
    if ( rnd > 0.7 ) {
        throw new Error('Something went wrong');
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.delete}>I'm {props.name} and {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name} /> 
        </div>
    )
};

export default person;