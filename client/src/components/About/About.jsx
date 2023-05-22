/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import imgperfil from "../imagenes/foto camarera.jpg"
import { NavLink } from "react-router-dom";


const About = () => {
    return(
        // <div class="container-about">
        //     <h1>Work in progress...</h1>
        //     <p>Camilo está trabajando pronto te sorprenderé...</p>
        // </div>

        <div>
        <NavLink to="/home">
          <button className="back-button">Back</button>
        </NavLink>
            <div class="container-presentation">
                <div class="subcard colum-rigth">
                    <p id="parrafo" class="fst-italic h4 text-center">Tecnologias usadas en este proyecto, REACT, REACT-REDUX, CSS, REACT-HOOKS, AJAX. También estamos utilizando los estados locales a con componentes de clase y funcionales, usando eventos DISPATCH.</p>
                    <h1 class="font-monospace h2">CONOCE MAS SOBRE MI</h1>

                    <div id="container-btn">
                        <button class="btn btn-primary btn-lg ">            
                            <a href="https://www.linkedin.com/in/camilo-acevedo/" target="_blank" rel="noreferrer">  <i class="bi bi-linkedin"></i>    LinkedIn</a>
                        </button>

                        <button id="btn-secundary" class="btn btn-success btn-md ">            
                            <a href="https://github.com/camilobit" target="_blank" rel="noreferrer">  <i class="bi bi-github"></i>    GitHub</a>
                        </button>
                    </div>


                    
                    <h1 class="text-center fs-5">Proyecto de integración módulo 2</h1>
                </div>
                
                <div class="subcard colum-left">
                    <h1>ABOUT ME</h1>
                    <h4 class=" text-primary" >Desarrollador de este sitio</h4>
                    <div class="img-perfil">
                    <img class="imgperfil" src={imgperfil} />
                    </div>
                    <h3>Camilo Acevedo</h3>
                </div>
            </div>
        </div>
    )
}

export default About;