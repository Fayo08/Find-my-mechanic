import "./GetLocation.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import  batteryIcon from '../../assets/icons/battery.svg'
import tyreIcon from '../../assets/icons/tyre.svg'
import bookIcon from "../../assets/icons/bookmark.svg";
import scheduleIcon from "../../assets/icons/schedule.svg";
import ScheduleService from "../ScheduleService/ScheduleService";

import LocationsMap from "../../components/Map/LocationsMap";
import { Link } from "react-router-dom";

import React from "react";

function GetLocation(props) {

 



  return (
    <main >
      <Header onGetCurrentLocation={() => window.GetCurrentLocation()} Backlink = '/' originalMessage= "Edmonton,Alberta" />
<section className="homepage">
      <div className="homepage__buttons">
        
<Link to="/bookservices"  className="homepage__button-link">
        <ButtonWithIcon img={bookIcon} text="Book a service" colorClass="button-with-icon-whitebg-fullwidth" />
        </Link>
        <Link to="/schedule-service">
        <ButtonWithIcon img={scheduleIcon} text="Schedule a service" colorClass="button-with-icon" />
        </Link>
      </div>
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

export default GetLocation;
