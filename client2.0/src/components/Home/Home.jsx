// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, filterRecipesByTypeDiet, orderByName, orderByPuntuation } from "../../redux/actions";
import { NavLink } from 'react-router-dom';
import Filter from '../Filter/Filter'
import Recipe from '../Recipe/Recipe'


export default function Home () {
    const dispatch = useDispatch();
    const allRecipes = useSelector ((state) => state.recipes)
    useEffect (()=>{
        dispatch(getRecipes())
    },[dispatch])

    function handleClick(event) {
        event.preventDefault();
        dispatch(getRecipes());
    }

    function handleSort(event) {
        event.preventDefault();
        dispatch(orderByName(event.target.value));
        setCurrentPage(1);
        setOrder(`ordenado ${event.target.value}`);
    }

    function handlePuntuation(event) {
        event.preventDefault();
        dispatch(orderByPuntuation(event.target.value));
        setCurrentPage(1);
        setOrder(`ordenado ${event.target.value}`);
    }

    function handleFilterTypeDiet(event) {
        dispatch(filterRecipesByTypeDiet(event.target.value));
    }

    return (
        <div>
            <NavLink to='/recipe'>Crear Receta</NavLink>
            <h1>PROYECTO FOOD</h1>
            <button onClick={(event) => handleClick(event)}>
                cargar todas las recetas
            </button>
            <Filter
                handleSort={handleSort}
                handlePuntuation={handlePuntuation}
                handleFilterTypeDiet={handleFilterTypeDiet}
            />
            {
                allRecipes && allRecipes.map(element => {
                    <Recipe name={element.name} imagen={element.imagen} diets={element.diets}/>
                    })
                }
        </div>
    )
}