<script>
import { obtenerUsuarioPorId } from '../services/usuarios';
import BaseH2 from "../components/BaseH2.vue";
import BaseButton from "../components/BaseButton.vue";
import { subscribeToAuth } from '../services/auth';
import { cargarProductos } from '../services/productos';

export default {
  name: 'PerfilAdmin',
  components: {
    BaseButton,
    BaseH2,
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
      <BaseH2>Perfil de Administrador</BaseH2>
      <p>Bienvenido {{ usuario.email }}</p>

      <h3>Administrar cursos disponibles</h3>
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
            <td class="p-3 border-2"><p class="titulo">{{p.nombre}}</p></td>
            <td class="text-sm p-3 border-2">{{p.precio}}</td>
            <td class="p-3 border-2">
              <router-link :to="`/editar-curso/${p.id}`">
                <BaseButton type="submit">Editar</BaseButton>
              </router-link>

              <BaseButton type="button" @click="eliminarProducto(p.id)">Eliminar</BaseButton>

              <router-link :to="`/detalles-curso/${p.id}`">
                <BaseButton type="submit">Ver
                  más</BaseButton>
              </router-link>
            </td>
          </tr>

        </tbody>
      </table>
    </template>
  </div>
</template>
