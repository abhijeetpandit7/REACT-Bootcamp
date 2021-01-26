import React, {useEffect} from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {

    useEffect (() => {
        console.log('[Cockpit.js][array] 1st useEffect');
        setTimeout(() => {
            alert('Persons data saved to cloud!')
        }, 1000);
        return (() => {
            console.log("[Cockpit.js][array] cleanup in 1st useEffect");
        })
    // },[props.personsArray]);
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
            <button className={buttonClass} onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
}

export default React.memo(Cockpit);