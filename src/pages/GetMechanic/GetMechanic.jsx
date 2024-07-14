import React from "react";
import Header from "../../components/Header/Header";
import { api_URL } from "../../../utils.js";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./GetMechanic.scss";
import carPhoto from "../../assets/images/Car.png";
import MechanicList from "../../components/MechanicList/MechanicList.jsx";
import LocationsMap from "../../components/Map/LocationsMap.jsx";

import Buttons from "../../components/Buttons/Buttons.jsx";

function GetMechanic(props) {
  const { category } = useParams();
  const [mechanics, setMechanics] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        const response = await axios.get(
          `${api_URL}/api/services/mechanics/category/${category}`
        );
        setMechanics(response.data);
      } catch (error) {
        console.error(`Error fetching mechanic`, error);
      }
    };
    fetchMechanics();
  }, [category]);

  


  return (
    <main>
      <Header originalMessage="Edmonton, Alberta" />
      <LocationsMap />
      <section className="background">
        <Buttons
          img={carPhoto}
          buttonText="BMW iX M60 2022"
          colorClass="button-with-icon-greenbg-fullwidth"
          textForServices={services.type}
        />

        <div>
          {mechanics.map((mechanic) => {
            return (
              <MechanicList
                key={mechanic.id}
              
                mechanic ={mechanic}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default GetMechanic;
