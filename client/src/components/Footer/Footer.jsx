import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {

  return (
    <section className="sec-footer-cta">
      <div className="footer-cta">
        <div className="footer-text">
          <h4 className="cta-title">Proyect Food</h4>
          <p className="cta-description">Si quieres saber mas sobre quien y como se hizo esta aplicación te invito a hacer click en este botón para que conozcas más detalles. </p>
        </div>
        <Link to="/about">
          <button className="btn-main">
            About
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
