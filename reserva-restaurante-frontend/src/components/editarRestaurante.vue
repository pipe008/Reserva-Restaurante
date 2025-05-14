<template>
  <div class="restaurante-wrapper">
    <div class="restaurante-form">
      <h1>Editar Restaurante</h1>
      <form @submit.prevent="guardarCambios">
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input v-model="restaurante.nombre" type="text" id="nombre" />
        </div>

        <div class="form-group">
          <label for="direccion">Dirección:</label>
          <input v-model="restaurante.direccion" type="text" id="direccion" />
        </div>

        <div class="form-group">
          <label for="telefono">Teléfono:</label>
          <input v-model="restaurante.telefono" type="text" id="telefono" />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="restaurante.email" type="email" id="email" />
        </div>

        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurante: {
        nombre: "",
        direccion: "",
        telefono: "",
        email: ""
      }
    };
  },
  mounted() {
    // Simula la carga de datos existentes del restaurante
    this.restaurante = {
      nombre: "La Pizzería",
      direccion: "Calle 123",
      telefono: "555-1234",
      email: "lapizzeria@email.com"
    };
  },
  methods: {
    guardarCambios() {
      console.log("Cambios guardados:", this.restaurante);
      alert("Restaurante actualizado con éxito.");
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

.restaurante-form {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #444;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 6px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
