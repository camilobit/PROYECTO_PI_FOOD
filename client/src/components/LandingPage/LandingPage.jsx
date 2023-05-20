import React from 'react';
import { NavLink } from 'react-router-dom';
import video from '../imagenes/videolandingMP4';
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div>
      <div className='contentVideo'>
        <video autoPlay loop muted className="imgLanding" width="100%">
          <source src={video} type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
      </div>
      <div className='containerLanding'>
      <h1 className="title">Enter your favorite recipe book and calm your craving</h1>
      <NavLink className='NavLink' to="/home">
        <button>Login</button>
      </NavLink>
      </div>
    </div>
  );
}

