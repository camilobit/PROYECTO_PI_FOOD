import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { recipesApiNew } from '../../redux/actions';



export default function FormApi() {
  const dispatch = useDispatch();
  const recipeData = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(recipesApiNew());
  }, [dispatch]);
    // console.log(recipeData.results);

  const allRecipes = async () => {
    const info = await recipeData.results;
    const apiInfo = info.map(data => {
      return {
        id: data.id,
        name: data.title,
        diets: data.diets,
        imagen: data.image,
        summary: data.summary,
        healthScore: data.healthScore,
        process: data.analyzedInstructions,
        vegetarian: data.vegetarian,
        vegan: data.vegan,
        glutenFree: data.glutenFree
      };
    });
    console.log(apiInfo);
    return allRecipes;
  };


  

  return (
   <div>
      </div>
    
  );
}
// este componente tiene la funcionalidad o tenia de crear una api desde el front para acceder a la informacion es decir que el clinete mismo desde el front configure la apikey  