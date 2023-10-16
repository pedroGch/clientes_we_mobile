<script>
import { loadSnapshot, saveMessage } from '../services/chatActions.js';
import { dateToString } from '../helpers/date.js';
import Loader from "../components/Loader.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseLabel from "../components/BaseLabel.vue";
import BaseInput from "../components/BaseInput.vue";
import { subscribeToAuth } from '../services/auth';

export default{
  name:"chat",
  components: {
    Loader,
    BaseButton,
    BaseLabel,
    BaseInput,
},

  data(){
    return{
      isLoading: true,
      chats:[],
      chatPersonal:{},
      usuario: {
        id: null,
        email:null
      },
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
    <h2>Chat</h2>
    <template v-if="!isLoading">
      <div class="flex gap-3">
        <div v-for="(c,i) in chats" :key="i" class="flex flex-col  bg-slate-200 p-4 my-2 w-[300px] h-[305px]">
          <div class="">
            <img src="../../public/img/avatar.jpeg" class="w-24 h-24 rounded-full mx-auto shadow-xl" alt="imagen de usuario">
          </div>
          <div class="mt-6  mb-4 px-6 mx-auto ">
            <p class="text-2xl font-black capitalize">
              <router-link :to="`/perfil-usuario/${c.userId}`">
                {{ c.usuario }}
              </router-link>
            </p>
          </div>
          <div class="mt-4 mb-10 px-6 mx-auto">
            <!-- <BaseButton @click="abrirChat(c)">Ingresar al chat
            </BaseButton> -->
            <router-link :to="`/usuario/${c.userId}/chat`">
              <BaseButton>Ingresar al chat
              </BaseButton>
            </router-link>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <Loader class="flex" />
    </template>

    <div id="modal" class="fixed inset-0  flex items-center justify-center z-50 hidden ">
        <div class="modal-container bg-white w-[45%] h-[600px] md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <!-- Contenido del modal -->
            <div class="modal-content py-4 text-left px-6">
                <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold">Chatea con {{chatPersonal.usuario}}.</p>
                    <button class="modal-close cursor-pointer z-50" @click="cerrarChat()">
                        <svg class="fill-current text-principal" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path
                                d="M1.393 1.393a1 1 0 011.414 0L9 7.586l6.193-6.193a1 1 0 111.414 1.414L10.414 9l6.193 6.193a1 1 0 11-1.414 1.414L9 10.414l-6.193 6.193a1 1 0 01-1.414-1.414L7.586 9 1.393 2.807a1 1 0 010-1.414z"/>
                        </svg>
                    </button>
                </div>
                <div class="h-[400px]">
                  <div class="h-[80%]">
                    <p class="bg-slate-200 p-2 my-3">{{ chatPersonal.mensaje }} <span>{{dateToString(chatPersonal.fecha_mensaje)}}</span></p>

                  </div>

                </div>
            </div>
            <div class="modal-footer px-6 w-[100%]">
              <form action="" class="flex justify-between" @submit.prevent="enviarMensaje">
                    <BaseLabel for="message">Mensaje</BaseLabel>
                    <BaseInput type="text" placeholder="Ingresá tu mensaje" id="message" name="message" v-model="nuevoMensaje.mensaje" />
                    <BaseButton ></BaseButton>
                  </form>
            </div>
        </div>
    </div>
  </div>

</template>
