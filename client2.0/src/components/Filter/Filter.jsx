import React from "react";
import { useDispatch } from "react-redux";
import {
    filterRecipesByTypeDiet,
    orderByName,
    orderByPuntuation
} from "../../redux/actions";

const Filter = () => {
    const dispatch = useDispatch();

    const handleSort = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value));
    };

    const handlePuntuation = (event) => {
        event.preventDefault();
        dispatch(orderByPuntuation(event.target.value));
    };

    const handleFilterTypeDiet = (event) => {
        dispatch(filterRecipesByTypeDiet(event.target.value));
    };  

    return (
    <div className="filt">
      <div>
        <select onChange={handleSort} className="select">
          <option value="asc">ascendent(A-Z)</option>
          <option value="des">descendent(Z-A)</option>
        </select>
      </div>

      <div>
        <select onChange={handlePuntuation} className="select">
          <option value="">Order for healthScore</option>
          <option value="menormayor">lowest to highest score</option>
          <option value="mayormenor">highest to lowest score</option>
          <option value="mayorcincuenta">over 50</option>
          <option value="menorcincuenta">less than 50</option>
        </select>
      </div>
      <div>
        <select onChange={handleFilterTypeDiet} className="select">
            <option value="All">All recipes</option>
            <option value="createdInDb">Data Base</option>
            <option value="gluten free">Gluten Free</option>
            <option value="ketogenic">Ketogenic</option>
            <option value="vegetarian">Vegetarian </option>
            <option value="lacto-vegetarian">Lacto-Vegetarian </option>
            <option value="lacto ovo vegetarian">Ovo-Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole 30</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
