import React, {Component} from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/WithClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    static contextType = AuthContext;

    // Option 4
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // Option 1
        // document.querySelector('input').focus();
        // Option 3
        // this.inputElement.focus();
        // Option 4
        this.inputElementRef.current.focus()
        // Context now accessble here
        console.log(this.context.authenticated)
    }
    
    render(){
        
        console.log('[Person.js] rendering...');

        // Method 1: Using Auxiliary. But no class applied here
        // return (
        //     <Auxiliary>
        //         <p onClick={this.props.delete}>I'm {this.props.name} and {this.props.age} years old.</p>
        //         <p>{this.props.children}</p>
        //         <input type='text' onChange={this.props.change} value={this.props.name} /> 
        //     </Auxiliary>    
        // );

        // Method 2: Using Fragment. But no class applied here. Can add a div ofcourse
        return (
            <>
                {/* Old method */}
                {/* <AuthContext.Consumer>
                    {context => 
                        <p>{context.authenticated ? 'Authenticated' : 'Please log-in' }</p>}
                </AuthContext.Consumer> */}
                {/* New Method */}
                {<p>{this.context.authenticated ? 'Authenticated' : 'Please log-in' }</p>}
                {/* Props chain passing through multiple layer */}
                {/* <p>{this.props.isAuth ? 'Authenticated' : 'Please log-in' }</p>} */}
                <p onClick={this.props.delete}>I'm {this.props.name} and {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input 
                    // Option 2
                    // ref={(inputEl) => inputEl.focus() }
                    // Option 3
                    // ref={(inputEl) => this.inputElement = inputEl }
                    // Option 4
                    ref={this.inputElementRef}
                    type='text' 
                    onChange={this.props.change} 
                    value={this.props.name}  
                /> 
            </>
        );

        // Method 3: Using withClass JS function as HOC, solves class
        // Any methods return works, only changes at bottom export
    }
}

Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    delete : PropTypes.func
}

// export default Person;
export default withClass(Person, classes.Person);