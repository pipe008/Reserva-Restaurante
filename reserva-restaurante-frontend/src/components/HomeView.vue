<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl text-center">
      <h1 class="text-4xl font-bold mb-4">¡Bienvenido, {{ nombreUsuario }}!</h1>
      <p class="text-lg text-gray-700 mb-8">Selecciona una opción para continuar:</p>

      <div class="flex flex-col gap-6">
        <button @click="irAReservas" class="w-full p-4 bg-red-500 text-white rounded-md text-xl hover:bg-red-600">
          Reservar Mesa
        </button>
        <button @click="irARegistro" class="w-full p-4 bg-red-500 text-white rounded-md text-xl hover:bg-red-600">
          Registrar Usuario
        </button>
        <button @click="logout" class="w-full p-4 bg-red-500 text-white rounded-md text-xl hover:bg-red-600">
          Cerrar Sesión
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      nombreUsuario: ''
    }
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.nombreUsuario = user.nombre
    } else {
      this.$router.push('/login')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user')
      this.$router.push('/login')
    },
    irAReservas() {
      this.$router.push('/reservas')
    },
    irARegistro() {
      this.$router.push('/registro')
    }
  }
}
</script>