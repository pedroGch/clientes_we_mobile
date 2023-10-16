<script>
import { subscribeToAuth, logout } from '../services/auth';

export default {
    name: "NavBar",
    data() {
    return {
      usuario: {
        id: '',
        email: ''
      },
    }
  },
  methods:{
    cerrarSesion(){
      logout().then(() =>{
        this.$router.push('/')
      })
    }
  },
  mounted() {
    subscribeToAuth(usuario => {
        this.usuario = {...usuario};
    })
  },
}

</script>
<template>
  <header class="flex gap-8 items-center p-4 bg-principal text-white justify-between">
    <div>
      <div class="mx-6 w-[280px] h-[80px]">
        <img src="/img/logo.png" alt="logo del rincon sustentable" class=" w-screen my-2  ">
        <h1 class="text-[0px]">Dhara</h1>
      </div>
    </div>
    <nav class="flex drop-shadow-xl items-center ">
      <div>
        <ul class="flex gap-4">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/cursos">Cursos</router-link>
          </li>
          <li>
            <router-link to="/chat">Chat</router-link>
          </li>
          <!-- INICIO Botones que serán visibles cuando NO haya un usuario logueado -->
          <template v-if="usuario.id === null">
            <li>
              <router-link to="/registro">Registro</router-link>
            </li>
            <li>
              <router-link to="/iniciar-sesion">Iniciar Sesión</router-link>
            </li>
          </template>
          <!-- FIN Botones que serán visibles cuando NO haya un usuario logueado -->
          <!-- INICIO Botones que serán visibles cuando SI haya un usuario logueado -->
          <template v-else>
            <li>
              <router-link to="/perfil-admin">Panel Admin</router-link>
            </li>
            <li>
              <form action="#" @submit.prevent="cerrarSesion">
                <button type="submit">{{usuario.email}} (Cerrar sesión)</button>
              </form>
            </li>
          </template>
          <!-- FIN Botones que serán visibles cuando SI haya un usuario logueado -->

        </ul>
      </div>

    </nav>
  </header>
</template>
