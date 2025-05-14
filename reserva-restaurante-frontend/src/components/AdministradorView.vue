<template>
  <div class="admin-container">
    <div class="card">
      <button @click="goBack" class="back-button">← Volver</button>

      <h1 class="title">Panel de Administración</h1>
      <p class="subtitle">Gestión de reservas del día</p>

      <div class="botones-superiores">
        <button
          v-if="usuarioActual.rol === 'administrador'"
          @click="irACrearRestaurante"
          class="crear-btn"
        >
          ➕ Crear Restaurante
        </button>
        <button
          v-if="usuarioActual.rol === 'administrador'"
          @click="irAVerRestaurante"
          class="ver-btn"
        >
          👁️ Ver Restaurante
        </button>
      </div>

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
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in reservas" :key="r.id">
                <td>{{ r.cliente }}</td>
                <td>{{ r.fecha }}</td>
                <td>{{ r.hora }}</td>
                <td>{{ r.personas }}</td>
                <td>
                  <button
                    class="edit-btn"
                    @click="editarReserva(r)"
                    :disabled="!r.permiteEditar"
                    :class="{ 'disabled': !r.permiteEditar }"
                    title="Editar"
                  >
                    ✏️
                  </button>
                  <button
                    class="delete-btn"
                    @click="eliminarReserva(r.id)"
                    :disabled="!r.permiteEliminar"
                    :class="{ 'disabled': !r.permiteEliminar }"
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else>No hay reservas registradas para hoy.</p>
      </section>
    </div>

    <!-- MODAL PARA EDITAR -->
    <div v-if="reservaSeleccionada" class="modal">
      <div class="modal-content">
        <h3>Editar Reserva</h3>
        <label>Cliente:
          <input v-model="reservaSeleccionada.cliente" />
        </label>
        <label>Fecha:
          <input type="date" v-model="reservaSeleccionada.fecha" />
        </label>
        <label>Hora:
          <input type="time" v-model="reservaSeleccionada.hora" />
        </label>
        <label>Personas:
          <input type="number" v-model="reservaSeleccionada.personas" />
        </label>
        <div class="modal-actions">
          <button @click="guardarCambios" class="guardar-btn">💾 Guardar</button>
          <button @click="reservaSeleccionada = null" class="cancelar-btn">❌ Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdministradorView",
  data() {
    return {
      usuarioActual: {
        nombre: "Admin",
        rol: "administrador"
      },
      reservas: [
        {
          id: 1,
          cliente: "Carlos Pérez",
          fecha: "2025-05-13",
          hora: "19:00",
          personas: 2,
          permiteEditar: false,
          permiteEliminar: false
        },
        {
          id: 2,
          cliente: "Lucía Gómez",
          fecha: "2025-05-13",
          hora: "20:30",
          personas: 4,
          permiteEditar: false,
          permiteEliminar: false
        }
      ],
      reservaSeleccionada: null
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    irACrearRestaurante() {
      this.$router.push("/crearrestaurante");
    },
    irAVerRestaurante() {
      this.$router.push("/verrestaurante");
    },
    editarReserva(reserva) {
      if (reserva.permiteEditar) {
        this.reservaSeleccionada = { ...reserva };
      }
    },
    guardarCambios() {
      const index = this.reservas.findIndex(r => r.id === this.reservaSeleccionada.id);
      if (index !== -1) {
        this.reservas.splice(index, 1, this.reservaSeleccionada);
      }
      this.reservaSeleccionada = null;
    },
    eliminarReserva(id) {
      const r = this.reservas.find(r => r.id === id);
      if (r && r.permiteEliminar) {
        this.reservas = this.reservas.filter(r => r.id !== id);
      }
    }
  }
};
</script>

<style scoped>
.admin-container {
  background-image: url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 30px;
  max-width: 1000px;
  margin: auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #4e342e;
}

.subtitle {
  font-size: 1.2rem;
  color: #6d4c41;
  margin-bottom: 20px;
}

.section h2 {
  margin-top: 20px;
  color: #5d4037;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  margin-top: 10px;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #ccc;
  text-align: left;
}

th {
  background-color: #efebe9;
  color: #3e2723;
}

.edit-btn,
.delete-btn,
.guardar-btn,
.cancelar-btn,
.crear-btn,
.ver-btn,
.back-button {
  padding: 8px 12px;
  margin: 4px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.edit-btn {
  background-color: #ffd54f;
}

.delete-btn {
  background-color: #ef5350;
  color: white;
}

.guardar-btn {
  background-color: #66bb6a;
  color: white;
}

.cancelar-btn {
  background-color: #bdbdbd;
}

.crear-btn {
  background-color: #8d6e63;
  color: white;
}

.ver-btn {
  background-color: #a1887f;
  color: white;
}

.back-button {
  background-color: #bcaaa4;
  color: white;
}

.botones-superiores {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  width: 400px;
}
</style>

