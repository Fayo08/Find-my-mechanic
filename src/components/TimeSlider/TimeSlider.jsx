import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './TimeSlider.scss';

const TimeSlider = ({ totalTime, currentTime }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentTime / totalTime) * 100);
  }, [currentTime, totalTime]);

  const props = useSpring({
    width: `${progress}%`,
    from: { width: '0%' },
  });

  return (
    <div className="time-slider">
      <animated.div className="progress-bar" style={props} />
      <div className="time-remaining">
        {Math.ceil(totalTime - currentTime)} minutes remaining
      </div>
    </div>
  );
};

export default TimeSlider;