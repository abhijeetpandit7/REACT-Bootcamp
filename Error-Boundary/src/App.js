import React, {useState} from "react";
import classes from './App.module.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

const App = () => {

  const [persons, setPersons] = useState([
    {name : 'Ram', age : 20},
    {name : 'Shyam', age : 23},
    {name : 'Baburao', age : 25}
  ]);
  const [flag, setFlag] = useState(true);

  const changeName = (event, personIndex) => {
    const value = event.target.value;
    setPersons(prevValue => {
      const personsCopy = [...prevValue];
      personsCopy[personIndex].name = value;
      return personsCopy;
    });
  };

  const deletePerson = (personIndex) => {
    setPersons(prevValue => {
      const personsCopy = [...prevValue];
      return personsCopy.filter((person,index) => personIndex!==index);
    });
  };

  let buttonClass = ''
  let showPerson = null;
  if (flag){
    showPerson = (
      persons.map((person,index) => 
        <ErrorBoundary key={index}>
          <Person 
            // key={index}
            name={person.name} 
            age={person.age} 
            change={(event) => changeName(event,index)}
            delete={() => deletePerson(index)} 
          />
        </ErrorBoundary>
      )
    );
    buttonClass = classes.Red
  }

  const togglePerson = () => setFlag(!flag);

  const class_list = [];
  if (persons.length<3){
    class_list.push(classes.red);
  }
  if (persons.length<2){
    class_list.push(classes.bold)
  }

  return(
    <div className={classes.App}>
        <h1>Person Details</h1>
        <p className={class_list.join(' ')}>Person details are as follows:</p>
        <button className={buttonClass} onClick={togglePerson}>Toggle Persons</button>
        {showPerson}      
      </div>
  );

}

export default App;