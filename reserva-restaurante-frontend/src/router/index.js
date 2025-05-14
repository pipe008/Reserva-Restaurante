import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import ClienteView from '../components/ClienteView.vue';
import AdministradorView from '../components/AdministradorView.vue';
import LoginView from '../components/LoginView.vue';
import RegisterView from '../components/RegisterView.vue';
import ReservasView from '../components/ReservasView.vue';
import CrearRestauranteView from '@/components/CrearRestauranteView.vue';
import VerRestaurante from '@/components/verRestaurante.vue';
import EditarRestaurante from '@/components/editarRestaurante.vue';


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/registro', name: 'registro', component: RegisterView },
  { path: '/reservas', name: 'reservas', component: ReservasView },
  { path: '/cliente', name: 'cliente', component: ClienteView },
  { path: '/administrador', name: 'administrador', component: AdministradorView },
  { path: '/crearrestaurante', name: 'restaurante', component: CrearRestauranteView },
  { path: '/verrestaurante', name: 'verrestaurante', component: VerRestaurante},
  { path: '/editarrestaurante', name: 'editarrestaurante', component: EditarRestaurante}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
