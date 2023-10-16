<script>
import {obtenerUsuarioPorId} from '../services/usuarios'
import { enviarMensajePrivado, suscribirAChatPrivado } from '../services/ChatPrivado';
import { subscribeToAuth } from '../services/auth';
import { dateToString } from '../helpers/date';
import BaseButton from "../components/BaseButton.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import Loader from "../components/Loader.vue";

export default{
  name: 'chatPivado',
  components: {Loader, BaseButton, BaseLabel, BaseInput},
  data() {
    return{
      cargando: true,
      usuario:{
        id: '',
        email:''
      },
      authUsuario:{
        id: '',
        email:''
      },
      unsubscribeAuth: () => {},
      nuevoMensaje:{
        mensaje:''
      },
      cargandoMensajes: true,
      mensajes:[],
      unsubscribeMessages: () => {},
    }
  },
  methods:{
    manejadorEnvioMensaje(){
      enviarMensajePrivado({
        senderId:this.authUsuario.id,
        receiverId:this.usuario.id,
        message: this.nuevoMensaje.mensaje
      })
      this.nuevoMensaje.mensaje = ''
    },
    formatoDia(fecha){
      return dateToString(fecha)
    }
  },
  async mounted(){
    this.cargando = true

    this.usuario = await obtenerUsuarioPorId(this.$route.params.id)
    this.unsubscribeAuth = subscribeToAuth(usuario => this.authUsuario = usuario)
    this.cargando = false

    this.cargandoMensajes = true
    this.unsubscribeMessages = await suscribirAChatPrivado({
      senderId:   this.authUsuario.id,
      receiverId: this.usuario.id
    },
    (mensajesNuevos) => this.mensajes = mensajesNuevos)
    this.cargandoMensajes = false
  },
  unmounted(){
    this.unsubscribeAuth()
    this.unsubscribeMessages()
  }
}
</script>

<template>
  <div>
    <template v-if="cargando">
      <Loader  />
    </template>
    <template v-else>

          <div class="modal-container w-[100%] h-[100%]  mx-auto overflow-y-auto">
              <!-- Contenido del modal -->
              <div class="modal-content py-4 text-left px-6">
                  <div class="flex justify-between items-center pb-3">
                      <p class="text-2xl font-bold">Chatea con {{usuario.email}}</p>
                  </div>
                  <div class="h-[400px]">
                    <div class="h-[80%]">

                      <div v-for="mensaje in mensajes" :key="mensaje.id"
                        :class="
                          {
                            'bg-gray-100': mensaje.senderId !== authUsuario.id,
                            'bg-green-200': mensaje.senderId === authUsuario.id,
                          }"
                      >
                        <div class="p-2 my-3">
                          {{mensaje.message}}
                        </div>
                        <div class="text-right">{{formatoDia(mensaje.created_at || 'enviado...')}}</div>
                      </div>
                    </div>

                  </div>
              </div>
              <div class="modal-footer px-6 w-[100%]">
                <form action="" class="flex justify-between" @submit.prevent="manejadorEnvioMensaje">
                  <BaseInput type="text" placeholder="Ingresá tu mensaje" id="message" name="message" v-model="nuevoMensaje.mensaje"/>
                  <BaseButton ></BaseButton>
                </form>
              </div>
          </div>
    </template>
  </div>
</template>
