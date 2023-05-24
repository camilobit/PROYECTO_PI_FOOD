const { Router } = require('express');
const{Recipe,TypeDiet} = require('../../../db')
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
    let dietTypeDb = await TypeDiet.findAll({ where:{ name: typeDiets } })
        createRecipe.addTypeDiet(dietTypeDb)
        res.status(200).send('recipe created')   

    }catch(e){
        next(e)
    }
}});








// const { Router } = require('express');
// const router = Router();
// const { Recipe, TypeDiet } = require('../../../db')


// router.post('/', async (req, res) => {
//     let {
//         name,
//         imagen,
//         summary,
//         healthScore,
//         process,
//         createdInDb,
//         typeDiets
//     } = req.body;

//     let recipeCreated = await Recipe.create({
//         name,
//         imagen,
//         summary,
//         healthScore,
//         process,
//         createdInDb
// })

//     let dietsDb = await TypeDiet.findAll({ 
//         where: { name: typeDiets } 
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