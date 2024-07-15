import React from 'react';

import './ButtonWithIcon.scss'

function ButtonWithIcon({img, text, textForServices, imgClass, colorClass}) {
    return (
        <>
        <button className={colorClass}>
            <img className={imgClass} src={img} alt="" />
       {text}
       {textForServices}
        </button>
        </>
    );
}

export default ButtonWithIcon;