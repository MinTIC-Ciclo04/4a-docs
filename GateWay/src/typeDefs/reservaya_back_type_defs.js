const { gql } = require('apollo-server');
const reservaYaBackTypeDefs = gql`
type Tokens {
refresh: String!
access: String!
}
type Access {
access: String!
}
input CredentialsInput {
username: String!
password: String!
}
input SignUpInput {
username: String!
password: String!
}
input User {
    username: String!
    password: String!
    nombres: String!
    apellidos: String!
    noIdentificacion: String!
    direccion: String!
    telefono: String!
    email: String!

}
type UserDetail {
id: Int!
username: String!
password: String!


}
type Mutation {
signUpUser(userInput :SignUpInput): Tokens!
logIn(credentials: CredentialsInput!): Tokens!
refresh(refresh: String!): Access!
createUser(user:User):Tokens

}
type Query {
userDetailById(userId: Int!): UserDetail!
}
`;
module.exports = reservaYaBackTypeDefs;