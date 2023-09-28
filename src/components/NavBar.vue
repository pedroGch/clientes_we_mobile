<script>
export default {
  name:"NavBar",

}
</script>
<template>
  <header class="flex gap-8 items-center p-4 bg-slate-200">
    <div>
      <p class="text-2xl">DHARA</p>
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
