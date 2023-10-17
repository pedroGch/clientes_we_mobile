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
      <div >
        <form action="#" method="POST" id="form-edit" @submit.prevent="">
          <BaseLabel for="titulo"></BaseLabel>
          <BaseInput type="text" name="titulo" id="titulo" placeholder="Título" v-model="curso.titulo" required />

          <BaseLabel for="descripcion"></BaseLabel>
          <BaseInput type="text" name="descripcion" id="descripcion" v-model="curso.descripcion" required />

          <BaseLabel for="precio"></BaseLabel>
          <BaseInput type="number" name="precio" id="precio" v-model="curso.precio" required />

          <BaseLabel for="cupo"></BaseLabel>
          <BaseInput type="number" name="cupo" id="cupo" v-model="curso.cupo" required />

          <BaseButton type="submit">Editar</BaseButton>
        </form>
      </div>

    </div>
  </div>


</template>
