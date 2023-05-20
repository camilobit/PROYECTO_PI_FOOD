/* eslint-disable react/prop-types */
import "./Recipe.css";
import React from 'react';

export default function Card({ name, imagen, diets, id }) {
    return (
      <div key={id} className="card">
        <div className="cd">
          <h3>{name}</h3>
          <img
            className="cardimg"
            src={
              imagen
                ? imagen
                : "https://img.freepik.com/vector-gratis/vector-ilustracion-dibujos-animados-varias-verduras-sobre-fondo-madera_1441-519.jpg?size=626&ext=jpg&ga=GA1.2.227501000.1662982549"
            }
            alt="img not found"
            width="100%"
          />
          <div className="tipes">
            diets:
            <ol>
              {" "}
              {/* // eslint-disable-next-line react/prop-types */}
              {diets? diets.map((e) =>
                  e.name ? <li key={e.name}>{e.name}</li> : null
                  ) : null}
            </ol>{" "}
          </div>
        </div>
      </div>
    );
  }