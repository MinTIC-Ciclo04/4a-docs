const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.ReservayaBackApi.getUser(userId)
            else
                return null
        },
    },
    Mutation:{
        logIn:(_,{credentials},{dataSources})=>{
            return dataSources.ReservayaBackApi.authRequest (credentials)
        },

        createUser:(_,{user},{dataSources})=>{
            return dataSources.ReservayaBackApi.createUser (user)
        },
        refresh:(_,{refresh},{dataSources})=>{
            return dataSources.ReservayaBackApi.refreshToken (refresh)
        },
    }


};
module.exports = usersResolver;