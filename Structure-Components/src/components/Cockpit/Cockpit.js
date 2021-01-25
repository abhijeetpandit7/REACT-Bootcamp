import classes from './Cockpit.module.css'

const cockpit = (props) => {

    const class_list = [];
    if (props.personsArray.length<3){
      class_list.push(classes.red);
    }
    if (props.personsArray.length<2){
      class_list.push(classes.bold);
    }

    let buttonClass = ''
    if (props.flag){
        buttonClass = classes.Red
    }

    return(
        <div className={classes.Cockpit}>
            <p className={class_list.join(' ')}>Person details are as follows:</p>
            <button className={buttonClass} onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;