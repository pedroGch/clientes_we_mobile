<script>
  import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";

  initTE({
    Dropdown,
    Ripple
  });

  export default {
    name: "NavBar",

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
          <li>
            <router-link to="/registro">Registro</router-link>
          </li>
          <li>
            <router-link to="/iniciar-sesion">Iniciar Sesión</router-link>
          </li>
        </ul>
      </div>
      <div class="relative me-10" data-te-dropdown-ref>
        <button
          class="ms-6 flex items-center whitespace-nowrap rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-principal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-white dark:bg-neutral-800"
          type="button" id="dropdownMenuButton1d" data-te-dropdown-toggle-ref aria-expanded="false" data-te-ripple-init
          data-te-ripple-color="light">

          <p>Nombre Usuario</p>
          <span class="ml-2 w-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
              <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
        <ul
          class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenuButton1d" data-te-dropdown-menu-ref>
          <li>
            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#" data-te-dropdown-item-ref>Mi Perfil</a>
          </li>


          <hr class="my-2 h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200" />
          <li>
            <a class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#" data-te-dropdown-item-ref>Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
