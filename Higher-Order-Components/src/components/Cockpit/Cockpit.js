import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBtnRef = useRef()
    const authContext = useContext(AuthContext)

    console.log(authContext.authenticated);

    useEffect (() => {
        console.log('[Cockpit.js][array] 1st useEffect');
        toggleBtnRef.current.click()
        setTimeout(() => {
            alert('Persons data saved to cloud!')
        }, 1000);
        return (() => {
            console.log("[Cockpit.js][array] cleanup in 1st useEffect");
        })
    },[props.personsArrayLength]);

    useEffect (() => {
        console.log('[Cockpit.js][] 2nd useEffect');
        const timer = setTimeout(() => {
            alert('Cloud initialized!')
        }, 3000);
        return (() => {
            clearTimeout(timer);
            console.log("[Cockpit.js][] cleanup in 2nd useEffect");
        })
    },[]);

    useEffect (() => {
        console.log('[Cockpit.js] 3rd useEffect');
        return (() => {
            console.log("[Cockpit.js] cleanup in 3rd useEffect");
        })
    });

    const class_list = [];
    if (props.personsArrayLength<3){
        class_list.push(classes.red);
    }
    if (props.personsArrayLength<2){
        class_list.push(classes.bold);
    }

    let buttonClass = ''
    if (props.flag){
        buttonClass = classes.Red
    }

    return (
        <div className={classes.Cockpit}>
            <p className={class_list.join(' ')}>Person details are as follows:</p>
            <button 
                ref={toggleBtnRef}
                className={buttonClass} 
                onClick={props.toggle}
            >
                Toggle Persons
            </button>
            {/* Old Method */}
            {/* <AuthContext.Consumer>
                {context =>
                    <button onClick={context.login}>Log in</button>
                }
            </AuthContext.Consumer> */}
            {/* New Method */}
            <button onClick={authContext.login}>Log in</button>
            {/* Props chain passing through multiple layer */}
            {/* <button onClick={props.authenticate}>Log in</button> */}
        </div>
    );
}

export default React.memo(Cockpit);