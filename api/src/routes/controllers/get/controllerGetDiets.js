const { TypeDiet } = require('../../../db')
const getApiInfo = require('./getApiInfo');

const controllerGetDiets = async () => {
    const apiInfo = await getApiInfo();
    const diets = apiInfo.reduce((acc, cur) => {
        return [...acc, ...cur.diets];
    }, []);

    const onlyDiets = [];
    for (const diet of diets) {
        if (!onlyDiets.some(el => el.name === diet)) {
        onlyDiets.push({ name: diet });
    }
    }

    for (const diet of onlyDiets) {
        await TypeDiet.findOrCreate({ where: { name: diet.name } });
    }

    return onlyDiets;
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
      
    //     const onlyDiets = [];
      
    //     diets.forEach(diet => {
    //       if (!onlyDiets.some(el => el.name === diet)) {
    //         onlyDiets.push({ name: diet });
    //       }
    //     });
      
    //     onlyDiets.forEach(async diet => {
    //       await diet.findOrCreate({ where: { name: diet.name } });
    //     });
      
    //     return onlyDiets;
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

