const { Router } = require('express');
const router = Router(); 
const getRecipes = require('./routers/get/getRecipes');
const routerGetDiets = require('./routers/get/routerGetDiets');
const routerGetRecipesById = require('./routers/get/routerGetRecipesById')
const routerPost = require('./routers/post/routePost')
const routerDelete = require('./routers/delete/routerDelete')

router.use('/', getRecipes)
router.use('/?name=', getRecipes)
router.use('/', routerGetDiets)
router.use('/', routerGetRecipesById)
router.use('/recipe', routerPost)
router.use('/recipe', routerDelete)


module.exports = router;
