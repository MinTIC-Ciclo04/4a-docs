const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const ReservayaBackApi = require('./dataSources/reservaya_back_api');
const authentication = require('./utils/authentication');
const BookingAPI = require('./dataSources/reserva_ya_mvn_api');

const server = new ApolloServer({
    context: authentication,
    typeDefs:typeDefs,
    resolvers:resolvers,
    dataSources: () => ({
        ReservayaBackApi: new ReservayaBackApi(),
        BookingAPI:new BookingAPI(),
        
        
    }),
    introspection: true,
    playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});