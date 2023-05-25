import React from "react";
import { filterRecipesByTypeDiet, filterCreated, orderByName, orderByPuntuation } from "../../redux/actions";
import { useDispatch } from "react-redux";
import './Filter.css'



const Filter = ({ setOrden, setCurrentPage }) => {
  const dispatch = useDispatch();

  function handleFilterCreated (e){
    dispatch(filterCreated(e.target.value))
  }
  function handleFilterTypeDiet(event) {
    dispatch(filterRecipesByTypeDiet(event.target.value))
  }
  function handleSort (e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  }  
  function handlePuntuation(e){
    e.preventDefault();
    dispatch(orderByPuntuation(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  }
  
  
  
  
  return (
    <div className="filter-container">
      <div className="filter-item">
          <label htmlFor="filter-type-diet-select">Filter By Typediet:</label>
          <select id="filter-type-diet-select" className="filter-select" onChange={(event) => handleFilterTypeDiet(event)}>
            <option value="All">All Recipes</option>
            <option value="gluten free">Gluten Free</option>
            <option value="dairy free">Dairy Free</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole 30</option>
            <option value="fodmap friendly">FODMAP Friendly</option>
          </select>
        </div>
      
      
      <div className="filter-row">
        <div className="filter-item">
          <label htmlFor="sort-select">Order:</label>
          <select id="sort-select" className="filter-select" onChange={(e) => handleSort(e)}>
            <option value="asc">Upward (A-Z)</option>
            <option value="des">Falling (Z-A)</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="puntuation-select">Puntuation:</label>
          <select id="puntuation-select" className="filter-select" onChange={(e) => handlePuntuation(e)}>
            <option value="all">All Puntuations</option>
            <option value="menormayor">From smallest to Largest</option>
            <option value="mayormenor">From older to Younger</option>
          </select>
        </div>

        <div className="filter-item">
          <label htmlFor="filter-created-select">Filter By Creation:</label>
          <select id="filter-created-select" className="filter-select" onChange={(e) => handleFilterCreated(e)}>
            <option value="All">All Recipes</option>
            <option value="created">Your Creations</option>
            <option value="api">Existing Recipes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
