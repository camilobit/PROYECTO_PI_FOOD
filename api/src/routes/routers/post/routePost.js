const { Router } = require('express');
const{Recipe,Diets} = require('../../../db')
const router = Router();

router.post('/', async (req,res,next) => {
    let {
        name,
        summary,
        imagen,
        healthScore,
        process,
        createdInDb,
        typeDiets
    } = req.body;
    if(!name || !summary) {
        return res.status(400).send('Please, insert a name and a summary to continue!');
    }
    else{
    try{let createRecipe = await Recipe.create({   
            name,
            summary,
            imagen,
            healthScore,
            process,
            createdInDb
    })
    let dietTypeDb = await Diets.findAll({ where:{ name:typeDiets } })
        createRecipe.addDiets(dietTypeDb)
        res.status(200).send('recipe created')   

    }catch(e){
        next(e)
    }
}});

router.delete('/:id',async (req,res) =>{
    const {id} = req.params
    try {
        let recipe = await Recipe.findByPk(id)
        await recipe.destroy()
        res.status(200).send('Recipe deleted')
    } catch (err) {
        res.status(400).send('Recipe not found')
    }
})







// const { Router } = require('express');
// const router = Router();
// const { Recipe, Diets } = require('../../../db')


// router.post('/', async (req, res) => {
//     let {
//         name,
//         imagen,
//         summary,
//         healthScore,
//         process,
//         createdInDb,
//         diets
//     } = req.body;

//     let recipeCreated = await Recipe.create({
//         name,
//         imagen,
//         summary,
//         healthScore,
//         process,
//         createdInDb
// })

//     let dietsDb = await Diets.findAll({ 
//         where: { name: diets } 
//         })
//     recipeCreated.addDiets(dietsDb)
//     res.status(200).send('Personaje creado con exito')
// })
    
module.exports = router;


// model of consult format.json request by body 
// {
// 	"name": "pasta",
// 	"summary": "deliciosa pasta al pesto",
// 	"imagen": "http://imagen",
//   "healthScore": "50",
//   "process": "cocinar, mezclar, servir y disfrutar",
//   "typeDiets":["vegan","vegetarian"]
// }