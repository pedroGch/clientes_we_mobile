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
      },
      errors: {
        email: '',
        password: '',
      }
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
            <form action="" method="POST" @submit.prevent="submitForm"
                class="block border rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="relative mb-12" data-te-input-wrapper-init>
                    <BaseInput type="email" name="email" id="email" autocomplete="off" v-model="formulario.email"/>
                    <BaseLabel for="email">Email</BaseLabel>
                    <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
                </div>

                <div class="relative mb-6" data-te-input-wrapper-init>
                    <BaseInput type="password" autocomplete="off" name="password" id="password" v-model="formulario.password"/>
                    <BaseLabel for="password">Contraseña</BaseLabel>
                    <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
                </div>

                <BaseButton>Ingresar</BaseButton>
            </form>
        </section>

</template>
