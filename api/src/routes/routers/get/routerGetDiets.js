const { Router } = require('express');
const router = Router();
const controllerGetDiets = require('../../controllers/get/controllerGetDiets')


router.get('/diets', async (req, res) => {
    const allDiets = await controllerGetDiets();
    res.status(200).json(allDiets)
})


module.exports = router;