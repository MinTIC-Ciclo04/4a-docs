const { gql } = require('apollo-server');
const bookingTypeDefs = gql`
input Hotel{
    idhotel: String!
    nombreHotel: String!
    ciudad: String!
    cantidadHabitaciones:Int!
    pasadia: Int!
    valorHabitacion: Int!
    valorPasadia: Int!
}
type ReleaseHotel{
    idhotel: String!
    nombreHotel: String!
    ciudad: String!
    cantidadHabitaciones:Int!
    pasadia: Int!
    valorHabitacion: Int!
    valorPasadia: Int!
    }
input Pasadia{
    idpas: String!
    idpasadia: String!
    nombreHotel: String!
    ciudad: String!
    fechaIn: String!
    valorPasadia: Int!
}
type ReleasePasadia{
    idpas: String!
    idpasadia: String!
    nombreHotel: String!
    ciudad: String!
    fechaIn: String!
    valorPasadia: Int!

}
input Reserva {
    idres: String!
    nombreHotel: String!
    ciudad: String!
    fechaIn: String!
    fechaOut: String!
    habitacion: String!
    valorHabitacion:Int!

}
type ReleaseReserva{
    idres: String!
    nombreHotel: String!
    ciudad: String!
    fechaIn: String!
    fechaOut: String!
    habitacion: String!
    valorHabitacion:Int!
    tipo:String
}


extend type Mutation{
    createHotel(hotel:Hotel!):ReleaseHotel!
    createPasadia(pasadia:Pasadia!):ReleasePasadia!
    createReserva(reserva:Reserva!):ReleaseReserva!
    
}

`;
module.exports = bookingTypeDefs;