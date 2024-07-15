import React from "react";
import homeIcon from "../../assets/icons/home.svg";
import { Link } from "react-router-dom";
import userIcon from "../../assets/icons/user.svg";
import './Footer.scss'

function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
            <div className="footer__icon-container">
          <div className="footer__icon">
<Link to="/">
            <img className="footer__img" src={homeIcon} alt="This is a home icon" />
            </Link>
            <p className="footer__text">Home</p>
          </div>

       

          <div className="footer__icon">
            <img className="footer__img" src={userIcon} alt="This is a user icon" />
            <p className="footer__text"> You</p>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
