<script>
import {obtenerUsuarioPorId} from '../services/usuarios'
import Loader from "../components/Loader.vue";

export default{
  name: 'perfilDeUsuario',
  components: {Loader},
  data() {
    return{
      cargando: true,
      usuario:{
        id: '',
        email:''
      }
    }
  },
  async mounted(){
    this.cargando = true
    this.usuario = await obtenerUsuarioPorId(this.$route.params.id)
    this.cargando = false
  }
}
</script>

<template>
  <div>
    <template v-if="cargando">
      <Loader  />
    </template>
    <template v-else>
      <h1>perfil de {{usuario.email}}</h1>
    </template>
  </div>
</template>
