require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Recipe, Diets } = require('../../../db');
//const infoDb = require('../../controllers/get/getDbInf')



const getRecipeById = async (id) => {
    let validate = id.includes("-"); // si tiene el guion es porque se encuentra en la base de datos
    let recipe = null;
    if (validate) {
        try {
            recipe = await Recipe.findOne({
                where: { id },
                include: Diets,
              });
              if (!recipe) {
                return { error: "No se encontró la receta en la base de datos" };
              }
              return recipe.toJSON();
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
                    diets: recipeByid.data.diets,
                    vegetarian: recipeByid.data.vegetarian,
                    vegan: recipeByid.data.vegan,
                    glutenFree: recipeByid.data.glutenFree
                };
                return recipe;
            } catch (err) {
                console.log(err);
                return {error: "Ocurrio un problema al buscar el id de la receta, seguramente este id no existe"}
            }
            };
    }

module.exports = getRecipeById;