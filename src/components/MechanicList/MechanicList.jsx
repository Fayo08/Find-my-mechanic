import React from 'react';
import './MechanicList.scss';
import { api_URL } from '../../../utils.js';

function MechanicList({  mechanic }) { 
    
   const {image_path} = mechanic
   
   const {  name, location, price, type } = mechanic;

    const imageUrl = `${api_URL}/img${image_path}`;


    return (
        <div className='mechanic-list'>
            <img className='mechanic-list__img' src={imageUrl} alt="" />
            <div className='mechanic-list__container' >
            <div className='mechanic-list__details'>
                <h3 className='mechanic-list__name'>{name}</h3>
                <p className='mechanic-list__time'>{location}</p>
            </div>
           
                <div className='mechanic-list__price'>
                    {price != null && `$${price}`}
                </div>
                </div>
          
        </div>
    );
}

export default MechanicList;
