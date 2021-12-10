<template>

    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrarse</h2>

            <form v-on:submit.prevent="processSignUp" >
                <input type="text" v-model="user.username" placeholder="Usuario">
                <br>
                
                <input type="password" v-model="user.password" placeholder="Contraseña">
                <br>
                
                <input type="text" v-model="user.nombres" placeholder="Nombres">
                <br>

                <input type="text" v-model="user.apellidos" placeholder="Apellidos">
                <br>

                <input type="text" v-model="user.noIdentificacion" placeholder="Identificacion">
                <br>

                <input type="text" v-model="user.direccion" placeholder="Dirección">
                <br>

                <input type="text" v-model="user.telefono" placeholder="Telefono">
                <br>

                <input type="email" v-model="user.email" placeholder="Correo Electrónico">
                <br>

                <button type="submit">Registrarse</button>
            </form>
        </div>

    </div>

</template>


<script>
import gql from "graphql-tag";

export default {
    name: "createUser",

    data: function() {
        return {
        user: {
            username: "",
            password: "",
            nombres: "",
            apellidos: "",
            noIdentificacion: "",
            direccion: "",
            telefono: "",
            email: "",
        },
        };
    },

  methods: {
    processSignUp: async function() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation($user:User!) {
              createUser(user:$user) {
                refresh
                access
              }
            }
          `,
          variables: {
            user: this.user,
          },
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.createUser.access,
            token_refresh: result.data.createUser.refresh,
          };

          this.$emit("completedSignUp", dataLogIn);
        })
        .catch((error) => {
          alert("ERROR: Fallo en el registro.");
          
        });
        console.error("problema");
    },

  },
}
</script>


<style>

    .signUp_user{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom , #0230fc, white);
        
    }

    .container_signUp_user {
        
        border-radius: 20px;
        width: 25%;
        height: 90%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom right , #0230fc, white);
    }

    .signUp_user h2{
        color: #f9fbfc;

    }

    .signUp_user form{
        width: 70%;
        
    }

    .signUp_user input{
        height: 40px;
        width: 100%;

        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border-radius: 20px;
    }

    .signUp_user button{
        width: 100%;
        height: 40px;

        color: #E5E7E9;
        background: #283747;
        border: 1px solid #E5E7E9;

        border-radius:20px;
        padding: 10px 25px;
        margin: 5px 0;
    }

    .signUp_user button:hover{
        color: #E5E7E9;
        background: #fc6501;
        border: 1px solid #283747;
    }

</style>
