<script>
import { loadSnapshot, saveMessage } from '../services/chatAcciones.js';
import { dateToString } from '../helpers/date.js';
import Loader from "../components/Loader.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseH2 from "../components/BaseH2.vue";
import { subscribeToAuth } from '../services/auth';
import { obtenerAdmin, obtenerUsuarioPorId } from '../services/usuarios';

export default{
  name:"chat",
  components: {
    Loader,
    BaseButton,
    BaseLabel,
    BaseInput,
    BaseH2,
},

  data(){
    return{
      isLoading: true,
      isLoading2: true,
      chats:[],
      chatPersonal:{},
      admin: {},
      usuario: {
        id: '',
        email:'',
        rol: '',
        nombreUsuario: '',
        genero: '',
        compras: [],
      },
      usuarioLog: {},
      nuevoMensaje: {
        mensaje: ''
      },
      unsuscribeChat: () => {},
      unsuscribeAuth: () => {},
    }
  },
  async mounted(){
    this.isLoading = true
    this.unsuscribeChat = await loadSnapshot(chats => {
      this.chats = chats;
      this.isLoading = false
    })
    this.unsuscribeAuth = subscribeToAuth(nuevoUsuario => this.usuario = {...nuevoUsuario})

    this.isLoading2 = true
    await obtenerAdmin().then(id => this.admin = id[0].id)
    this.usuarioLog = await obtenerUsuarioPorId(this.usuario.id)
    this.isLoading2 = false

    console.log(usuario)
  },
  unmounted(){
    this.unsuscribeAuth()
    this.unsuscribeChat()
  },
  methods:{
    abrirChat(chat){
      this.chatPersonal = chat
      const modal = document.querySelector('#modal');
      modal.classList.remove('hidden');
    },
    cerrarChat(){
      const modal = document.querySelector('#modal');
      modal.classList.add('hidden');
    },
    dateToString(date){
      return dateToString(date)
    },
    enviarMensaje(){
      this.isLoading = true
      saveMessage({
        userId: this.usuario.id,
        usuario: this.usuario.email,
        mensaje: this.nuevoMensaje.mensaje
      }).then(() =>{
        this.nuevoMensaje.mensaje = ''
        this.isLoading = false
      })
    }

  }

}
</script>

<template>
  <div>
    <BaseH2 class="text-center my-6">Chat</BaseH2>
    <template v-if="!isLoading">
      <div class="flex gap-3  flex-wrap justify-center">

        <template v-if="usuarioLog.rol === 'usuario' ">
          <div  class="flex flex-col bg-slate-200 p-4 my-2 w-[300px] h-[305px]">
            <div class="">
              <img src="../../public/img/avatar.jpeg" class="w-24 h-24 rounded-full mx-auto shadow-xl" alt="imagen de usuario">
            </div>
            <div class="mt-6  mb-4 px-6 mx-auto ">
              <p class="text-2xl text-center font-black">
                Chateá con nosotros
              </p>
            </div>
            <div class="mt-4 mb-10 px-6 mx-auto">
              <router-link :to="`/usuario/${admin}/chat`">
                <BaseButton>Ingresar al chat
                </BaseButton>
              </router-link>
            </div>
          </div>
        </template>

        <template v-else-if="usuarioLog.rol === 'admin'" >
          <div v-for="(c,i) in chats" :key="i" >
            <template v-if="c.usuario != 'admin@admin.com' ">
              <div class="flex flex-col bg-slate-200 p-4 my-2 w-[350px] h-[305px]">
                <div class="">
                  <img src="../../public/img/avatar.jpeg" class="w-24 h-24 rounded-full mx-auto shadow-xl" alt="imagen de usuario">
                </div>
                <div class="mt-6  mb-4 px-6 mx-auto ">
                  <p class="text-2xl font-black capitalize text-center">Datos del perfil:
                    <span class="bg-purple-300">
                      <router-link :to="`/perfil-usuario/${c.userId}`">
                        {{ c.usuario }}
                      </router-link>
                    </span>
                  </p>
                </div>
                <div class="mt-4 mb-10 px-6 mx-auto">
                  <!-- <BaseButton @click="abrirChat(c)">Ingresar al chat
                  </BaseButton> -->
                  <router-link :to="`/usuario/${c.id}/chat`">
                    <BaseButton>Ingresar al chat
                    </BaseButton>
                  </router-link>
                </div>
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          <Loader class="flex" />
        </template>

      </div>
    </template>
    <template v-else>
      <Loader class="flex" />
    </template>
  </div>

</template>
