import React from "react";
import { filterRecipesByTypeDiet, filterCreated, orderByName, orderByPuntuation } from "../../redux/actions";
import { useDispatch } from "react-redux";
import './Filter.css';
import dietImages from "./dietImages";

const Filter = ({ setOrden, setCurrentPage }) => {
  const dispatch = useDispatch();

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }

  function handleFilterTypeDiet(event) {
    dispatch(filterRecipesByTypeDiet(event.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handlePuntuation(e) {
    e.preventDefault();
    dispatch(orderByPuntuation(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div className="filter-container">
    <div className="bar-promo">
    <h4>
    ¿Nuevo en APP FOOD? Disfruta de... ¡Este contenido gratis por tiempo limitado!
    </h4>
    <button className="btn-promo" >Regístrate</button>
    <span>Términos y condiciones</span>
    </div>
      <div className="filter-item-img">
        <label htmlFor="filter-type-diet-select-img"></label>
        <div className="diet-images">
          {Object.entries(dietImages).map(([diet, image]) => (
            <div key={diet} className="diet-image" onClick={() => handleFilterTypeDiet({ target: { value: diet } })}>
              <img src={image} alt={diet} />
              <span>{diet}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-row">

        <div className="filter-item 1">
          <label htmlFor="puntuation-select">Puntuation:</label>
          <select id="puntuation-select" className="filter-select" onChange={(e) => handlePuntuation(e)}>
            <option value="all">All Puntuations</option>
            <option value="menormayor">From smallest to Largest</option>
            <option value="mayormenor">From older to Younger</option>
          </select>
        </div>

        <div className="filter-item dos">
          <label htmlFor="filter-created-select">Filter By Creation:</label>
          <select id="filter-created-select" className="filter-select" onChange={(e) => handleFilterCreated(e)}>
            <option value="All">All Recipes</option>
            <option value="created">Your Creations</option>
            <option value="api">Existing Recipes</option>
          </select>
        </div>
        
        <div className="filter-item tres">
          <label htmlFor="sort-select">Order:</label>
          <select id="sort-select" className="filter-select" onChange={(e) => handleSort(e)}>
            <option value="asc">Upward (A-Z)</option>
            <option value="des">Falling (Z-A)</option>
          </select>
        </div>
      
      
      
      </div>
    </div>
  );
};

export default Filter;
