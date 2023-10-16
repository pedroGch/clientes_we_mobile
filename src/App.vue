<script>
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import { subscribeToAuth } from './services/auth';

export default {
  name: "App",
  components: {
    NavBar,
    FooterComponent
  },
  data() {
    return {
      id: null,
      usuario: null,
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
  <div>
    <NavBar></NavBar>
    <main class="container h-full m-auto p-4">
      <router-view
        :usuario="usuario"
        @login="manejarLogin"></router-view>
    </main>
    <footer-component></footer-component>
  </div>
</template>


