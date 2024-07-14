import "./Homepage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import  batteryIcon from '../../assets/icons/battery.svg'
import tyreIcon from '../../assets/icons/tyre.svg'
import bookIcon from "../../assets/icons/bookmark.svg";
import scheduleIcon from "../../assets/icons/schedule.svg";
import { useState, useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import React from "react";
import LocationsMap from "../../components/Map/LocationsMap";

function Homepage(props) {
  

  return (
    <main >
      <Header onGetCurrentLocation={() => window.GetCurrentLocation()}  originalMessage= "Where are you?" />
<section className="homepage">
      {/* <div className="homepage__buttons">
        <ButtonWithIcon img={bookIcon} text="Book a service" />
        <ButtonWithIcon img={scheduleIcon} text="Schedule a service" />
      </div> */}
      <div className="homepage__content"> 
      <h3>Quick tips</h3>
      <div className="homepage__card"> <ButtonWithIcon colorClass="button-with-icon-greenbg" img={tyreIcon} text="Tyre"/>
      Always remember to check your tyre pressure.
      </div>
      <div className="homepage__card" > <ButtonWithIcon colorClass="button-with-icon-greenbg" img={batteryIcon}  text="Battery"/>
      Check the level of power steering liquid and replace when necessary.</div>
      
      

      </div>
     <LocationsMap />
</section>
      <Footer />
    </main>
  );
}

export default Homepage;
