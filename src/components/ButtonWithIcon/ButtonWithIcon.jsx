import React from 'react';

import './ButtonWithIcon.scss'

function ButtonWithIcon({img, text, textForServices,flexClass, imgClass, colorClass}) {
    return (
        <>
        <button className={colorClass}>
            <img className={imgClass} src={img} alt="" />
            <div className={flexClass}>
     <p>{text}</p> 
      <p className='text-for-services'>{textForServices}</p> 
      </div>
        </button>
        </>
    );
}

export default ButtonWithIcon;