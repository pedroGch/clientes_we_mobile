<script>
import BaseH2 from '../components/BaseH2.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';

export default {
  name:"IniciarSesion",
  components: {
    BaseH2,
    BaseButton,
    BaseInput,
  }
}
</script>

<template>
  <div class="text-center mt-16 mb-16">
    <BaseH2>Iniciar sesión</BaseH2>
  </div>

  <section class="mb-10 lg:mx-6 flex justify-center p-4 ">
            <form action="" method="POST"
                class="block border rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div class="relative mb-12" data-te-input-wrapper-init>
                    <BaseInput type="email" name="email" id="email" autocomplete="off" />
                    <label for="email"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-violeta peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-violeta">Email</label>
                </div>

                <div class="relative mb-6" data-te-input-wrapper-init>
                    <BaseInput type="password" autocomplete="off" name="password" id="password"
                        />
                    <label for="password"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-violeta peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-violeta">Contraseña</label>
                </div>

                <BaseButton>Ingresar</BaseButton>
            </form>
        </section>

</template>
