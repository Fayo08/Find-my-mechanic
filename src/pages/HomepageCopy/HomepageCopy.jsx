import "./HomepageCopy.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import  batteryIcon from '../../assets/icons/battery.svg'
import tyreIcon from '../../assets/icons/tyre.svg'
import bookIcon from "../../assets/icons/bookmark.svg";
import scheduleIcon from "../../assets/icons/schedule.svg";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "@googlemaps/js-api-loader";
import React from "react";

function HomepageCopy(props) {
  const mapRef = useRef(null);
  const infoWindowRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
      version: "weekly",
    });

    const initMap = () => {
      const mapOptions = {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6,
      };

      const map = new google.maps.Map(mapRef.current, mapOptions);
      infoWindowRef.current = new google.maps.InfoWindow();

      const handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
      };

      const GetCurrentLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              infoWindowRef.current.setPosition(pos);
              infoWindowRef.current.setContent("Edmonton,Alberta.");
              infoWindowRef.current.open(map);
              map.setCenter(pos);
            },
            () => {
              handleLocationError(true, infoWindowRef.current, map.getCenter());
            }
          );
        } else {
          handleLocationError(false, infoWindowRef.current, map.getCenter());
        }
      };

      window.GetCurrentLocation = GetCurrentLocation;
    };

    loader
      .load()
      .then(() => {
        initMap();
      })
      .catch((e) => {
        console.error("Error loading Google Maps:", e);
      });
  }, []);

  return (
    <main >
      <Header onGetCurrentLocation={() => window.GetCurrentLocation()}  originalMessage= "Edmonton,Alberta" />
<section className="homepage">
      <div className="homepage__buttons">
<Link to="/services" className="homepage__button-link">
        <ButtonWithIcon img={bookIcon} text="Book a service" colorClass="button-with-icon" />
        </Link>
        <ButtonWithIcon img={scheduleIcon} text="Schedule a service" colorClass="button-with-icon" />
      </div>
      <div className="homepage__content"> 
      <h3>Quick tips</h3>
      <div className="homepage__card"> <ButtonWithIcon colorClass="button-with-icon-greenbg" img={tyreIcon} text="Tyre"/>
      Always remember to check your tyre pressure.
      </div>
      <div className="homepage__card" > <ButtonWithIcon colorClass="button-with-icon-greenbg" img={batteryIcon}  text="Battery"/>
      Check the level of power steering liquid and replace when necessary.</div>
      
      

      </div>
      <div
        id="map"
        ref={mapRef}
        style={{ height: "500px", width: "100%" }}
      ></div>
</section>
      <Footer />
    </main>
  );
}

export default HomepageCopy;
