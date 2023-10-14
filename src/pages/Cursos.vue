<script>
import BaseH2 from '../components/BaseH2.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name:"Cursos",
  components: {
    BaseH2,
    BaseButton,
  }
}
</script>

<template>
<div class="">

  <div class="text-center mt-16 mb-16">
    <BaseH2>Cursos</BaseH2>
  </div>


  <div class="mx-auto max-w-screen-xl">

    <div class="flex flex-wrap justify-around">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="../../public/img/curso1.jpg" alt="Sunset in the mountains">
      <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Curso 1: "Introducción al Arte de los Mandalas"</div>
          <p class="text-gray-700 text-base">
            Precio: $49.99
          </p>
          <p class="text-gray-700 text-base">
            Stock disponible: 50 plazas
          </p>
          <BaseButton>Ver más</BaseButton>
        </div>
    </div>

    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="../../public/img/curso2.jpg" alt="Sunset in the mountains">
      <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Curso 2: "Domina el Arte del Dibujo Zentangle"</div>
          <p class="text-gray-700 text-base">
            Precio: $59.99
          </p>
          <p class="text-gray-700 text-base">
            Stock disponible: 40 plazas
          </p>
          <BaseButton>Ver más</BaseButton>
        </div>
    </div>

    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="../../public/img/curso3.jpg" alt="Sunset in the mountains">
      <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Curso 3: "Mandalas Terapéuticos: Sanando con el Arte"</div>
          <p class="text-gray-700 text-base">
            Precio: $69.99
          </p>
          <p class="text-gray-700 text-base">
            Stock disponible: 30 plazas
          </p>
          <BaseButton>Ver más</BaseButton>
        </div>
    </div>

    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="../../public/img/curso4.jpg" alt="Sunset in the mountains">
      <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Curso 4: "Suscripción Mensual: Meditaciones Guiadas y Bienestar"</div>
          <p class="text-gray-700 text-base">
            Precio: $19.99
          </p>
          <p class="text-gray-700 text-base">
            Stock disponible: Ilimitado
          </p>
          <BaseButton>Ver más</BaseButton>
        </div>
    </div>
    </div>


  <div class="mt-16 text-center font-tipografiaTitulares font-bold text-2xl">
    <p>Recuerda que nuestros cursos están diseñados para enriquecer tu vida, ayudándote a explorar tu creatividad, encontrar la serenidad y conectarte con tu fluidez interior. ¡No dudes en inscribirte en el curso que más te llame la atención y comenzar tu viaje con Dhara!</p>
  </div>

  </div>
</div>
</template>
