import {useState} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';

const App = () => {
  // Input text-field
  const [text, setText] = useState('')

  // onChange in input
  const handleChange = (event) => {
    const value = event.target.value;
    setText(value);
  }

  // onClick delete character of text
  const handleClick = (index) => {
    setText(prevValue => {
      // Make copy of split text => letters
      let textCopy = [...prevValue]
      // Filter out the clicked letter wrt it's index
      textCopy = textCopy.filter((ele,eleIndex) => eleIndex !== index );
      // Return the string after joining array back
      return textCopy.join('')
    }) 
  }

  // Inline CSS
  const customStyle = {
    display : 'inline-block',
    margin : '16px',
    padding : '16px',
    border : '1px solid #eee',
    boxShadow : '0 2px 2px #ccc',
    textAlign : 'center'
  }

  // Receives each letter of text and outputs them
  const CharComponents = (props) => {
    return (
      <p onClick={props.click} style={customStyle}>{props.character}</p>
    );
  }

  return (
    <div className="App">
      <input type='text' onChange={handleChange} value={text} />
      <ValidationComponent text={text} />
      {text.split('').map((ele,index) => <CharComponents 
        key={index} 
        character={ele} 
        click={() => handleClick(index)}   
      />)}
    </div>
  );
}

export default App;