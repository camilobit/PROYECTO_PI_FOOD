const { Diets } = require('../../../db')
const getApiInfo = require('./getApiInfo');
const controllerGetDiets = async () => {
    const apiInfo = await getApiInfo();
    const diets = apiInfo.reduce((acc, cur) => {
        return [...acc, ...cur.diets];
    }, []);

    const uniqueDiets = [];
    for (const diet of diets) {
        if (!uniqueDiets.some(el => el.name === diet)) {
        uniqueDiets.push({ name: diet });
    }
    }

    for (const diet of uniqueDiets) {
        await Diets.findOrCreate({ where: { name: diet.name } });
    }

    return uniqueDiets;
};


module.exports = controllerGetDiets;




// const controllerGetDiets = async () => {
//     const apiInfo = await getApiInfo();
//     const diets = apiInfo.reduce((acc, cur) => {
//         return [...acc, ...cur.diets];
//         }, []);
//         return diets;
    
//     };

    // const controllerGetDiets = async () => {
    //     const apiInfo = await getApiInfo();
    //     const diets = apiInfo.reduce((acc, cur) => {
    //       return [...acc, ...cur.diets];
    //     }, []);
      
    //     const uniqueDiets = [];
      
    //     diets.forEach(diet => {
    //       if (!uniqueDiets.some(el => el.name === diet)) {
    //         uniqueDiets.push({ name: diet });
    //       }
    //     });
      
    //     uniqueDiets.forEach(async diet => {
    //       await diet.findOrCreate({ where: { name: diet.name } });
    //     });
      
    //     return uniqueDiets;
    //   };
      




//     const dietsInfo = apiInfo.forEach(recipe => {
//     console.log(recipe.diets);
//     console.log(dietsInfo)
// });
// return dietsInfo;





    // const dietsApi =  await getApiInfo();
    // const arrayOfDiets = dietsApi.data.diets.map(el => el.diets);
    // const dietsEach = arrayOfDiets.map(el => {
    //     for(let i=0; i<el.length; i++) return el[i]})
        
    // dietsEach.forEach(el => {
    //     diets.findOrCreate({
    //         where: { name:el }
    //     })
    // });
    // return dietsEach;    

