const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and {props.age} years old.</p>
            <input 
                type='text' 
                onChange={props.change} 
                value={props.name} 
                // Name need not be set to index value anymore
                // name={props.index} 
            />
        </div>
    );
}

export default person;