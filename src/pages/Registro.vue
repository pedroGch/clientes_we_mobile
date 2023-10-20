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
        rol: 'usuario'
      },
      errors: {
        email: '',
        password: '',
      }
    }
  },
  methods:{
    async registrarUsuario(){
      this.loadingRegistro = true
      try {
        await register({...this.nuevoUsuario})
        this.$router.push('/chat')
      } catch (error) {
        console.log(error)
      }
      this.loadingRegistro = false
    },
    validateForm() {
      this.errors = {};

      if (!this.nuevoUsuario.email) {
        this.errors.email = 'El email es requerido.';
      }

      if (!this.nuevoUsuario.password) {
        this.errors.password = 'La contraseña es requerida.';
      }

      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {

        this.registrarUsuario();
      }
    },
  },
}
</script>

<template>
  <div class="max-w-[100%] mx-auto ">
      <div class="text-center lg:mt-16 mb-16">
        <BaseH2>Registro</BaseH2>
      </div>
        <section class="lg:mx-6 lg:p-4 lg:px-[20%]">
            <form action="" autocomplete="off" method="POST" @submit.prevent="submitForm"
                class="max-w-[100%] block rounded-lg bg-white lg:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">

                <div class="relative mb-6" data-te-input-wrapper-init>
                    <BaseLabel for="user_email">Email</BaseLabel>
                    <BaseInput type="email" :disabled="loadingRegistro" name="user_email" v-model="nuevoUsuario.email"/>
                    <div class="mt-1 flex">
                      <svg v-if="errors.email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b0233a" class="h-5 w-5">
                      <path fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd" />
                      </svg>
                    <p v-if="errors.email" class="error-message text-red-700">{{ errors.email }}</p>
                    </div>
                </div>

               <div class="relative mb-6" data-te-input-wrapper-init>
                    <BaseLabel for="password">Contraseña</BaseLabel>
                    <BaseInput type="password" :disabled="loadingRegistro" name="password" v-model="nuevoUsuario.password"/>
                    <div class="mt-1 flex">
                      <svg v-if="errors.password" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b0233a" class="h-5 w-5">
                      <path fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd" />
                      </svg>
                    <p v-if="errors.password" class="error-message text-red-700">{{ errors.password }}</p>
                    </div>
                </div>

                <BaseButton :loading="loadingRegistro">Ingresar</BaseButton>
            </form>
        </section>
    </div>

</template>
