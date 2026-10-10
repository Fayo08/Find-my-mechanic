import React from "react";
import internetIcon from "../../assets/icons/internet.svg";
import backIcon from "../../assets/icons/backIcon.svg";
import wifiIcon from "../../assets/icons/wifi.svg";
import mobileBattery from "../../assets/icons/batterymobile.svg";
import locationIcon from "../../assets/icons/location.svg";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";

function Header({ Backlink, onClick, location, originalMessage }) {
  const navigate = useNavigate();
  const backImg = <img className="previous-icon" src={backIcon} alt="Back" />;

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__item">
          <p className="header__text">9:41</p>

          <div className="header__icons">
            <img src={internetIcon} alt="" />
            <img src={wifiIcon} alt="" />
            <img src={mobileBattery} alt="" />
          </div>
        </div>

        {Backlink ? (
          <Link className="header__back" to={Backlink} onClick={onClick}>
            {backImg}
          </Link>
        ) : (
          <button
            type="button"
            className="header__back header__button"
            onClick={onClick ?? (() => navigate(-1))}
          >
            {backImg}
          </button>
        )}

        <div className="header__location">
          <img src={locationIcon} alt="" />
          <Link to="/get-location">
            <button className="header__button" type="button">
              {location ? location : originalMessage || "Where are you?"}
            </button>
          </Link>
        </div>

        <Link className="header__brand" to="/">
          Find My Mechanic
        </Link>
      </div>
    </header>
  );
}

export default Header;
