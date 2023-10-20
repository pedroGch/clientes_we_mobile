<script>
import BaseH2 from '../components/BaseH2.vue';
import BaseButton from '../components/BaseButton.vue';
import { obtenerProductoPorId } from '../services/productos';

export default {
  name:"DetalleCurso",
  components: {
    BaseH2,
    BaseButton,
  },
  data(){
    return{
      producto: []
    }
  },
  async mounted(){
    this.producto = await obtenerProductoPorId(this.$route.params.id)
  }

}
</script>

<template>
<div>

  <div>
    <div class="text-center mt-16 mb-16">
      <BaseH2>Detalles del curso</BaseH2>
    </div>
    <div class="flex">

        <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
          <!-- Imagen -->
          <img src="../../public/img/curso1.jpg" alt="Imagen genérica de persona pintando mandalas" class="lg:w-1/2">

          <!-- Texto al lado de la imagen -->
          <div class="lg:w-1/2 p-4">
            <h3><BaseH2>{{producto.nombre}}</BaseH2></h3>
            <p class="text-lg text-gray-700">Descripción: {{producto.descripcion}}</p>
            <hr class="m-2">
            <p class="text-lg text-gray-700"><strong>Stock disponible:</strong> {{producto.cupo}} plazas</p>
            <hr class="m-2">
            <p class="text-lg text-gray-700"><strong>Precio:</strong> ${{producto.precio}}</p>
            <hr class="m-2">

            <BaseButton class="bg-slate-400">
              <router-link to="#">Comprar</router-link>
            </BaseButton>
            <BaseButton>
              <router-link to="/cursos">Volver a tienda</router-link>
            </BaseButton>
          </div>

        </div>
      </div>
  </div>

</div>
</template>
