import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const LocationsMap = ({setCurrentLocation}) => {
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
                infoWindowRef.current.setContent("Edmonton, Alberta.");
                infoWindowRef.current.open(map);
                map.setCenter(pos);

                setCurrentLocation("Edmonton, Alberta");

              },
              () => {
                handleLocationError(true, infoWindowRef.current, map.getCenter());
              }
            );
          } else {
            handleLocationError(false, infoWindowRef.current, map.getCenter());
          }
        };
  
        GetCurrentLocation();
      };
  
      loader
        .load()
        .then(() => {
          initMap();
        })
        .catch((e) => {
          alert("Error loading Google Maps:", e);
        });
    }, [setCurrentLocation]);

  return  <div
  id="map"
  ref={mapRef}
  style={{ height: "500px", width: "100%" }}
></div>;
};

export default LocationsMap;
