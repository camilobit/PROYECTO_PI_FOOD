const { Recipe, TypeDiet } = require("../../../db");

const getDbInf = async () => {
    try {
        const recipes = await Recipe.findAll({
        include: {
            model: TypeDiet,
            attributes: ['name'],
            through: {
            attributes: []
            }
        }
    });

    const formattedRecipes = recipes.map(recipe => {
        const diets = recipe.typeDiets.map(typeDiet => typeDiet.name);
        return {
        ...recipe.toJSON(),
        diets
        };
    });

    return formattedRecipes;
    } catch (error) {
        // Manejo del error
        console.error("Error al obtener información de la base de datos:", error);
        throw error; // Lanzar el error para que pueda ser manejado por el código que llama a esta función
    }
};

module.exports = getDbInf;
