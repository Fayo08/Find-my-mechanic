import React, { useState, useEffect } from "react";
import TimeSlider from "../../components/TimeSlider/TimeSlider";
import Header from "../../components/Header/Header";
import LocationsMap from "../../components/Map/LocationsMap";
import { useParams, useNavigate } from "react-router-dom";


import axios from "axios";
import "./MechanicDistance.scss";

const MechanicDistance = () => {
  const navigate = useNavigate();
  const { mechanicId } = useParams();
  const [totalTime, setTotalTime] = useState(15);
  const [reviewPage, setReviewPage] = useState(null);
  const [arrived, setArrived] = useState('Your mechanic is arriving soon.');



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

  useEffect(() => {
    if (currentTime === totalTime) {
      setArrived('Your mechanic has arrived!')
      const navigationTimer = setTimeout(() => {
        navigate('/post-review/:mechanicId');
      }, 2000);
      return () => clearTimeout(navigationTimer);
    }
  }, [currentTime, totalTime, navigate]);

  return (
    <>
      <Header Backlink="/" originalMessage="Edmonton, Alberta" />
      <LocationsMap />
      <main className="mechanic-distance">
        <h3>{arrived}</h3>
        <TimeSlider totalTime={totalTime} currentTime={currentTime} />
        <p>Hang tight for some minutes, help is on the way!</p>
      </main>
    </>
  );
};

export default MechanicDistance;
