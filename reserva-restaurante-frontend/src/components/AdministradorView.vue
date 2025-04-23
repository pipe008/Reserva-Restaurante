<template>
    <div class="admin-container">
      <div class="card">
        <button @click="goBack" class="back-button">← Volver</button>
  
        <h1 class="title">Panel de Administración</h1>
        <p class="subtitle">Gestión de reservas y usuarios</p>
  
        <section class="section">
          <h2>Reservas del Día</h2>
          <div v-if="reservas.length">
            <table>
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Personas</th>
                  <th>Mesa</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="r in reservas" :key="r.id">
                  <td>{{ r.cliente }}</td>
                  <td>{{ r.fecha }}</td>
                  <td>{{ r.hora }}</td>
                  <td>{{ r.personas }}</td>
                  <td>{{ r.mesa }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-else>No hay reservas registradas para hoy.</p>
        </section>
  
        <section class="section">
          <h2>Usuarios Registrados</h2>
          <ul v-if="usuarios.length">
            <li v-for="u in usuarios" :key="u.id">
              {{ u.nombre }} - {{ u.rol }}
            </li>
          </ul>
          <p v-else>No hay usuarios registrados aún.</p>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdministradorView",
    data() {
      return {
        reservas: [],
        usuarios: []
      };
    },
    methods: {
      goBack() {
        this.$router.go(-1); // Va una página atrás en el historial
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-container {
    background-color: #f3f1ef;
    background-image: url('https://example.com/restaurant-background.jpg'); /* Asegúrate de colocar el enlace correcto a la imagen */
    background-size: cover;
    background-position: center;
    padding: 60px 20px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
  
  .card {
    background: rgba(255, 255, 255, 0.8); /* Fondo blanco translúcido */
    padding: 40px;
    border-radius: 16px;
    width: 100%;
    max-width: 900px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .back-button {
    background-color: transparent;
    border: none;
    color: #8B0000;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .back-button:hover {
    text-decoration: underline;
  }
  
  .title {
    color: #8B0000;
    font-size: 30px;
    margin-bottom: 10px;
  }
  
  .subtitle {
    color: #666;
    margin-bottom: 30px;
  }
  
  .section {
    margin-bottom: 40px;
  }
  
  h2 {
    margin-bottom: 15px;
    color: #333;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
  }
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    padding: 8px 0;
    border-bottom: 1px solid #eee;
  }
  </style>
  