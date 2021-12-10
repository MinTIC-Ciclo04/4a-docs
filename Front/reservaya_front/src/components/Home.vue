<template>
  <div class="information">
    <h1>¡Bienvenido a ReservaYa!</h1>
    <div class="contenido">
      <div class="Reserva1">
        <h2>Reserva</h2>
        <p>
          Bienvenido, En Reserva podrás realizar la compra <br>de las habitaciones
          en el hotel que prefieras
        </p>
        <img src="../assets/reservai.jpeg" alt="reserva">
      </div>
      <div class="Pasadia2">
        <h2>Pasadia</h2>
        <p>
          Bienvenido, En Pasadia podrás realizar la compra de un <br>día único con
          tu familia con nuestras mejores ofertas
        </p>
        <img src="../assets/pasadia.jpeg" alt="reserva">
      </div>
    </div>
  </div>
</template>


<script>
</script>


<style>
.information {
  margin: 0;
  padding: 0%;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #0230fc, white);
}
.contenido {
  margin: 0;
  padding: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.Reserva1 {
  margin: 30px;
  padding: 0%;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  
  
}
.Reserva1 img {
  width: 80%;
  border-radius:20px;
}

.Pasadia2 {
  float: inherit;
  margin: 30px;
  padding: 0%;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
}

.Pasadia2 img {
  width: 80%;
  border-radius:20px;
}

</style>