<script>
import { loadSnapshot } from '../services/chatActions';
export default{
  name:"chat",
  data(){
    return{
      chats:[],
      chatPersonal:{}
    }
  },
  mounted(){
    loadSnapshot(chats => {this.chats = chats})
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
    }
  }

}
</script>

<template>
  <div>
    <h2>Chat</h2>
    <div class="flex gap-3">
      <div v-for="(c,i) in chats" :key="i" class="flex flex-col  bg-slate-200 p-4 my-2 w-[300px] h-[305px]">
        <div class="">
          <img src="../../public/img/avatar.jpeg" class="w-24 h-24 rounded-full mx-auto shadow-xl" alt="imagen de usuario">
        </div>
        <div class="mt-6  mb-4 px-6 mx-auto ">
          <p class="text-2xl font-black capitalize"> {{ c.usuario }} </p>
        </div>
        <div class="mt-4 mb-10 px-6 mx-auto">
          <button @click="abrirChat(c)" class=" p-1 border text-xs rounded text-white bg-violeta px-6 pb-2 pt-2.5 font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] border-transparent transition duration-150 ease-in-out  ">
            ingresar al chat
          </button>
        </div>
      </div>
    </div>
    <div id="modal" class="fixed inset-0  flex items-center justify-center z-50 hidden ">
        <div class="modal-container bg-white w-[45%] h-[600px] md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <!-- Contenido del modal -->
            <div class="modal-content py-4 text-left px-6">
                <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold">Chatea con {{chatPersonal.usuario}}.</p>
                    <button class="modal-close cursor-pointer z-50" @click="cerrarChat()">
                        <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path
                                d="M1.393 1.393a1 1 0 011.414 0L9 7.586l6.193-6.193a1 1 0 111.414 1.414L10.414 9l6.193 6.193a1 1 0 11-1.414 1.414L9 10.414l-6.193 6.193a1 1 0 01-1.414-1.414L7.586 9 1.393 2.807a1 1 0 010-1.414z"/>
                        </svg>
                    </button>
                </div>
                <div class="h-[400px]">
                  <div class="h-[80%]">
                    <p class="bg-slate-200 p-2 my-3">{{ chatPersonal.mensaje }}</p>
                    <p class="bg-principal text-white p-2 text-right">{{ chatPersonal.respuesta }}</p>
                  </div>
                  <form action="" class="">
                    <input type="text">
                    <input type="submit" value="Enviar">
                  </form>
                </div>
            </div>
        </div>
    </div>
  </div>

</template>
