import React from "react";
import internetIcon from "../../assets/icons/internet.svg";
import wifiIcon from "../../assets/icons/wifi.svg";
import batteryIcon from "../../assets/icons/battery.svg";
import locationIcon from "../../assets/icons/location.svg";
import './Header.scss'

function Header(props) {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__item">
            <p className="header__text">9:41</p>

            <div className="header__icons">
              <img src={internetIcon} alt=" This is a signal icon" />
              <img src={wifiIcon} alt="This is a wifi icon" />
              <img src={batteryIcon} alt="This is a battery icon" />
            </div>
          </div>

          <div className="header__location">
            <img src={locationIcon} alt=" This is a location Icon" />
            <p className="header__text">Where are you?</p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
