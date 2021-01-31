// Wrapping component, with custom styles
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {

    return (
        <>
            <div 
                style = {{
                    transform : props.show ?  'translateY(0)' : 'translateY(-100vh)',
                    opacity : props.show ? '1' : '0'
                }}
                className = {classes.Modal}
            >
                {props.children}
            </div>
            <Backdrop show={props.show} clicked={props.click} />
        </>
    );

}

export default modal;