const bookingResolver = {
    Query: {
        
    },
    Mutation:{ 
        createHotel:(_,{hotel},{dataSources})=>{
            return dataSources.BookingAPI.createHotel(hotel)
        },
        createPasadia:(_,{pasadia},{dataSources})=>{
            return dataSources.BookingAPI.createPasadia(pasadia)
        },
        createReserva:(_,{reserva},{dataSources})=>{
            return dataSources.BookingAPI.createReserva(reserva)
        }
        
    }

};
module.exports = bookingResolver;