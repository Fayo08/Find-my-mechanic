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
import Buttons from "../../components/Buttons/Buttons.jsx";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon.jsx";

function GetMechanic(props) {
  const navigate = useNavigate();
  const { category } = useParams();
  const [mechanics, setMechanics] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState([]);

  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        const response = await axios.get(
          `${api_URL}/api/services/mechanics/category/${category}`
        );

        setMechanics(response.data);
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
    <main>
      <Header originalMessage="Edmonton, Alberta" Backlink="/bookservices" />
      <LocationsMap />
      <section className="background">
        <ButtonWithIcon
          img={carPhoto}
          imgClass="img-getMechanic"
          text="BMW iX M60 2022"
          colorClass="button-with-icon-greenbg-fullwidth"
          textForServices={services.type}
        />

        <div>
          {mechanics.map((mechanic) => (
            <div key={mechanic.id} onClick={() => handleClick(mechanic.id)}>
              <MechanicList mechanic={mechanic} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default GetMechanic;
