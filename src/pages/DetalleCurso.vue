<script>
import BaseH2 from '../components/BaseH2.vue';
import BaseButton from '../components/BaseButton.vue';
import { obtenerProductoPorId } from '../services/productos';
import { compraUsuario, obtenerUsuarioPorId } from '../services/usuarios';
import { getUserId } from '../services/auth';

export default {
  name:"DetalleCurso",
  components: {
    BaseH2,
    BaseButton,
  },
  data(){
    return{
      producto: [],
      usuario: '',
    }
  },
  methods: {
    CompraProducto(){
      // compraUsuario({...this.producto}, this.$route.params.id)
      // Obtiene el ID del usuario en sesión
      const userId = getUserId();
      compraUsuario({...this.producto}, userId)
    },
  },
  async mounted(){
    this.producto = await obtenerProductoPorId(this.$route.params.id);
    this.usuario = await obtenerUsuarioPorId(this.$route.params.id);
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
          <img src="../../public/img/curso1.jpg" alt="Persona pintando mandalas" class="lg:w-1/2">

          <!-- Texto al lado de la imagen -->
          <div class="lg:w-1/2 p-4">
            <h3><BaseH2>{{producto.nombre}}</BaseH2></h3>
            <p class="text-lg text-gray-700">Descripción: {{producto.descripcion}}</p>
            <hr class="m-2">
            <p class="text-lg text-gray-700"><strong>Stock disponible:</strong> {{producto.cupo}} plazas</p>
            <hr class="m-2">
            <p class="text-lg text-gray-700"><strong>Precio:</strong> ${{producto.precio}}</p>
            <hr class="m-2">

            <BaseButton @click="CompraProducto">Comprar</BaseButton>

            <BaseButton>
              <router-link to="/cursos">Volver a tienda</router-link>
            </BaseButton>
          </div>

        </div>
      </div>
  </div>

</div>
</template>
