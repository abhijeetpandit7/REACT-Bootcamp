import React from 'react';
import './User.css';

const userInput = (props) => {
    const customStyle = {
        padding : '12px',
        font : 'inherit',
        textAlign : 'center',
        border : '2px solid #ccc'
    }
    return (
        <div>
            <input style={customStyle} onChange={props.change}  type='text' name={props.user} value={props.username} />
        </div>
    )
}

export default userInput;