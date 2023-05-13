
const getApiInfo = require("./getApiInfo");
const getDbInf = require("./getDbInf")

const getAll = async () => {
    const apiInf = await getApiInfo()
    const dbInf = await getDbInf()
    const infoTotal = apiInf.concat(dbInf);
    return infoTotal;
}
module.exports = getAll;