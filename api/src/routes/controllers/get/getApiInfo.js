const axios = require('axios');
require('dotenv').config();
// const formateRecipe = require("../../helpers/formateRecipes");
const { API_KEY } = process.env;
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=5&addRecipeInformation=true`;

const getApiInfo = async () => {
        const apiUrl = await axios.get(url)
        const apiInfo = await apiUrl.data.results.map( data => {
            return {
                id:data.id,
                name:data.title,
                imagen:data.image,
                summary:data.summary,
                healthScore: data.healthScore,
                process: data.analyzedInstructions,
                diets: data.diets,
                vegetarian: data.vegetarian,
                vegan: data.vegan,
                glutenFree: data.glutenFree
            } 
        });
        return apiInfo
};

module.exports = getApiInfo;



//const url =`https://api.spoonacular.com/recipes/complexSearch?apiKey=8cbdbbb665bc48bcb85204318ac55e6c&number=100&addRecipeInformation=true`;