<script>
import BaseH2 from '../components/BaseH2.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseInput from '../components/BaseInput.vue';
import { obtenerProductoPorId, editarProducto } from '../services/productos';

export default {
  name: "EditarCurso",
  components: {
    BaseH2,
    BaseButton,
    BaseLabel,
    BaseInput
  },
  data() {
    return {
      cargando: true,
      curso: {
        id: '',
        nombre: '',
        descripcion: '',
        precio: '',
        cupo: ''
      },
      errors: {
        nombre: '',
        descripcion: '',
        precio: '',
        cupo: ''
      },
    }

  },
  async mounted(){
    this.curso = await obtenerProductoPorId(this.$route.params.id)
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.curso.nombre) {
        this.errors.nombre = 'El título es requerido.';
      }

      if (!this.curso.descripcion) {
        this.errors.descripcion = 'La descripción es requerida.';
      }

      if (!this.curso.precio) {
        this.errors.precio = 'El precio es requerido.';
      } else if (isNaN(this.curso.precio) || this.curso.precio <= 0) {
        this.errors.precio = 'Ingrese un precio válido.';
      }

      if (!this.curso.cupo) {
        this.errors.cupo = 'El cupo es requerido.';
      } else if (isNaN(this.curso.cupo) || this.curso.cupo <= 0) {
        this.errors.cupo = 'Ingrese un cupo válido.';
      }

      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {
        editarProducto(this.curso)
        this.$router.push('/perfil-admin')
      }
    }
  },
}


</script>

<template>
  <div class="">

    <div>
      <div class="text-center mt-16 mb-16">
        <BaseH2>Editar información del curso</BaseH2>
      </div>
      <div>
        <form action="#" method="POST" id="form-edit" @submit.prevent="submitForm">
          <div class="relative mb-6">
            <label for="nombre">Título</label>
            <BaseInput type="text" name="nombre" id="nombre" v-model="curso.nombre" />
            <div class="mt-1 flex">
                      <svg v-if="errors.nombre" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b0233a" class="h-5 w-5">
                      <path fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd" />
                      </svg>
                    <p v-if="errors.nombre" class="error-message text-red-700">{{ errors.nombre }}</p>
                    </div>
          </div>
          <div class="relative mb-6">
            <label for="descripcion">Descripción</label>
            <BaseInput type="text" name="descripcion" id="descripcion" v-model="curso.descripcion" />
            <div class="mt-1 flex">
                      <svg v-if="errors.descripcion" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b0233a" class="h-5 w-5">
                      <path fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd" />
                      </svg>
                    <p v-if="errors.descripcion" class="error-message text-red-700">{{ errors.descripcion }}</p>
                    </div>
          </div>
          <div class="relative mb-6">
            <label for="precio">Precio</label>
            <BaseInput type="number" name="precio" id="precio" v-model="curso.precio" />
            <div class="mt-1 flex">
                      <svg v-if="errors.precio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b0233a" class="h-5 w-5">
                      <path fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd" />
                      </svg>
                    <p v-if="errors.precio" class="error-message text-red-700">{{ errors.precio }}</p>
                    </div>
          </div>
          <div class="relative mb-6">
            <label for="cupo">Cupo</label>
            <BaseInput type="number" name="cupo" id="cupo" v-model="curso.cupo" />
            <div class="mt-1 flex">
                      <svg v-if="errors.cupo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b0233a" class="h-5 w-5">
                      <path fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd" />
                      </svg>
                    <p v-if="errors.cupo" class="error-message text-red-700">{{ errors.cupo }}</p>
                    </div>
          </div>
          <BaseButton type="submit">Editar</BaseButton>
        </form>
      </div>

    </div>
  </div>
</template>
