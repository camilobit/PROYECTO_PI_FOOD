const { Router } = require('express');
const{ Recipe } = require('../../../db')
const router = Router();


router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  const validIdRegex = /^[A-Za-z0-9-]+$/;

  if (validIdRegex.test(id)) {
    try {
      let recipe = await Recipe.findByPk(id);
      if (recipe) {
        await recipe.destroy();
        res.status(200).json({ message: 'Recipe deleted' });
      } else {
        res.status(404).json({ message: 'Recipe not found' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ message: "Esta receta viene de la API y no debería ser eliminada" });
  }
});

  

module.exports = router;