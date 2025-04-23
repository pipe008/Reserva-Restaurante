<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h1 class="title">Bienvenido</h1>
      <p class="subtitle">Inicia sesión para reservar tu mesa</p>
      <form @submit.prevent="login">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" placeholder="ejemplo@correo.com" required />

        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" placeholder="Tu contraseña" required />

        <button type="submit">Ingresar</button>
      </form>
      <p class="register-text">
        ¿No tienes cuenta? <router-link to="/registro">Regístrate aquí</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    LoginView() {
      
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  background-image: url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092'); /* Imagen fondo restaurante */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 90%;
  text-align: center;
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: #8B0000; /* Vino tinto */
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
}

label {
  text-align: left;
  font-weight: 500;
  color: #555;
}

input {
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
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

.register-text {
  margin-top: 15px;
  color: #555;
}

.register-text a {
  color: #8B0000;
  font-weight: bold;
  text-decoration: none;
}

.register-text a:hover {
  text-decoration: underline;
}
</style>

