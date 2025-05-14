<template>
    <div class="restaurante-wrapper">
      <div class="restaurante-card">
        <h1 class="title">Registrar Restaurante</h1>
        <p class="subtitle">Ingresa la información del nuevo restaurante</p>
  
        <form @submit.prevent="crearRestaurante">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" v-model="restaurante.nombre" required />
  
          <label for="direccion">Dirección</label>
          <input type="text" id="direccion" v-model="restaurante.direccion" required />
  
          <label for="cantidadMesas">Cantidad de Mesas</label>
          <input type="number" id="cantidadMesas" v-model="restaurante.cantidadMesas" min="1" required />
  
          <label for="telefono">Teléfono</label>
          <input type="tel" id="telefono" v-model="restaurante.telefono" required />
  
          <label for="email">Email</label>
          <input type="email" id="email" v-model="restaurante.email" required />
  
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CrearRestauranteView",
    data() {
      return {
        restaurante: {
          nombre: "",
          direccion: "",
          cantidadMesas: 1,
          telefono: "",
          email: ""
        }
      };
    },
    methods: {
      crearRestaurante() {
        // Aquí iría la lógica para enviar al backend
        console.log("Restaurante registrado:", this.restaurante);
        alert("¡Restaurante registrado exitosamente!");
        // Reset form
        this.restaurante = {
          nombre: "",
          direccion: "",
          cantidadMesas: 1,
          telefono: "",
          email: ""
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .restaurante-wrapper {
    background-image: url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5'); 
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .restaurante-card {
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
    color: #006400;
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
  
  input {
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    width: 100%;
  }
  
  button {
    background-color: #006400;
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
    background-color: #008000;
  }
  </style>
  