<template>
  <div class="Pasadia">

    <div class="container_pasadia">
      <h2>Pasadia</h2>
      <form v-on:submit.prevent="createPasadia" >
                <input type="text" v-model="pasadia.idpas" placeholder="ID Hotel">
                <br>
                
                <input type="text" v-model="pasadia.nombreHotel" placeholder="Nombre Hotel">
                <br>
                
                <input type="text" v-model="pasadia.ciudad" placeholder="Ciudad">
                <br>

                <input type="Date" v-model="pasadia.fechaIn" placeholder="Fecha Ingreso">
                <br>

                <input type="number" v-model="pasadia.valorPasadia" placeholder="Valor Pasadia">
                <br>

                <button type="submit">Comprar Pasadia</button>
                </form>
    </div>
  </div>

</template>


<script>
import gql from "graphql-tag";

export default {
  name: "createPasadia",

  data: function () {
    return {
    pasadia:{
    idpas: "",
    nombreHotel: "",
    ciudad: "",
    fechaIn: "",
    valorPasadia: 0,
      },
      };
    },
    

methods: { 
  createPasadia: async function() {
    
      await this.$apollo
      
        .mutate({
          mutation: gql`
            mutation($pasadia: Pasadia!) {
              createReserva(pasadia: $pasadia) {
                idpas
                idpasadia
                nombreHotel
                ciudad
                fechaIn
                valorPasadia
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
            idpas: this.reserva.idpas,
            token_access: result.data.createPasadia.access,
            token_refresh: result.data.createPasadia.refresh,
            
          };

          this.$emit("completedPasadia", dataLogIn);
        })
        .catch((error) => {
          alert("No hay pasadias disponibles");
          });
        
  }
  },


}
</script>


/*<style>
 .Pasadia{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("../assets/pool-in-paradise-1363196.jpg");
        background-size: 100%;
        background-position: 0%;
        
    }

        .container_pasadia {
        
        border-radius: 20px;
        width: 25%;
        height: 70%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom right , #0230fc, white);
    }

    .Pasadia h2{
        color: #f9fbfc;

    }

    .Pasadia form{
        width: 70%;
        
        
    }

    .Pasadia input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border-radius: 20px;

        
    }

    .Pasadia button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius:20px;
        padding: 10px 25px;
        margin: 5px 0;
    }

    .Pasadia button:hover{
        color: #E5E7E9;
        background: #fc6501;
        border: 1px solid #283747;
    }
</style>