import React from "react";
import { useState, useEffect } from "react";
import { api_URL } from "../../../utils.js";
import axios from "axios";
import Header from "../../components/Header/Header";
import LocationsMap from "../../components/Map/LocationsMap";
import Modal from "../../components/Modal/Modal";
import Buttons from "../../components/Buttons/Buttons";
import TimeSlider from "../../components/TimeSlider/TimeSlider";

function PostReview(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [values, setValues] = useState({
      services_id: "",
      rating: "",
      comment: "",
      reviewer: "",
      mechanics_id: "",
    });



  useEffect(() => {

    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);

    return () => clearTimeout(timer);



    
  }, []); 

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <LocationsMap />

      <main className="mechanic-distance">
        <h3>Service Complete!</h3>
        <TimeSlider  sliderClass="time-slider" />
      </main>

      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p>Your service has been completed.</p>
          <p>Please let us know about your experience.</p>
          <form action="">
            <input type="text" name="" placeholder=" Leave Review" id="" />
          </form>
          <Buttons buttonText="Submit" colorClass="button-with-icon-greenbg" />
        </Modal>
      </div>
    </>
  );
}

export default PostReview;
