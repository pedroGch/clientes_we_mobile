<script>
import BaseH2 from '../components/BaseH2.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseLabel from '../components/BaseLabel.vue';
import {register} from '../services/auth'
export default {
  name:"Registro",
  components: {
    BaseH2,
    BaseButton,
    BaseInput,
    BaseLabel,
  },
  data(){
    return{
      loadingRegistro: false,
      nuevoUsuario: {
        email:'',
        password:'',
      },
    }
  },
  methods:{
    async registrarUsuario(){
      this.loadingRegistro = true
      try {
        await register({...this.nuevoUsuario})
      } catch (error) {
        console.log(error)
      }
      this.loadingRegistro = false
    }
  },
}
</script>

<template>
  <div class="max-w-[100%] mx-auto ">
      <div class="text-center lg:mt-16 mb-16">
        <BaseH2>Registro</BaseH2>
      </div>
        <section class="lg:mx-6 lg:p-4 lg:px-[20%]">
            <form action="" autocomplete="off" method="POST" @submit.prevent="registrarUsuario"
                class="max-w-[100%] block rounded-lg bg-white lg:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <!-- <div class="relative mb-6" data-te-input-wrapper-init>
                    <BaseInput type="text" name="user_name" />
                    <BaseLabel for="user_name">Nombre de usuario</BaseLabel>
                </div> -->

                <div class="relative mb-6" data-te-input-wrapper-init>
                    <BaseInput type="email" :disabled="loadingRegistro" name="user_email" v-model="nuevoUsuario.email"/>
                    <BaseLabel for="user_email">Email</BaseLabel>
                </div>

                <!-- <div class="relative mb-6" data-te-input-wrapper-init>
                    <BaseInput type="email" name="user_email_again"/>
                    <BaseLabel for="user_email_again">Repetir email</BaseLabel>
                </div> -->

                <div class="relative mb-6" data-te-input-wrapper-init>
                    <BaseInput type="password" :disabled="loadingRegistro" name="password" v-model="nuevoUsuario.password"/>
                    <BaseLabel for="password">Contraseña</BaseLabel>
                </div>

                <!-- <div class="relative mb-6" data-te-input-wrapper-init>
                    <BaseInput type="password" name="password_repeat"/>
                    <BaseLabel for="password_repeat">Repetir contraseña</BaseLabel>
                </div> -->

                <BaseButton :loading="loadingRegistro">Ingresar</BaseButton>
            </form>
        </section>
    </div>

</template>
