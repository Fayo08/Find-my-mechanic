import React from "react";
import homeIcon from "../../assets/icons/home.svg";
import toolsIcon from "../../assets/icons/tools.svg";
import userIcon from "../../assets/icons/user.svg";
import './Footer.scss'

function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
            
          <div className="footer__icon">
            <img className="footer__img" src={homeIcon} alt="This is a home icon" />
            <p className="footer__text">Home</p>
          </div>

          <div className="footer__icon">
            <img className="footer__img" src={toolsIcon} alt="This is a screw icon" />
            <p className="footer__text">Quick fix</p>
          </div>

          <div className="footer__icon">
            <img className="footer__img" src={userIcon} alt="This is a user icon" />
            <p className="footer__text"> You</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
