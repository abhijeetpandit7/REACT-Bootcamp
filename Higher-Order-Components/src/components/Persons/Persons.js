import {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message : 'Snapshot!'}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){

        console.log('[Persons.js] rendering...');

        return (
            this.props.personsArray.map((person,index) => 
                <Person 
                    key={index}
                    name={person.name} 
                    age={person.age} 
                    change={(event) => this.props.change(event,index)}
                    delete={() => this.props.delete(index)} 
                    isAuth={this.props.isAuthenticated}
                />
            )
        );
    }
}

export default Persons;