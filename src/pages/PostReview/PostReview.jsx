import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api_URL } from "../../../utils.js";
import axios from "axios";
import "./PostReview.scss";
import Header from "../../components/Header/Header";
import LocationsMap from "../../components/Map/LocationsMap";
import Modal from "../../components/Modal/Modal";
import Buttons from "../../components/Buttons/Buttons";
import TimeSlider from "../../components/TimeSlider/TimeSlider";

function PostReview() {
 
  const [reviewer, setReviewer] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const { mechanicId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api_URL}/api/reviews/reviews`, {
        reviewer,
        rating,
        comment,
        mechanics_id: mechanicId,
      });
  
      alert("Review submitted successfully");
      navigate(`/`);
    } catch (error) {
      
      alert("Failed to submit review. Please try again.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <>
      <Header />
      <LocationsMap />

      <main className="mechanic-distance">
        <h3>Service Complete!</h3>
        <TimeSlider sliderClass="time-slider" />
      </main>

      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h3>Your service has been completed.</h3>
          <p>Please let us know about your experience.</p>
          <div className="create-review">
     
      <form className="post-review__form-container" onSubmit={handleSubmit}>
        <div className="post-review__label-spacing">
          <label htmlFor="reviewer">Your Name:</label>
          <input
          className="post-review__form"
            type="text"
            id="reviewer"
            value={reviewer}
            onChange={(e) => setReviewer(e.target.value)}
            required
          />
        </div>
        <div className="post-review__label-spacing" >
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option className="post-review__rating" key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        
        <div className="post-review__label-spacing" >
          <label htmlFor="comment">Your Review:</label>
          <textarea
    
          className="post-review__form"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <Buttons  colorClass="pri-button" buttonText="Submit Review" type="submit"></Buttons>
      </form>
    </div>
        </Modal>
      </div>
    </>
  );
}

export default PostReview;
