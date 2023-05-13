const formatRecipes = (data)=> {
    return {
        id:data.id,
        name:data.title,
        image:data.image,
        summary:data.summary,
        healthScore: data.healthScore,
        process: data.analyzedInstructions,
        diets: data.diets,
        vegetarian: data.vegetarian,
        vegan: data.vegan,
        glutenFree: data.glutenFree
        }
    
}

module.exports = formatRecipes;