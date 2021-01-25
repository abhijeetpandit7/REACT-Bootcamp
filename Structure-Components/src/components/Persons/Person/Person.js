import classes from './Person.module.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.delete}>I'm {props.name} and {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name} /> 
        </div>
    )
};

export default person;