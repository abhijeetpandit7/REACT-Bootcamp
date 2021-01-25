import React,{useState} from "react";
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput'

const App = () => {
  const [name, setName] = useState({
    user1 : 'Warren Steele', 
    user2 : 'Sienna Padilla'
  })
  const text = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis. Elementum nisi quis eleifend quam. Viverra maecenas accumsan lacus vel facilisis. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Odio facilisis mauris sit amet massa vitae. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Augue lacus viverra vitae congue eu consequat ac felis. Felis imperdiet proin fermentum leo vel. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.",
    "Consectetur purus ut faucibus pulvinar elementum integer. Congue quisque egestas diam in arcu cursus euismod quis viverra. Pulvinar neque laoreet suspendisse interdum consectetur. Ipsum nunc aliquet bibendum enim facilisis gravida. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Aenean euismod elementum nisi quis eleifend quam. Nisl pretium fusce id velit ut tortor pretium. Ipsum dolor sit amet consectetur. Sit amet cursus sit amet dictum. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Sit amet purus gravida quis blandit turpis. Vulputate dignissim suspendisse in est ante in nibh mauris cursus."
  ]
  const handleChange = (event) => {
    const {name, value} = event.target
    setName(prevValue => {
      return ({
        ...prevValue,
        [name] : value
      })
    })
  }
  return (
    <div className="App">
      <UserOutput content={text[0]} username={name.user1} />
      <UserInput change={handleChange} username={name.user1} user={'user1'}/>
      <UserOutput content={text[1]} username={name.user2} />
      <UserInput change={handleChange} username={name.user2} user={'user2'}/>
    </div>
  );
}

export default App;