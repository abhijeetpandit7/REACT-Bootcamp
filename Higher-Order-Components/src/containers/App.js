import {Component} from "react";
import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/WithClass'
import AuthContext from '../context/auth-context'

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    static getDerivedStateFromProps(props,state) {
        console.log('[App.js] getDerivedStateFromProps',props);
        return state;
    }

    componentDidMount(){
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[App.js] getSnapshotBeforeUpdate');
        return {message : 'App Snapshot!'}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[App.js] componentDidUpdate');
        console.log(snapshot);
    }

    state = {
        persons : [
            {name : 'Ram', age : 20},
            {name : 'Shyam', age : 23},
            {name : 'Baburao', age : 25}
        ],
        showPerson : true,
        showCockpit : true,
        authenticated : false
    }

    changeName = (event, personIndex) => {
        const value = event.target.value;
        const personsCopy = [...this.state.persons];
        personsCopy[personIndex].name = value
        this.setState({persons : personsCopy});
    };

    deletePerson = (personIndex) => {
        const personsCopy = [...this.state.persons];
        personsCopy.splice(personIndex, 1)
        this.setState({persons : personsCopy})
    };

    togglePerson = () => {
        const showPersonCopy = this.state.showPerson
        this.setState({showPerson : !showPersonCopy})
    }
    
    loginHandler = () => {
        this.setState({authenticated : true});
    }

    render(){

        console.log('[App.js] render');

        let showPerson = null;
        if (this.state.showPerson){
            showPerson = <Persons 
                personsArray={this.state.persons} 
                change={this.changeName} 
                delete={this.deletePerson}
                isAuthenticated={this.state.authenticated}  
            />
        }

        // Using WithClass as a functional component
        // return(
        //     <WithClass classes={classes.App}>
        //         <button onClick={() => {
        //             this.setState({showCockpit : !this.state.showCockpit})
        //         }}>
        //             Remove Cockpit
        //         </button>
        //         {
        //             this.state.showCockpit && 
        //             <Cockpit 
        //                 personsArrayLength={this.state.persons.length} 
        //                 flag={this.state.showPerson} 
        //                 toggle={this.togglePerson}
        //             />
        //         }
        //         {showPerson}
        //     </WithClass>
        //   );

        // Using with class as JS function
        return(
            <>
                <button onClick={() => {
                    this.setState({showCockpit : !this.state.showCockpit})
                }}>
                    Remove Cockpit
                </button>
                <AuthContext.Provider value={{
                    authenticated : this.state.authenticated,
                    login : this.loginHandler
                }}>
                    {
                        this.state.showCockpit && 
                        <Cockpit 
                            personsArrayLength={this.state.persons.length} 
                            flag={this.state.showPerson} 
                            toggle={this.togglePerson}
                            authenticate={this.loginHandler}
                        />
                    }
                    {showPerson}
                </AuthContext.Provider>
            </>
          );

    }
}

export default withClass(App,classes.App);