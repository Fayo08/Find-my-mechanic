import React from "react";
import internetIcon from "../../assets/icons/internet.svg";
import backIcon from "../../assets/icons/backIcon.svg"
import wifiIcon from "../../assets/icons/wifi.svg";
import batteryIcon from "../../assets/icons/battery.svg";
import mobileBattery from "../../assets/icons/batterymobile.svg"
import locationIcon from "../../assets/icons/location.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header({ onGetCurrentLocation, locationMessage, originalMessage }) {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__item">
            <p className="header__text">9:41</p>

            <div className="header__icons">
              <img src={internetIcon} alt=" This is a signal icon" />
              <img src={wifiIcon} alt="This is a wifi icon" />
              <img src={mobileBattery} alt="This is a battery icon" />
            </div>
          </div>
          <Link to="/">
            <img className="previous-icon" src={backIcon} alt="This is a previous icon" />
        </Link>
          <div className="header__location">
            <img src={locationIcon} alt=" This is a location Icon" />
          <Link to="/homepage-copy" > 
          <button onClick={onGetCurrentLocation} className="header__button">
              {locationMessage} {originalMessage}
            </button>
            </Link> 
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
