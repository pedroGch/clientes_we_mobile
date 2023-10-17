<script>
import BaseH2 from '../components/BaseH2.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseInput from '../components/BaseInput.vue';

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
        titulo: '',
        descripcion: '',
        precio: '',
        cupo: ''
      },
      errors: {
        titulo: '',
        descripcion: '',
        precio: '',
        cupo: ''
      }
    }
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.curso.titulo) {
        this.errors.titulo = 'El título es requerido.';
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
        // Realiza el envío del formulario o las acciones necesarias
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
          <BaseLabel for="titulo"></BaseLabel>
          <BaseInput type="text" name="titulo" id="titulo" placeholder="Título" v-model="curso.titulo" />
          <p v-if="errors.titulo" class="error-message">{{ errors.titulo }}</p>

          <BaseLabel for="descripcion"></BaseLabel>
          <BaseInput type="text" name="descripcion" id="descripcion" v-model="curso.descripcion" />
          <p v-if="errors.descripcion" class="error-message">{{ errors.descripcion }}</p>

          <BaseLabel for="precio"></BaseLabel>
          <BaseInput type="number" name="precio" id="precio" v-model="curso.precio" />
          <p v-if="errors.precio" class="error-message">{{ errors.precio }}</p>

          <BaseLabel for="cupo"></BaseLabel>
          <BaseInput type="number" name="cupo" id="cupo" v-model="curso.cupo" />
          <p v-if="errors.cupo" class="error-message">{{ errors.cupo }}</p>

          <BaseButton type="submit">Editar</BaseButton>
        </form>
      </div>

    </div>
  </div>
</template>
