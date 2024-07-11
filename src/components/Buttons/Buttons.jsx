import React from 'react';
import './Buttons.scss'
function Buttons({buttonText}) {
    return (
        <>
        <button className='pri-button'>
       {buttonText}
        </button>
        </>
    );
}

export default Buttons;