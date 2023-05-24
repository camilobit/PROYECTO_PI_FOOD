import React, { useEffect } from 'react';
import './Card.css';
//import { NavLink } from 'react-router-dom';

const Card = ({ name, imagen, diets, id }) => {
  useEffect(() => {
    // Lógica para marcar como favorito
  }, []);
  //console.log(id);
  

  return (
    <div className="tarjeta">
    {/* <NavLink to={`/detail/${id}`} key={id}> */}
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
      <h3>Diets:</h3>
      <ul className="ulDiets">
        <span>{diets.map((diet, index) => (index !== diets.length - 1) ? `${diet}, ` : diet)}</span>
      </ul>
    </div>
  )}
</div>

                    {/* {diets.map((diets, index) => (
                      <span key={index}>{diets}</span>
                    ))} */}
          </div>
        </div>
      </div>
            {/* </NavLink> */}
    </div>
  );
};

export default Card;
