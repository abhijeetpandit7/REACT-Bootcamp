import React, {useState} from "react";
// This is for global css
// import './App.css';
// This css applies only in this scope
import classes from './App.module.css';
import Person from './Person/Person'
import Radium,{StyleRoot} from 'radium';
import styled from 'styled-components';

const App = (props) => {

  // Using React Hooks useState for state management in functional component
  const [persons, setPersons] = useState([
    {name : 'Ram', age : 20},
    {name : 'Shyam', age : 23},
    {name : 'Baburao', age : 25}
  ]);
  const [flag, setFlag] = useState(true);

  // Changes the persons state
  const changeName = (event, personIndex) => {
    const value = event.target.value;
    setPersons(prevValue => {
      const personsCopy = [...prevValue];
      personsCopy[personIndex].name = value;
      return personsCopy;
    });
  };

  // Removes person
  const deletePerson = (personIndex) => {
    setPersons(prevValue => {
      const personsCopy = [...prevValue];
      return personsCopy.filter((person,index) => personIndex!==index);
    });
  };

  // Create inline style for button & only :hover part using radium
  const customStyle = {
    border : '1px solid blue',
    font : 'inherit',
    padding : '8px',
    cursor : 'pointer',
    // Applying styles dynamically
    backgroundColor : flag ? 'green' : 'red',
    // Applying pseudo selectors (Radium)
    ':hover' : {
      backgroundColor : 'salmon',
      color : 'white'
    } 
  };


  // Part 3 CSS Module to change button colors
  // let buttonClass = [classes.button]
  let buttonClass = ''
  // Person cards
  let showPerson = null;
  if (flag){
    customStyle[':hover'] = {
      backgroundColor : 'lightgreen',
      color : 'white'
    } 
    showPerson = (
      persons.map((person,index) => <Person 
        key={index}
        name={person.name} 
        age={person.age} 
        change={(event) => changeName(event,index)}
        delete={() => deletePerson(index)} 
      />)
    );
    // Part 3 contd.
    // buttonClass.push(classes.Red)
    buttonClass = classes.Red
  }

  const togglePerson = () => setFlag(!flag);

  // Applying classes dynamically
  const class_list = [];
  if (persons.length<3){
    class_list.push(classes.red);
  }
  if (persons.length<2){
    class_list.push(classes.bold)
  }

  // StyleRoot used in Radium
  // return (
  //   <StyleRoot>
  //     <div className={classes.App}>
  //       <h1>Person Details</h1>
  //       <p className={class_list.join(' ')}>Person details are as follows:</p>
  //       <button style={customStyle} onClick={togglePerson}>Toggle Persons</button>
  //       {showPerson}         
  //     </div>
  //     </StyleRoot>
  // );

  // ------------------------ //

  // // Using styled-components rendering StyledButton
  // const StyledButton = styled.button`
  //   ${'' /* background-color : green; */}
  //   ${'' /* Dynamic styles in styled component */}
  //   background-color : ${props => props.myAlt ? 'green' : 'red'};
  //   border : 1px solid blue;
  //   font : inherit;
  //   padding : 8px;
  //   cursor : pointer;
  //   &:hover {
  //     ${'' /* background-color : salmon; */}
  //     background-color : ${props => props.myAlt ? 'lightgreen' : 'salmon'};
  //     color : white
  //   } 
  // `;

  // return(
  //   <div className={classes.App}>
  //     <h1>Person Details</h1>
  //     <p className={class_list.join(' ')}>Person details are as follows:</p>
  //     {/* Pass flag as prop to change button color */}
  //     <StyledButton myAlt={flag} onClick={togglePerson}>
  //       Toggle Persons
  //     </StyledButton>
  //     {showPerson}         
  //   </div>
  // );

  // ----------------------------------- //
  // Normal using CSS Modules
  return(
    <div className={classes.App}>
        <h1>Person Details</h1>
        <p className={class_list.join(' ')}>Person details are as follows:</p>
        {/* Change button -> {classes.button} */}
        {/* Now inorder to change button color we change {classes.button} and add a buttonClass array*/}
        {/* <button className={buttonClass.join(' ')} onClick={togglePerson}>Toggle Persons</button> */}
        <button className={buttonClass} onClick={togglePerson}>Toggle Persons</button>
        {showPerson}      
      </div>
  );

}

// export default Radium(App);
export default App;