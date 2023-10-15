// importamos los componentes que vamos a usar en las rutas

import Home from '../pages/Home.vue';
import Cursos from '../pages/Cursos.vue';
import Chat from '../pages/Chat.vue';
import Registro from '../pages/registro.vue';
import IniciarSesion from '../pages/IniciarSesion.vue';
import PerfilAdmin from '../pages/PerfilAdmin.vue';
import { createRouter, createWebHashHistory } from 'vue-router'; // Importamos el router de Vue
import { subscribeToAuth } from '../services/auth';





// Primero definimos la lista de rutas

const routes = [
  {path: '/',               component: Home},
  {path: '/cursos',         component: Cursos},
  {path: '/chat',           component: Chat, meta:{requiresAuth:true}},
  {path: '/registro',       component: Registro},
  {path: '/iniciar-sesion', component: IniciarSesion},
  {path: '/perfil-admin',   component: PerfilAdmin, meta:{requiresAuth:true}},
];




// Creamos el router, pasándole las rutas y el administrador de historia de navegación

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

let user = {
  id: null,
  email: null
}

subscribeToAuth(nuevoUsuario => user = nuevoUsuario)

router.beforeEach((to, from) => {
  if (user.id === null && to.meta.requiresAuth){
    return '/iniciar-sesion'
  }

})
export default router; // Exportamos el router





