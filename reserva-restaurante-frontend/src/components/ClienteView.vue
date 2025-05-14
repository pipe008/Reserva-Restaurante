<template>
  <div class="cliente-container">
    <div class="contenido">
      <h1>Bienvenido, Cliente</h1>
      <p>¿Listo para reservar en tu restaurante preferido?</p>
      <div class="acciones">
        <button @click="iniciarSesion">Iniciar sesión</button>
        <button @click="registrarse">Registrarse</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClienteView",
  methods: {
    iniciarSesion() {
      this.$router.push('/login');
    },
    registrarse() {
      this.$router.push('/registro');
    }
  }
};
</script>

<style scoped>
.cliente-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092') no-repeat center center;
  background-size: cover;
  padding: 20px;
  color: #fff;
}

.contenido {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 25px;
}

.acciones button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #e67e22;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

.acciones button:hover {
  background-color: #d35400;
}
</style>
