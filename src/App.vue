<script>
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name:"App",
  components: {
    NavBar,
    FooterComponent
  }
}
</script>

<template>
  <div>
    <nav-bar></nav-bar>
    <main class="container h-full m-auto p-4">
      <router-view></router-view>
    </main>
    <footer-component></footer-component>
  </div>
</template>


