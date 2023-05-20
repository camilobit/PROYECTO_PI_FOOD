const { Recipe, TypeDiet } = require("../../../db");

const getDbInf = async () => {
    return await Recipe.findAll({
        include:{
            model: TypeDiet,
            attributes:['name'],
            through:{
                attributes:[]
            },
        }
    })
};
module.exports = getDbInf;