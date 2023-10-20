<script>
import { obtenerUsuarioPorId } from '../services/usuarios'
import Loader from "../components/Loader.vue";
import BaseH2 from "../components/BaseH2.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  name: 'perfilDeUsuario',
  components: {
    Loader,
    BaseH2,
    BaseButton,
  },
  data() {
    return {
      cargando: true,
      usuario: {
        id: '',
        email: ''
      }
    }
  },
  async mounted() {
    this.cargando = true
    this.usuario = await obtenerUsuarioPorId(this.$route.params.id)
    this.cargando = false
  }
}
</script>

<template>
  <div>
    <template v-if="cargando">
      <Loader />
    </template>
    <template v-else>
      <div class="flex flex-col items-center mt-8">
        <BaseH2 class="mb-3">Perfil de Usuario</BaseH2>

      </div>

      <div class="lg:flex">

        <div class="lg:flex-2">
          <img src="../../public/img/curso2.jpg" alt="Imagen" class="lg:w-2/3 mx-auto mt-6">
        </div>

        <div class="lg:flex-1 px-6">
          <p class="my-3 mt-6 text-xl">¡Bienvenido <b>{{ usuario.email }}</b>!</p>

          <p class="my-3 text-xl">Acordate que tenés a tu disposición el chat para consultarnos todas tus dudas.</p>

          <p class="my-3 text-xl">En el siguiente link te invitamos a conocer todos los cursos que tenemos disponibles
            para vos.</p>

          <BaseButton>
            <router-link to="/cursos">ver cursos</router-link>
          </BaseButton>
        </div>

      </div>

    </template>
  </div>
</template>
