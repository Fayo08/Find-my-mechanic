import React from 'react';
import './Buttons.scss'
function Buttons({buttonText, colorClass, textForServices, img, onClick}) {
    return (
        <>
        <button className={colorClass} onClick={onClick}>
        
       
       {buttonText}
       {textForServices}
        </button>
        </>
    );
}

export default Buttons;