<script>
import { obtenerUsuarioPorId } from '../services/usuarios';
import BaseH2 from "../components/BaseH2.vue";
import BaseButton from "../components/BaseButton.vue";
import Loader from "../components/Loader.vue";
import { subscribeToAuth } from '../services/auth';
import { cargarProductos, deleteProducto } from '../services/productos';

export default {
  name: 'PerfilAdmin',
  components: {
    BaseButton,
    BaseH2,
    Loader
  },
  props:{
    id: String
  },
  data() {
    return {
      cargando: true,
      usuario: {
        id: '',
        email: ''
      },
      usuarioLog: {
        id: '',
        email: ''
      },
      productos: [],
      unsuscribeProductos: () => {},
      showConfirmationModal: false,
      productoAEliminar: null,
    }
  },
  async mounted() {
    subscribeToAuth(usuario => {
      this.usuarioLog = {...usuario};
    })
    this.cargando = true
    this.usuario = await obtenerUsuarioPorId(this.usuarioLog.id)
    this.cargando = false

    cargarProductos(productos => {this.productos = productos} )
  },
  methods:{
    eliminarProducto(id){
      deleteProducto(id)
    },

    mostrarModalConfirmacion(producto) {
      this.productoAEliminar = producto;
      this.showConfirmationModal = true;
    },

    cancelarEliminacion() {
      this.showConfirmationModal = false;
      this.productoAEliminar = null;
    },

    confirmarEliminacion() {
      if(this.productoAEliminar){
        deleteProducto(this.productoAEliminar.id);
      }
      this.showConfirmationModal = false;
      this.productoAEliminar = null;
    }
  }
}
</script>

<template>
  <div>
    <template v-if="cargando">
      <Loader />
    </template>
    <template v-else>
      <div class="flex flex-col align-middle items-center">
        <BaseH2>Perfil de Administrador</BaseH2>
        <p class="my-4 text-xl">¡Bienvenido <b>{{ usuario.email }}</b>!</p>
        <h3 class="mb-5 font-tipografiaTitulares font-bold text-2xl">Administrar cursos disponibles</h3>
        <table>
          <thead class="border-2">
            <tr>
              <th class="p-3">Título</th>
              <th class="p-3">Precio</th>
              <th class="p-3">Cupo</th>
            </tr>
          </thead>
          <tbody class="border-2">
            <tr class="border-2" v-for="p in productos" :key="p.id">
              <td class="p-3 border-2"><p class="titulo"><b>{{p.nombre}}</b></p></td>
              <td class="text-sm p-3 border-2">{{p.descripcion}}</td>
              <td class="p-3 border-2">
                <router-link :to="`/editar-curso/${p.id}`">
                  <BaseButton type="submit">Editar</BaseButton>
                </router-link>
                <BaseButton type="button"
                @click="mostrarModalConfirmacion(p)"
                >Eliminar</BaseButton>
                <router-link :to="`/detalles-curso/${p.id}`">
                  <BaseButton type="submit">Ver
                    más</BaseButton>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <div v-if="showConfirmationModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="modal-container bg-white w-[400px] mx-auto rounded shadow-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Confirmar Eliminación</h2>
        <p class="mb-4">¿Estás seguro de que deseas eliminar este producto?</p>
        <div class="flex justify-end">
          <BaseButton @click="cancelarEliminacion">Cancelar</BaseButton>
          <BaseButton @click="confirmarEliminacion" class="ml-2">Confirmar</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
