import React, {useState} from "react";
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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


  let showPerson = null;
  if (flag){
    showPerson = <Persons 
      personsArray={persons} 
      change={changeName} 
      delete={deletePerson} />
  }

  const togglePerson = () => setFlag(!flag);

  return(
    <div className={classes.App}>
      <Cockpit personsArray={persons} flag={flag} toggle={togglePerson} />
      {showPerson}      
    </div>
  );

}

export default App;