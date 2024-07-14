import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import LocationsMap from "../../components/Map/LocationsMap";
import Modal from "../../components/Modal/Modal";
import Buttons from "../../components/Buttons/Buttons";

function PostReview(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set a timeout to open the modal after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <LocationsMap />

      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p>Your service has been completed.</p>
          <p>Please let us know about your experience with Isreal.</p>
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
