<script>
import { obtenerUsuarioPorId } from '../services/usuarios'

export default {
  name: 'PerfilAdmin',
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
    </template>
  </div>
</template>
