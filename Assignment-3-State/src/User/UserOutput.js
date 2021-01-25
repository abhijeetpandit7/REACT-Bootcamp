import React from 'react';
import './User.css';

const userOutput = (props) => {
    return (
        <div>
            <h3>{props.username}</h3>
            <p className='outputText'>{props.content}</p>
        </div>
    )
}

export default userOutput;