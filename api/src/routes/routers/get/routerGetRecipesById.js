const { Router } = require('express');
const router = Router();
const getRecipeById = require('../../controllers/get/getRecipeByID');

router.get('/recipes/:id', async (req, res) => {
    const { id } = req.params; // Obtener el id de la ruta
    const recipe = await getRecipeById(id); // Pasar el id al controlador

    if (recipe && !recipe.error) {
        res.status(200).json(recipe);
    } else if (recipe && recipe.error) {
        res.status(400).json({ error: recipe.error });
    } else {
        res.status(404).send('No se encuentra esa receta');
    }
});

// router.get('/recipes/:id', async (req, res) => {
//     const { id } = req.params; // Obtener el id de la ruta
//     const recipe = await getRecipeById(id); // Pasar el id al controlador
//     if (recipe) {
//         res.status(200).json(recipe);
//     } else {
//         res.status(404).send('No se encuentra esa receta');
//     }
// });

module.exports = router;
