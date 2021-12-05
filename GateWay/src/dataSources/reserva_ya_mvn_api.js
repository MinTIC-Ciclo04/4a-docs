const { RESTDataSource } = require('apollo-datasource-rest');
const {bookingUrl} = require('../server');
class BookingAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = bookingUrl;
        console.log(this.baseURL)
    }
    async createHotel(hotel) {
        hotel = new Object(JSON.parse(JSON.stringify(hotel)));
        return await this.post('/hotel', hotel);
    }
    // async idhotelById(idhotel) {
    //     return await this.get(`/hotel/${idhotel}`);
    // }
    async createReserva(reserva) {
        reserva = new Object(JSON.parse(JSON.stringify(reserva)));
        return await this.post('/reserva', reserva);
    }
    // async idresById(idres) {
    //     return await this.get(`/reserva/${idres}`);
    // }
    async createPasadia(pasadia) {
        pasadia = new Object(JSON.parse(JSON.stringify(pasadia)));
        return await this.post('/pasadia', pasadia);
    }
    // async idpasById(idpas) {
    //     return await this.get(`/pasadia/${idpas}`);
    // }

}
module.exports = BookingAPI;