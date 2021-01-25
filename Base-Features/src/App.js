import React, {useState} from "react";
import './App.css';
import Person from './Person/Person'

// class App extends Component {
//   state = {
//     persons : [
//       {name : 'Abhi', age : 20},
//       {name : 'Jeet', age : 23},
//       {name : 'Prem', age : 25}
//     ]
//   }
//   switchNameHandler = () => {
//     this.setState({
//       persons : [
//         {name : 'Abhijeet', age : 25},
//         {name : 'Jeet', age : 23},
//         {name : 'Prem', age : 20}
//       ]
//     })
//   }
//   render() {
//     return (
//       <div className='App'>
//         <h1>Hello World</h1>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age= {this.state.persons[1].age} >My hobbies include programming ;D</Person>
//         <Person name={this.state.persons[2].name} age= {this.state.persons[2].age} />
//       </div>
//     );
//     // return(
//     //   React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello World'))
//     // );
//   }
// }

const App = (props) => {
  // Using React Hooks useState for state management in functional component
  const [state, setState] = useState({
    persons : [
      {name : 'Abhi', age : 20},
      {name : 'Jeet', age : 23}
    ],
    other : 'value'
  })
  // Changes the state value using parameters received from bind() or () => or event
  const switchNameHandler = (newName) => {
    setState({
          persons : [
            {name : newName, age : 25},
            {name : 'Pandit', age : 30}
          ]
      }
    );
  }
  // Handles the input onChange in Person.js
  const handleChange = (event) => {
    switchNameHandler(event.target.value)
  }
  // Create inline css
  const customStyle = {
    backgroundColor : 'white',
    border : '1px solid blue',
    font : 'inherit',
    padding : '8px',
    cursor : 'pointer'
  }
  return (
    <div className='App'>
      <h1>Hello World</h1>
      {/* Using bind() to change state value */}
      {/* <button onClick={switchNameHandler.bind(this,'Button')}>Switch Name</button> */}
      {/* Using anonymous function to change state value */}
      <button style={customStyle} onClick={() => switchNameHandler('Button')}>Switch Name</button>
      {/* Using props to pass attributes and methods to child component */}
      <Person name={state.persons[0].name} age={state.persons[0].age} click={switchNameHandler.bind(this,'Prem')} change={handleChange} />
      {/* Use props.children here */}
      <Person name={state.persons[1].name} age={state.persons[1].age}>My hobbies include programming ;D</Person>
    </div>
  );
}

export default App;