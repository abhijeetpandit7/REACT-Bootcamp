import Person from './Person/Person';

const persons = (props) => (
    props.personsArray.map((person,index) => 
        <Person 
            key={index}
            name={person.name} 
            age={person.age} 
            change={(event) => props.change(event,index)}
            delete={() => props.delete(index)} 
        />
    )    
);

export default persons;