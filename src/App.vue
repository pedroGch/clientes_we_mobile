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
  <main>
    <nav-bar></nav-bar>
    <div class="container h-full m-auto p-4">
      <router-view></router-view>
    </div>
    <footer-component></footer-component>
  </main>
</template>


