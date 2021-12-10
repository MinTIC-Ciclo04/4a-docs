<template>
  <div class="Reserva">

    <div class="container_Reserva">
      <h2>Reserva</h2>
      <form v-on:submit.prevent="createReserva" >
                <input type="text" v-model="reserva.idres" placeholder="ID Hotel">
                <br>
                
                <input type="text" v-model="reserva.nombreHotel" placeholder="Nombre Hotel">
                <br>
                
                <input type="text" v-model="reserva.ciudad" placeholder="Ciudad">
                <br>

                <input type="Date" v-model="reserva.fechaIn" placeholder="Fecha Ingreso">
                <br>

                <input type="Date" v-model="reserva.fechaOut" placeholder="Fecha Salida">
                <br>

                <input type="text" v-model="reserva.habitacion" placeholder="N° Habitación">
                <br>

                <input type="number" v-model="reserva.valorHabitacion" placeholder="Valor Habitación">
                <br>
                <button type="submit">Reservar</button>
                </form>
    </div>
  </div>

</template>


<script>
import gql from "graphql-tag";

export default {
  name: "createReserva",

  data: function () {
    return {
    reserva:{
    idres: "",
    nombreHotel: "",
    ciudad: "",
    fechaIn: "",
    fechaOut: "",
    habitacion: "",
    valorHabitacion: 0,
      },
      };
    },
    

methods: { 
  createReserva: async function() {
    
      await this.$apollo
      
        .mutate({
          mutation: gql`
            mutation($reserva: Reserva!) {
              createReserva(reserva: $reserva) {
                refresh
                access
                
              }
            }
          `,
          variables: {
            reserva: this.reserva,
            
          },
        })
        .then((result) => {
          alert(result);
          let dataLogIn = {
            idres: this.reserva.idres,
            token_access: result.data.createReserva.access,
            token_refresh: result.data.createReserva.refresh,
            
          };

          this.$emit("completedReserva", dataLogIn);
        })
        .catch((error) => {
          alert("No hay habitaciones disponibles");
          });
        
  }
  },


}
</script>


/*<style>
.Reserva{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom , #0230fc, white);
        background-image: url("../assets/hotel-room-1217627.jpg");
        background-size: 100%;
        background-position: 0%;
        
    }

    .container_Reserva {
        
        border-radius: 20px;
        width: 25%;
        height: 90%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom right , #0230fc, white);
    }

    .Reserva h2{
        color: #f9fbfc;

    }

    .Reserva form{
        width: 70%;
        
    }

    .Reserva input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border-radius: 20px;

        
    }

    .Reserva button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius:20px;
        padding: 10px 25px;
        margin: 5px 0;
    }

    .Reserva button:hover{
        color: #E5E7E9;
        background: #fc6501;
        border: 1px solid #283747;
    }
</style>