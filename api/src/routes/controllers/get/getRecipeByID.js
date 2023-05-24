require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Recipe, TypeDiet } = require('../../../db');
//const infoDb = require('../../controllers/get/getDbInf')

const getRecipeById = async (id) => {
  let validate = id.includes("-"); // si tiene el guion es porque se encuentra en la base de datos
  let recipe = null;
  if (validate) {
    try {
      recipe = await Recipe.findOne({
        where: { id },
        include: {
          model: TypeDiet,
          attributes: ['name'],
          through: {
            attributes: []
          },
        }
      });

      if (!recipe) {
        return { error: "No se encontró la receta en la base de datos" };
      }

      // Filtrar las dietas y obtener solo los nombres
      const typeDiets = recipe.typeDiets.map((typeDiet) => typeDiet.name);

      return {
        id: recipe.id,
        name: recipe.name,
        imagen: recipe.imagen,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        process: recipe.process,
        typeDiets: typeDiets, // Utilizar el arreglo filtrado
        createdAt: recipe.createdAt,
        createdInDB: recipe.createdInDB,
        updatedAt: recipe.updatedAt
      };
    } catch (err) {
      console.log(err);
      return { error: "Hubo un error al buscar la receta en la base de datos" };
    }
  } else {
    try {
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      let recipeByid = await axios.get(url);
      recipe = {
        id: recipeByid.data.id,
        name: recipeByid.data.title,
        imagen: recipeByid.data.image,
        summary: recipeByid.data.summary,
        healthScore: recipeByid.data.healthScore,
        process: recipeByid.data.analyzedInstructions,
        typeDiets: recipeByid.data.diets,
        vegetarian: recipeByid.data.vegetarian,
        vegan: recipeByid.data.vegan,
        glutenFree: recipeByid.data.glutenFree
      };
      return recipe;
    } catch (err) {
      console.log(err);
      return { error: "Ocurrio un problema al buscar el id de la receta, seguramente este id no existe" };
    }
  }
}

module.exports = getRecipeById;
