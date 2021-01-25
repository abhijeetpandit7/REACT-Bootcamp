// import './Person.css';
import classes from './Person.module.css';
import Radium from 'radium';
import styled from 'styled-components'

const person = (props) => {

    // // Applying media queries (Radium)
    // const style = {
    //     '@media (min-width:500px)' : {
    //         width : '450px'
    //     }
    // }
    // return (
    //     <div style={style} className='Person'>
    //         <p onClick={props.delete}>I'm {props.name} and {props.age} years old.</p>
    //         <p>{props.children}</p>
    //         <input type='text' onChange={props.change} value={props.name} />
    //     </div>
    // )
    // export default Radium(person);

    // -------------------------- //

    // // Applying styles from Person.css & style using styled-components
    // const StyledDiv = styled.div`
    //     width: 40%;
    //     margin: 16px auto;
    //     border: 1px solid #eee;
    //     box-shadow: 0 2px 3px #ccc;
    //     padding: 16px;
    //     text-align: center;
    //     @media (min-width: 500px) {
    //         width : 450px;
    //     }
    // `;
    // return (
    //     <StyledDiv>
    //          <p onClick={props.delete}>I'm {props.name} and {props.age} years old.</p>
    //          <p>{props.children}</p>
    //          <input type='text' onChange={props.change} value={props.name} />
    //     </StyledDiv>
    // );

    // ---------------------------- //
    // Using CSS Modules
    return (
        // <div className='Person'>
        <div className={classes.Person}>
            <p onClick={props.delete}>I'm {props.name} and {props.age} years old.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name} /> 
        </div>
    )
};

export default person;