

const buildPerson = ( {name, birthday} ) => {
    return {
        id: new Date().getTime(),
        name,
        birthday,
        age: new Date().getFullYear() - new Date(birthday).getFullYear()
    }
}



module.exports = {
    buildPerson
}