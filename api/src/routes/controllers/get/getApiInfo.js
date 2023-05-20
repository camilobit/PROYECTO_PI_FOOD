const axios = require('axios');
require('dotenv').config();
// const formateRecipe = require("../../helpers/formateRecipes");
const { API_KEY } = process.env;
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10&addRecipeInformation=true`;

const getApiInfo = async () => {
        const apiUrl = await axios.get(url)
        const apiInfo = await apiUrl.data.results.map( data => {
            return {
                id:data.id,
                name:data.title,
                diets: data.diets,
                imagen:data.image,
                summary:data.summary,
                healthScore: data.healthScore,
                process: data.analyzedInstructions,
                vegetarian: data.vegetarian,
                vegan: data.vegan,
                glutenFree: data.glutenFree
            } 
            
        });
        return apiInfo
};

module.exports = getApiInfo;



