<script>
import BaseH2 from '../components/BaseH2.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseLabel from '../components/BaseLabel.vue';
import {login} from '../services/auth';
import { subscribeToAuth } from '../services/auth';

export default {
  name:"IniciarSesion",
  components: {
    BaseH2,
    BaseButton,
    BaseInput,
    BaseLabel,
  },
  data(){
    return{
      formulario: {
        email: '',
        password: '',
        rol: ''
      },
      errors: {
        email: '',
        password: '',
      },
      errorMessage: ''
    }
  },
  methods:{
    loguear(){
      login({...this.formulario})
        .then(usuario => {
          if(usuario.rol != undefined){
            this.$router.push('/perfil-admin')
          } else {
            this.$router.push('/chat')
          }})
        .catch((err) => { alert('UPS algo no va bien')})
        .finally(()=>{
          console.log('acá detenemos la animacion del loading...')
          this.errorMessage = 'Usuario y/o contraseña incorrecta'; // Establece el mensaje de error
        })
    },
    validateForm() {
      this.errors = {};

      if (!this.formulario.email) {
        this.errors.email = 'El email es requerido.';
      }

      if (!this.formulario.password) {
        this.errors.password = 'La contraseña es requerida.';
      }

      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {

        this.loguear();
      }
    }
  }
}
</script>

<template>
  <div class="text-center mt-16 mb-16">
    <BaseH2>Iniciar sesión</BaseH2>
  </div>

  <section class="mb-10 lg:mx-6 flex justify-center p-4 ">
            <form action="#" method="POST" @submit.prevent="submitForm"
                class="block border rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <p v-if="errorMessage" class="error-message text-red-700 my-6">{{ errorMessage }}</p>

                <div class="relative mb-12" data-te-input-wrapper-init>
                    <BaseLabel for="email">Email</BaseLabel>
                    <BaseInput type="email" name="email" id="email" autocomplete="off" v-model="formulario.email"/>
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
                    <BaseInput type="password" autocomplete="off" name="password" id="password" v-model="formulario.password"/>
                    <div class="mt-1 flex">
                      <svg v-if="errors.password" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#b0233a" class="h-5 w-5">
                      <path fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clip-rule="evenodd" />
                      </svg>
                    <p v-if="errors.password" class="error-message text-red-700">{{ errors.password }}</p>
                    </div>
                </div>

                <BaseButton>Ingresar</BaseButton>
            </form>
        </section>

</template>
