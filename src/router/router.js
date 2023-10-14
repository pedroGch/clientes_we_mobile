// importamos los componentes que vamos a usar en las rutas

import Home from '../pages/Home.vue';
import Cursos from '../pages/Cursos.vue';
import Chat from '../pages/Chat.vue';
import Registro from '../pages/registro.vue';
import IniciarSesion from '../pages/IniciarSesion.vue';
import { createRouter, createWebHashHistory } from 'vue-router'; // Importamos el router de Vue





// Primero definimos la lista de rutas

const routes = [
  {path: '/',           component: Home},
  {path: '/cursos',     component: Cursos},
  {path: '/chat',       component: Chat},
  {path: '/registro',       component: Registro},
  {path: '/iniciar-sesion',       component: IniciarSesion},
];




// Creamos el router, pasándole las rutas y el administrador de historia de navegación

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});


export default router; // Exportamos el router





