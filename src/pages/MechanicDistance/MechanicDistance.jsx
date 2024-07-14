import React, { useState, useEffect } from 'react';
import TimeSlider from '../../components/TimeSlider/TimeSlider';
import Header from '../../components/Header/Header';
import LocationsMap from '../../components/Map/LocationsMap';
import { useParams } from 'react-router-dom';
import { api_URL } from "../../../utils.js";

import axios from 'axios';
import './MechanicDistance.scss'

const MechanicDistance = () => {
    const { mechanicId } = useParams();
  const [totalTime, setTotalTime] = useState(15); 
  const [mechanicDetails, setMechanicDetails] = useState(null);

  const [currentTime, setCurrentTime] = useState(0);
 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime((prevTime) => {
        if (prevTime >= totalTime) {
          clearInterval(timer);
          return totalTime;
        }
        return prevTime + 1;
      });
    }, 1000); 

    return () => clearInterval(timer);

   
  }, [totalTime]);



  return (
    <>
    <Header />
    <LocationsMap />
    <main className='mechanic-distance'>
  
      <h3>Israel is arriving soon.</h3>
      <TimeSlider totalTime={totalTime} currentTime={currentTime} />
<p>Hang tight for some minutes, help is on the way!</p>
 
    </main>
    </>
  );
};

export default MechanicDistance;