<template>
  <div class="restaurante-wrapper">
    <div class="restaurante-card">
      <h1 class="title">Ver Restaurante</h1>
      <p class="subtitle">Información del restaurante registrado</p>

      <form>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="restaurante.nombre" disabled />

        <label for="direccion">Dirección</label>
        <input type="text" id="direccion" v-model="restaurante.direccion" disabled />

        <label for="telefono">Teléfono</label>
        <input type="tel" id="telefono" v-model="restaurante.telefono" disabled />

        <label for="email">Email</label>
        <input type="email" id="email" v-model="restaurante.email" disabled />

        <div class="button-group">
          <button type="button" @click="editar">Editar</button>
          <button type="button" class="eliminar" @click="eliminar">Eliminar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerRestauranteView",
  data() {
    return {
      restaurante: {
        nombre: "La Parrilla de Juan",
        direccion: "Calle 123 #45-67",
        telefono: "3001234567",
        email: "laparrilla@restaurante.com"
      }
    };
  },
  methods: {
    editar() {
      this.$router.push({
        path: "/editarRestaurante",
        query: { ...this.restaurante }
      });
    },
    eliminar() {
      if (confirm("¿Estás seguro de eliminar este restaurante?")) {
        alert("Restaurante eliminado.");
        this.$router.push("/");
      }
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

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
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

button.eliminar {
  background-color: #b22222;
}

button.eliminar:hover {
  background-color: #dc143c;
}
</style>
