import React from 'react';
import './MechanicList.scss';

function MechanicList({  mechanic }) { 
    
   const {image_path} = mechanic
   
   const {  name, location, price, type } = mechanic;

    const imageUrl = `http://localhost:8080/img${image_path}`;


    return (
        <div className='mechanic-list'>
            <img className='mechanic-list__img' src={imageUrl} alt="Mechanic profile photo" />
            <div className='mechanic-list__container' >
            <div className='mechanic-list__details'>
                <h3 className='mechanic-list__name'>{name}</h3>
                <p className='mechanic-list__time'>{location}</p>
            </div>
           
                <div className='mechanic-list__price'>
                    {price}
                </div>
                </div>
          
        </div>
    );
}

export default MechanicList;
