const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.ReservayaBackApi.getUser(userId)
            else
                return null
        },
    },

};
module.exports = usersResolver;