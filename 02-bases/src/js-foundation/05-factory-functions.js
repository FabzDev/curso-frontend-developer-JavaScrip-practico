const { uuid } = require('../plugins/uuid.plugin');
const { getAge } = require('../plugins/getAge.plugin')

const buildPerson = ( {name, birthday} ) => {
    return {
        id: uuid(),
        name,
        birthday,
        age: getAge(birthday)
    }
}



module.exports = {
    buildPerson
}