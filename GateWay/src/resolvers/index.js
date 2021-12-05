const usersResolver = require('./reservaya_back_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(usersResolver);
module.exports = resolvers;