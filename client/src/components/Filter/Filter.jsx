import React from "react";
import { filterRecipesByTypeDiet, filterCreated, orderByName, orderByPuntuation } from "../../redux/actions";
import { useDispatch } from "react-redux";



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
    <div className="filt">
      <div>
        <select onChange={e => handleSort(e)}>
          <option value="asc">ascendent(A-Z)</option>
          <option value="des">descendent(Z-A)</option>
        </select>
      </div>

      <div>
        <select onChange={e => handlePuntuation(e)}>
          <option value="all">All  healthScores</option>
          <option value="menormayor">lowest to highest score</option>
          <option value="mayormenor">highest to lowest score</option>
        </select>
      </div>

      <div>
        <select onChange={e => handleFilterCreated(e)}>
          <option value= 'All'>Todas las recetas</option>
          <option value= 'created'>Tus creaciones</option>
          <option value= 'api'>Existentes</option>
        </select>
      </div>

      <div>
        <select onChange={event => handleFilterTypeDiet(event)} >
            <option value="All">All recipes</option>
            <option value="gluten free" >Gluten Free</option>
            <option value="dairy free" >Dairy Free</option>
            <option value="ketogenic" >Ketogenic</option>
            <option value="lacto ovo vegetarian" >Ovo-Vegetarian</option>
            <option value="vegan" >Vegan</option>
            <option value="pescatarian" >Pescatarian</option>
            <option value="paleolithic" >Paleolithic</option>
            <option value="primal" >Primal</option>
            <option value="whole 30" >Whole 30</option>
            <option value="fodmap friendly" >Fodmap Friendly</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
