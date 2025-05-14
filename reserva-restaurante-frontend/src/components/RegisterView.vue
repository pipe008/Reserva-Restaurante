<template> 
  <div class="register-wrapper">
    <div class="register-card">
      <h1 class="title">Crea tu cuenta</h1>
      <p class="subtitle">Regístrate para reservar en nuestro restaurante</p>

      <form @submit.prevent="register">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="form.nombre" required />

        <label for="apellido">Apellido</label>
        <input type="text" id="apellido" v-model="form.apellido" required />

        <label for="correo">Correo electrónico</label>
        <input type="email" id="correo" v-model="form.correo" required />

        <label for="telefono">Teléfono</label>
        <input type="tel" id="telefono" v-model="form.telefono" required />

        <label for="identificacion">Identificación</label>
        <input type="text" id="identificacion" v-model="form.identificacion" required />

        <label for="contrasena">Contraseña</label>
        <input type="password" id="contrasena" v-model="form.contrasena" required />

        <label for="rol">Rol</label>
        <select id="rol" v-model="form.rol" required>
          <option value="">Selecciona un rol</option>
          <option value="cliente">Cliente</option>
          <option value="admin">Administrador</option>
        </select>

        <button type="submit">Registrarse</button>
      </form>

      <p class="login-text">
        ¿Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        identificacion: "",
        contrasena: "",
        rol: "",
      },
    };
  },
  methods: {
    register() {
      
      console.log("Registrando usuario:", this.form);

      
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.register-wrapper {
  background-image: url('https://images.unsplash.com/photo-1541544741938-0af808871cc0'); 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-card {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  max-width: 450px;
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

.login-text {
  margin-top: 15px;
  color: #555;
  text-align: center;
}

.login-text a {
  color: #8B0000;
  font-weight: bold;
  text-decoration: none;
}

.login-text a:hover {
  text-decoration: underline;
}
</style>
