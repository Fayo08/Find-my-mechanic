import React from "react";
import Header from "../../components/Header/Header";
import { api_URL } from "../../../utils.js";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./GetMechanic.scss";
import carPhoto from "../../assets/images/car.svg";
import MechanicList from "../../components/MechanicList/MechanicList.jsx";
import LocationsMap from "../../components/Map/LocationsMap.jsx";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon.jsx";

function GetMechanic(props) {
  const navigate = useNavigate();
  const { category } = useParams();
  const [mechanics, setMechanics] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        const response = await axios.get(
          `${api_URL}/api/services/mechanics/category/${category}`
        );
        setMechanics(response.data);
        setLoaded(true);
      } catch (error) {
        alert(`Error fetching mechanic`);
      }
    };
    fetchMechanics();
  }, [category]);

  

  const handleClick = (mechanicId) => {
    const selectedMechanic = mechanics.find(
      (mechanic) => mechanic.id === mechanicId
    );

    setSelectedMechanic(selectedMechanic);
    if (selectedMechanic) {
      navigate(`/mechanics/${selectedMechanic.id}`);
    }
  };

  return (
    <main className="screen">
      <Header originalMessage="Edmonton, Alberta" Backlink="/bookservices" />
      <div className="stage">
      <LocationsMap />
      <section className="get-mechanic">
        <ButtonWithIcon
          img={carPhoto}
          imgClass="img-getMechanic"
          text="BMW iX M60 2022"
          colorClass="button-with-icon-greenbg-fullwidth"
          flexClass="car-description"
          textForServices={category}
        />

        <div className="get-mechanic__list">
          {mechanics.map((mechanic) => (
            <div
              className="get-mechanic__item"
              key={mechanic.id}
              role="button"
              tabIndex={0}
              onClick={() => handleClick(mechanic.id)}
              onKeyDown={(e) => e.key === "Enter" && handleClick(mechanic.id)}
            >
              <MechanicList mechanic={mechanic} />
            </div>
          ))}
          {loaded && mechanics.length === 0 && (
            <p className="get-mechanic__empty">No mechanics for this service yet.</p>
          )}
        </div>
      </section>
      </div>
    </main>
  );
}

export default GetMechanic;
