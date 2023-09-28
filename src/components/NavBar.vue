<script>
export default {
  name:"NavBar",

}
</script>
<template>
  <header class="flex gap-8 items-center p-4 bg-principal text-white">
    <div>
      <div class="mx-6 w-[280px] h-[80px]">
        <img src="./../../public/img/logo.png" alt="logo del rincon sustentable" class=" w-screen my-2  ">
        <h1 class="text-[0px]" >Dhara</h1>
      </div>
    </div>
    <nav>
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
    </nav>
  </header>
</template>
