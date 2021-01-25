import {useState} from 'react'
import './App.css';
import Person from './Person/Person'

const  App = () => {
  const [userState, setUserState] = useState([
    {id : 'abc123', name : 'Abhi', age : 20},
    {id : 'xyz789', name : 'Jeet', age : 25}
  ])
  // Set flag state for conditional rendering
  const [flag, setFlag] = useState(false)

  // onClick toggle flag state
  const toggleUserHandler = () => {
    setFlag(prevValue => {
      return !prevValue
    })
  }

  // delete user handler, removes user wrt to index received
  const deleteUserHandler = (userIndex) => {
    // const prevValue = userState.splice(0,1)
    setUserState(prevValue => {
      return prevValue.filter((user,index) => {
        return index !== userIndex;
      })
    })
  }

  // Change name value onChange input
  // 1.New update we are receiving userIndex also as another parameter
  const nameChangeHandler1 = (event, userIndex) => {
    // name is index value of userState element to be changed & value is newName to be set
    // const {name,value} = event.target
    // New update, we only require value from event.target
    const value = event.target.value
    setUserState(prevValue => {
      // prevValue[name].name = value;
      // New update we use userIndex instead of name
      // Recommended to make an object copy first
      prevValue[userIndex].name = value;
      return [...prevValue];
    })
  }
  // 2.Receiving userId as parameter
  const nameChangeHandler2 = (event, userId) => {
    const userIndex = userState.findIndex(user => {
      return user.id === userId;
    })
    const value = event.target.value
    setUserState(prevValue => {
      prevValue[userIndex].name = value;
      return [...prevValue];
    })
  }

  // set user value if flag is true, or null is passed
  let user = null
  if(flag) {
    user = (
      <div>
        <Person name={userState[0].name} age={userState[0].age} />
        <Person name={userState[1].name} age={userState[1].age} />
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={toggleUserHandler}>Toggle</button>
      {/* Method 1 using tenary operator */}
      {
        flag && 
        <div>
          <Person name={userState[0].name} age={userState[0].age} />
          <Person name={userState[1].name} age={userState[1].age} />
        </div>
      }
      {/* Another way for conditional rendering*/}
      {user}
      {/* Render userState array with map() */}
      {userState.map((user,index) => <Person 
        key={user.id} 
        name={user.name} 
        age={user.age} 
        click={() => deleteUserHandler(index)} 
        // 1.Here we pass index as parameter
        // change={(event) => nameChangeHandler1(event,index)}
        // 2.If we pass id then need to use findIndex() to get index of that particular id
        change={(event) => nameChangeHandler2(event,user.id)}
        // After passing index as argument in nameChangeHandler need not pass index here explicitly
        // index={index}
      />)}
    </div>
  );
}

export default App;