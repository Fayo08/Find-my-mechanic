import React from 'react';

import './Buttons.scss'
function Buttons({props}) {
    return (
        <>
        <button className='button-with-icon'>
            <img src={props.img} alt="" />
       {props.text}
        </button>
        </>
    );
}

export default Buttons;