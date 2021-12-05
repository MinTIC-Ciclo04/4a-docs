const usersResolver = require('./reservaya_back_resolver');
const bookingResolver = require('./reserva_ya_mvn_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(usersResolver,bookingResolver);
module.exports = resolvers;