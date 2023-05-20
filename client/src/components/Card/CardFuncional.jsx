import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

const Card = ({ name, imagen, diets, id, showActions, onClose }) => {

  useEffect(() => {
    // Lógica para marcar como favorito
  }, []);

  return (
    <div className="tarjeta">
      <div className="ContainerCard">
        <div className="card">
          <div className="imgStore">
            <img
              src={
                imagen ||
                'https://img.freepik.com/vector-gratis/vector-ilustracion-dibujos-animados-varias-verduras-sobre-fondo-madera_1441-519.jpg?size=626&ext=jpg&ga=GA1.2.227501000.1662982549'
              }
              alt={name}
            />
            <div className="contentcard">
              <div className="container-action">
                {showActions && (
                  <>
                    <NavLink to={`/detail/${id}`}>
                      <h2>{name}</h2>
                    </NavLink>
                  </>
                )}
                {!showActions && (
                  <NavLink to={`/detail/${id}`}>
                    <h2>{name}</h2>
                  </NavLink>
                )}
                
                {diets && (
                  <div className="diets">
                    diets:
                    <ul>
                      {diets.map((diet) => (
                        diet.name ? <li key={diet.name}>{diet.name}</li> : null
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
