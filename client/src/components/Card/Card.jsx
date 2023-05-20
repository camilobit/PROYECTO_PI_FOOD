import React, { useEffect } from 'react';
import './Card.css';

const Card = ({ name, imagen, diets, id, Close }) => {
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
                  <h2>{name}</h2>
              {diets && (
                <div className="diets">
                  <span>Diets:</span>
                  <ul className="ulDiets">
                    {diets.map((diets, index) => (
                      <p key={index}>{diets}</p>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
