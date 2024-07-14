import React from 'react';

import './ButtonWithIcon.scss'

function ButtonWithIcon({img, text, textForServices, colorClass}) {
    return (
        <>
        <button className={colorClass}>
            <img src={img} alt="" />
       {text}
       {textForServices}
        </button>
        </>
    );
}

export default ButtonWithIcon;