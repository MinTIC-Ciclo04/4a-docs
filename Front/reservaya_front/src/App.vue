<template>

  <div id="app" class="app">

    <div class="header">
      <img src="./assets/res.png" alt="Logo">

      <h1> !Viaja en familia¡ </h1>
      <nav>
        <button v-if="is_auth" v-on:click="loadHome">Inicio </button>
        <button v-if="is_auth" v-on:click="loadReserva"> Reserva </button>
        <button v-if="is_auth" v-on:click="loadPasadia"> Pasadia </button>
        <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadLogIn" > Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadSignUp" > Registrarse </button>
      </nav>
    </div>
    

    <div class="main-component">
      <router-view  
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
      >
      </router-view>
    </div>
    

    <div class="footer">
      <h5> Reserva Ya Todos los derechos reservados. created by grupo 7 P72C4DW Mision Tic  </h5>
    </div>

  </div>

</template>


<script>
export default {
  name: 'App',

  computed: {
    is_auth: {
      get: function() {
        return this.$route.meta.requiresAuth;
      },
      set: function() { }
    }
  },

  methods:{

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },

    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    completedLogIn: function(data) {
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.loadHome();
    },

    completedSignUp: function(data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },

     completedReserva: function(data) {
      alert("Reserva realizada con éxito");
      this.completedReserva(data);
      },

    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    loadReserva: function () {
      this.$router.push({ name: "reserva" });
    },

    loadPasadia: function(){
      this.$router.push({ name: "pasadia" });
    },

    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.loadLogIn();
    },
  }
}

</script>



<style>

  body{
    margin: 0 0 0 0;
    background: linear-gradient(to top right, #0230fc, white);
  }

  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh; 
    min-height: 100px;

    background: linear-gradient(to top  , #0230fc, white);
    color:#E5E7E9  ;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header h1{
    width: 20%;
    text-align: center;
  }

  .header nav {
    height: 100%;
    width: 30%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 20px;
  }

  .header nav button{
    color: #E5E7E9;
    background: #fc6501;
   

    border-radius: 20px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }

  
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;

    background: #FDFEFE ;
  }

 
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 5vh;
    min-height: 100px; 

    background: linear-gradient(to bottom  , #3b5cf0, rgb(250, 184, 3));
    color: #062bff;

  }

  .footer h5{
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>