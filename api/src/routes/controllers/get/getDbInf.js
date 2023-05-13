const { Recipe, Diets } = require("../../../db");

const getDbInf = async () => {
    return await Recipe.findAll({
        include:{
            model: Diets,
            attributes:['name'],
            through:{
                attributes:[]
            },
        }
    })
};
module.exports = getDbInf;