<template>
  <div class="reservas-wrapper">
    <div class="reservas-card">
      <h1 class="title">Reserva tu mesa</h1>
      <p class="subtitle">Disfruta de una experiencia gastronómica única</p>

      <form @submit.prevent="reservar">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="reserva.nombre" required />

        <label for="fecha">Fecha</label>
        <input type="date" id="fecha" v-model="reserva.fecha" required />

        <label for="hora">Hora</label>
        <input type="time" id="hora" v-model="reserva.hora" required />

        <label for="personas">Número de personas</label>
        <input type="number" id="personas" v-model="reserva.personas" min="1" required />

        <label for="restaurante">Restaurante</label>
        <select id="restaurante" v-model="reserva.restaurante" required>
          <option value="">Selecciona un restaurante</option>
          <option v-for="restaurante in restaurantes" :key="restaurante.id" :value="restaurante.nombre">
            {{ restaurante.nombre }}
          </option>
        </select>

        <button type="submit">Reservar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservasView",
  data() {
    return {
      reserva: {
        nombre: "",
        fecha: "",
        hora: "",
        personas: 1,
        restaurante: ""
      },
      restaurantes: [
        { id: 1, nombre: "Restaurante Central" },
        { id: 2, nombre: "La Terraza Gourmet" },
        { id: 3, nombre: "Sabores del Mar" }
      ]
    };
  },
  methods: {
    reservar() {
      console.log("Reserva enviada:", this.reserva);
      alert("¡Tu reserva ha sido registrada con éxito!");
    }
  }
};
</script>

<style scoped>
.reservas-wrapper {
  background-image: url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092'); 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reservas-card {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 95%;
  text-align: center;
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: #8B0000;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 16px;
  color: #444;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
}

label {
  font-weight: 500;
  color: #555;
}

input,
select {
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
}

select {
  background-color: white;
}

button {
  background-color: #8B0000;
  color: white;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #a10e0e;
}
</style>

