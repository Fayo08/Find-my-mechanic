import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import LocationsMap from "../../components/Map/LocationsMap";
import { api_URL } from "../../../utils.js";
import "./MechanicDetails.scss";
import phoneIcon from "../../assets/icons/phone.svg";
import cameraIcon from "../../assets/icons/camera.svg";
import Buttons from "../../components/Buttons/Buttons.jsx";
import Modal from "../../components/Modal/Modal.jsx";

function MechanicDetails() {
  const { mechanicId } = useParams();
  const [mechanicDetails, setMechanicDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMechanic = async () => {
      try {
        const response = await axios.get(
          `${api_URL}/api/mechanics/${mechanicId}`
        );
        console.log("Fetched mechanic details:", response.data);
        setMechanicDetails(response.data);
      } catch (error) {
        console.error("Failure fetching mechanic ", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${api_URL}/api/reviews/mechanics/${mechanicId}/reviews`
        );
        console.log("Fetched reviews:", response.data);
        setReviews(response.data);
      } catch (error) {
        console.error("Failure fetching reviews ", error);
      }
    };

    fetchMechanic();
    fetchReviews();
  }, [mechanicId]);

  if (!mechanicDetails) {
    return <div>Loading...</div>;
  }

  const { image_path } = mechanicDetails;
  const imageUrl = `http://localhost:8080/img${image_path}`;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Are you sure you want to cancel?</h2>
        <p>Your changes will not be saved</p>
        <Link className="mechanic-details__link" to="/bookservices">
          <Buttons buttonText="Confirm" colorClass="button-with-icon-greenbg" />
        </Link>
      </Modal>
      <LocationsMap />

      <section className="mechanic-details">
        <div className="mechanic-details__container">
        <div className="mechanic-details__about">
          <div className="mechanic-details__info">
            <img className="mechanic-details__img" src={imageUrl} alt="" />
            <div>
              <h2>{mechanicDetails.name}</h2>
              <p>Location: {mechanicDetails.location}</p>
            </div>
          </div>
          <div className="mechanic-details__input-container">
            <form action="">
              <input
                className="mechanic-details__input"
                placeholder="Any notes?"
                type="text"
                name=""
                id=""
              />
            </form>
            <div className="mechanic-details__Icon-container">
              <div className="mechanic-details__icons">
                {" "}
                <img src={phoneIcon} alt="" />
              </div>
              <div className="mechanic-details__icons">
                {" "}
                <img src={cameraIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="mechanic-details__divider-line"></div>
        <div>
          <h3>Car details</h3>
          <p>BMW iX M60 2022</p>
        </div>
        <div className="mechanic-details__divider-line1"></div>

        <div>
          <h3>Reviews</h3>

          {reviews.map((review) => (
            <div className="mechanic-details__reviews" key={review.id}>
              <h3> {review.reviewer} </h3>

              <p>Rating: {review.rating}</p>
              <p> {review.comment}</p>
            </div>
          ))}
        </div>
        <div className="mechanic-details__button">
         

          <Buttons
            onClick={openModal}
            buttonText="Cancel Request"
            colorClass={"cancel"}
          />
           <Link className="mechanic-details__link" to="/distance">
            <Buttons buttonText="Confirm Request" colorClass={"pri-button"} />
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}

export default MechanicDetails;
