const { uuid } = require('../plugins/uuid.plugin');
const { getAge } = require('../plugins/getAge.plugin');
const { httpPlugin } = require('./httpClient.plugin');

module.exports = {
    uuid,
    getAge,
    httpPlugin,
}