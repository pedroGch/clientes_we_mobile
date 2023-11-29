<script>
import { obtenerUsuarioPorId, editarUsuario } from '../services/usuarios'
import Loader from "../components/Loader.vue";
import BaseH2 from "../components/BaseH2.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseInput from "../components/BaseButton.vue";

export default {
  name: 'perfilDeUsuario',
  components: {
    Loader,
    BaseH2,
    BaseButton,
    BaseInput,
  },
  data() {
    return {
      cargando: true,
      editarPefilSeccion: false,
      usuario: {
        id: '',
        email: '',
        nombreUsuario: '',
        genero: ''
      }
    }
  },
  methods: {
    submitForm() {
        editarUsuario(this.usuario)
        this.$router.push('/perfil-usuario/:id')
    },
    editarPefilMostrar() {
      this.editarPefilSeccion = true;
    },
    editarPefilOcultar() {
      this.editarPefilSeccion = false;
    },
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

        <template v-if="!editarPefilSeccion">
          <div class="lg:flex-2">
            <img src="../../public/img/curso2.jpg" alt="Imagen" class="lg:w-2/3 mx-auto mt-6">
          </div>
        </template>

        <div class="lg:flex-1 px-6">
          <p class="my-3 mt-6 text-xl">¡Bienvenido <b>{{ usuario.email }}</b>!</p>

          <p class="my-3 text-xl">Acordate que tenés a tu disposición el chat para consultarnos todas tus dudas.</p>

          <p class="my-3 text-xl">En el siguiente link te invitamos a conocer todos los cursos que tenemos disponibles
            para vos. En caso que desees cambiar tu nombre de usuario y genero, también podras.</p>

          <BaseButton @click="editarPefilMostrar">Editar Perfil</BaseButton>
          <BaseButton>
            <router-link to="/cursos">ver cursos</router-link>
          </BaseButton>
        </div>

        <template v-if="editarPefilSeccion">
          <div class="lg:flex-1 px-6">
            <div class="max-w-md m-auto">
            <p class="my-3 mt-6 text-xl"><b>Editar Perfil</b></p>
            <form action="#" method="POST" id="form-edit" @submit.prevent="submitForm">
          <div class="relative mb-6">
            <label for="nombreUsuario">Nombre de usuario</label>
            <input
              class="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none  dark:text-neutral-200 disabled:bg-gray-200"
              type="text"
              name="nombreUsuario"
              id="nombreUsuario"
              v-model="usuario.nombreUsuario" />
          </div>
          <div class="relative mb-6">
            <label for="genero">Genero</label>
            <input
              class="block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none  dark:text-neutral-200 disabled:bg-gray-200"
              type="text"
              name="genero"
              id="genero"
              v-model="usuario.genero" />
          </div>
          <BaseButton type="submit">Editar</BaseButton>
          <BaseButton @click="editarPefilOcultar">Cancelar</BaseButton>
        </form>
        </div>
        </div>
        </template>
      </div>

    </template>
  </div>
</template>
