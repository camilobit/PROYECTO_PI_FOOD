import React from "react";
import './Home.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from "../../redux/actions";
import { NavLink } from 'react-router-dom'
import Filter from '../Filter/Filter'
import Card from '../Card/Card'
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";

export default function Home() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  function handleClick(event) {
    event.preventDefault();
    dispatch(getRecipes());
  }
  
  const allRecipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const [ orden, setOrden ] = useState('')
  
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Crear filas con 3 elementos en cada una
  const rows = [];
  for (let i = 0; i < currentRecipes.length; i += 3) {
    const row = currentRecipes.slice(i, i + 3);
    rows.push(row);
  }

  return (
    <div>
      <Filter 
        setCurrentPage={setCurrentPage}
        setOrden={setOrden}
        orden={orden}
      />

      <div>
      <NavLink to="/recipe">Crear Receta</NavLink>
      </div>
      
      <h1>PROYECTO FOOD</h1>
      
      <div className="paginado">
        
        <Paginado
          key="paginado"
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginado={paginado}
          currentPage={currentPage}
        />
      </div>
      
      <SearchBar/>
      <button onClick={(event) => handleClick(event)}>cargar todas las recetas</button>
      
      {rows.map((row, index) => (
        <div className="row" key={index}>
          {row.map((element) => (
            
            <NavLink to={"/detail/" + element.id} key={element.id}>
              
              <Card name={element.name} imagen={element.imagen} diets={element.diets}/>
            
            </NavLink>
          ))}
        </div>
      ))}
      
      
      <div className="paginado">
        <Paginado
          key="paginado"
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginado={paginado}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
