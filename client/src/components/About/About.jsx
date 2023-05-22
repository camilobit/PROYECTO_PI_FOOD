/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import imgperfil from "../imagenes/foto_perfil_edit_link.png"
import { NavLink } from "react-router-dom";
import './About.css'

export default function About(){
  return (
    <div>
      <NavLink to="/home">
        <button className="back-button">Back</button>
      </NavLink>
      <div className="container-presentation">
        <div className="subcard colum-rigth">
          <p id="parrafo" className="fst-italic h4 text-center">Las tecnologías usadas en este proyecto para el Back fueron Node.js, MySql usando a PgAdmin como gestor de mi base de datos, también implementé Axios. Para el Front de esta app utilicé React, Redux y CSS puro para dar los estilos correspondientes. Este proyecto fue realizado completamente desde cero en un tiempo de 15 días, me siento feliz del resultado obtenido. Espero que sea de tu agrado.</p>
          <h1 className="font-monospace h2">CONOCE MAS SOBRE MI</h1>

          <div id="container-btn">
            <button className="btn btn-primary btn-lg">
              <a href="https://www.linkedin.com/in/camilo-acevedo/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
            </button>

            <button id="btn-secundary" className="btn btn-success btn-md">
              <a href="https://github.com/camilobit" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i> GitHub
              </a>
            </button>
          </div>

          <h1 className="text-center fs-5">Proyecto Individual Final</h1>
        </div>

        <div className="subcard colum-left">
          <h1>ABOUT ME</h1>
          <h4 className="text-primary">Desarrollador de este sitio</h4>
          <div className="img-perfil">
            <img className="imgperfil" src={imgperfil} />
          </div>
          <h3>Camilo Acevedo</h3>
        </div>
      </div>
    </div>
  );
};