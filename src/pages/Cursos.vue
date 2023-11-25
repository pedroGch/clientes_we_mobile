<script>
import BaseH2 from '../components/BaseH2.vue';
import BaseButton from '../components/BaseButton.vue';
import { cargarProductos } from '../services/productos';
import Loader from '../components/Loader.vue';

export default {
  name: "Cursos",
  components: {
    BaseH2,
    BaseButton,
    Loader,
  },
  data() {
    return {
      isLoading: true,
      productos: []
    };
  },
  mounted() {
    // Llama a la función cargarProductos para obtener el array de productos
    cargarProductos(productos => {
      this.productos = productos;
      this.isLoading = false;
    });
  }
};

</script>

<template>
  <div class="">

    <div class="text-center mt-16 mb-16">
      <BaseH2>Cursos</BaseH2>
    </div>

    <div class="mb-16 text-center font-tipografiaTitulares font-bold lg:text-2xl lg:px-60">
      <p>Nuestros cursos están diseñados para enriquecer tu vida, ayudándote a explorar tu creatividad,
        encontrar la serenidad y conectarte con tu fluidez interior. ¡No dudes en inscribirte en el curso que más te
        llame la atención y comenzar tu viaje con Dhara!</p>
    </div>

    <template v-if="!isLoading">
      <div class="mx-auto max-w-screen-xl">
        <div class="">
          <div class="flex flex-wrap justify-around">
            <div class="py-4 max-w-sm rounded overflow-hidden shadow-lg" v-for="producto in productos" :key="producto.id">
              <img class="" src="../../public/img/curso1.jpg" alt="imagen de persona pintando mandalas">
              <div class="px-6 py-4">
                <h3 class="font-bold text-xl mb-2">Curso: "{{ producto.nombre }}"</h3>
                <p class="text-gray-700 text-base">
                  Precio: ${{ producto.precio }}
                </p>
                <p class="text-gray-700 text-base">
                  Stock disponible: {{ producto.cupo }} plazas
                </p>
                <BaseButton>
                  <router-link :to="'/detalles-curso/' + producto.id">Ver más</router-link>
                </BaseButton>
              </div>
            </div>
          </div>

        </div>
      </div>
    </template>
    <template class="flex justify-center" v-else>
      <Loader class="" />
    </template>



  </div>

</template>
