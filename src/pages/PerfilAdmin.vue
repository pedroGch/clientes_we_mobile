<script>
import { obtenerUsuarioPorId } from '../services/usuarios';
import BaseH2 from "../components/BaseH2.vue";
import BaseButton from "../components/BaseButton.vue";

export default {
  name: 'PerfilAdmin',
  components: {
    BaseButton,
    BaseH2,
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

          <tr class="border-2">
            <td class="p-3 border-2"></td>
            <td class="text-sm p-3 border-2"></td>
            <td class="p-3 border-2">
              <form action="" method="GET">
                <BaseButton type="submit">Editar</BaseButton>
              </form>

              <BaseButton type="button" >Eliminar</BaseButton>

              <form action="" method="GET">
                <BaseButton type="submit">Leer
                  más</BaseButton>
              </form>
            </td>
          </tr>

        </tbody>
      </table>
    </template>
  </div>
</template>
