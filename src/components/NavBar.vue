<script>
import { subscribeToAuth, logout } from '../services/auth';
import { obtenerUsuarioPorId } from '../services/usuarios';
import { initTE, Collapse } from "tw-elements";


export default {
  name: "NavBar",
  data() {
    return {
      usuario: {
        id: '',
        email: '',
      },
      usuarioLog: {}
    }
  },
  methods: {
    cerrarSesion() {
      logout().then(() => {
        this.$router.push('/')
      })
    }
  },
  async mounted() {
    subscribeToAuth(async usuario => {
      this.usuario = { ...usuario };
      this.usuarioLog = await obtenerUsuarioPorId(this.usuario.id);
    })
    // inicializo componente de tailwind
    initTE({ Collapse });

  },
}

</script>
<template>
  <header>
    <!-- <div>
      <div class="mx-6 w-[280px] h-[80px]">
        <img src="/img/logo.png" alt="logo del rincon sustentable" class=" w-screen my-2  ">
        <h1 class="text-[0px]">Dhara</h1>
      </div>
    </div> -->
    <!-- Main navigation container -->
    <nav
      class="relative flex w-full flex-nowrap items-center justify-between bg-principal py-2 text-white shadow-lg lg:flex-wrap lg:justify-start lg:py-4"
      data-te-navbar-ref>
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div class="ml-2">
          <a href=""><img src="/img/logo.png" alt="logo de Dhara" class="my-2"><router-link to="/"></router-link></a>
          <h1 class="text-[0px]">Dhara</h1>
        </div>
        <!-- Hamburger button for mobile view -->
        <button
          class="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-white lg:hidden"
          type="button" data-te-collapse-init data-te-target="#navbarSupportedContent2"
          aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
          <!-- Hamburger icon -->
          <span class="[&>svg]:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
              <path fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>

        <!-- Collapsible navbar container -->
        <div class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent2" data-te-collapse-item>
          <!-- Left links -->
          <ul class="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row" data-te-navbar-nav-ref>
            <!-- Home link -->
            <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
              <a class="lg:px-2 hover:text-verde/90 dark:hover:text-verde" aria-current="page" href="#"
                data-te-nav-link-ref><router-link to="/">Home</router-link></a>
            </li>
            <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
              <a class="lg:px-2 hover:text-verde/90 dark:hover:text-verde" aria-current="page" href="#"
                data-te-nav-link-ref><router-link to="/cursos">Cursos</router-link></a>
            </li>
            <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
              <a class="lg:px-2 hover:text-verde/90 dark:hover:text-verde" aria-current="page" href="#"
                data-te-nav-link-ref> <router-link to="/chat">Chat</router-link></a>
            </li>

            <!-- INICIO Botones que serán visibles cuando NO haya un usuario logueado  -->
            <template v-if="usuario.id === null">
              <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                <a class="lg:px-2 hover:text-verde/90 dark:hover:text-verde" aria-current="page" href="#"
                  data-te-nav-link-ref> <router-link to="/registro">Registro</router-link></a>
              </li>
              <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                <a class="lg:px-2 hover:text-verde/90 dark:hover:text-verde" aria-current="page" href="#"
                  data-te-nav-link-ref><router-link to="/iniciar-sesion">Iniciar Sesión</router-link></a>
              </li>
            </template>

            <!-- FIN Botones que serán visibles cuando NO haya un usuario logueado -->
            <!-- INICIO Botones que serán visibles cuando SI haya un usuario logueado -->
            <template v-else>
              <!-- inicio visible si el usuario es admin -->
              <template v-if="usuarioLog.rol === 'admin'">
                <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                  <a class="lg:px-2 hover:text-verde/90 dark:hover:text-verde" aria-current="page" href="#"
                    data-te-nav-link-ref><router-link to="/perfil-admin">Panel Admin</router-link></a>
                </li>
              </template>
              <!-- FIN visible si el usuario es admin -->
              <!-- INICIO visible si el usuario es usuario -->
              <template v-else>
                <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                  <a class="lg:px-2 hover:text-verde/90 dark:hover:text-verde" aria-current="page" href="#"
                    data-te-nav-link-ref><router-link :to="`/perfil-usuario/${usuario.id}`">Panel Usuario</router-link></a>
                </li>
              </template>
              <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                <form action="#" @submit.prevent="cerrarSesion">
                  <button type="submit">{{ usuario.email }} (Cerrar sesión)</button>
                </form>
              </li>
            </template>
            <!-- FIN visible si el usuario es usuario -->
            <!-- FIN Botones que serán visibles cuando SI haya un usuario logueado -->
          </ul>
        </div>
      </div>
    </nav>

  </header>
</template>

