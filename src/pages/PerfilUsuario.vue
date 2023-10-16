<script>
import {obtenerUsuarioPorId} from '../services/usuarios'
import Loader from "../components/Loader.vue";
import BaseH2 from "../components/BaseH2.vue";

export default{
  name: 'perfilDeUsuario',
  components: {
    Loader,
    BaseH2,
  },
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
      <BaseH2>perfil de {{usuario.email}}</BaseH2>
    </template>
  </div>
</template>
