<script>
import SliderComponent from '../components/SliderComponent.vue';
import BaseH2 from '../components/BaseH2.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name: "Home",
  components: {
    SliderComponent,
    BaseH2,
    BaseButton,
  }
}
</script>

<template>
  <div>

    <BaseH2 class="text-center mb-10 mt-10">Bienvenido a Dhara</BaseH2>
    <img src="./../../public/img/slider_1.jpg" class="m-auto" alt="foto de buda">

    <div>
      <BaseH2 class="text-center m-16">Nosotros</BaseH2>
      <div class="flex">

        <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
          <!-- Imagen -->
          <img src="../../public/img/curso3.jpg" alt="mujer sentada meditando sobre una colchoneta" class="lg:w-1/2">

          <!-- Texto al lado de la imagen -->
          <div class="p-6 lg:w-1/2 bg-principal p-16">
            <p class="pb-2 text-lg text-gray-700 text-white">DHARA es un nombre masculino de origen sánscrito que significa
              fluir.</p>
            <p class="pb-2 text-lg text-gray-700 text-white">Dhara es una invitación a conectar con el presente y permanecer en
              él. Es fluir al compás de los vaivenes de la vida.</p>
            <p class="pb-2 text-lg text-gray-700 text-white"><strong>
              Es un emprendimiento dedicado al desarrollo y comercialización de
                cursos sobre técnicas de creación de mandalas y dibujo zentangle. Cada curso incluye paquetes de contenido descargable para
                poder colorear y accederás a un 40% de descuento en la adquisición de otro curso.
            </strong></p>
            <p class="pb-2 text-lg text-gray-700 text-white">Dhara busca llenarte de energía, te impulsa fluir, soltar y
              expandir esa energía nuevamente al Universo.</p>
          </div>

        </div>
      </div>
    </div>


    <div>
      <BaseH2 class="text-center m-16">Productos</BaseH2>
      <div class="flex">
        <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
          <!-- Texto al lado de la imagen -->
          <div class="lg:w-1/2 p-4 m-auto p-16">
            <p class="p-4 text-lg text-gray-700"><strong>En nuestra tienda encontrarás variedad de cursos con los más hermosos y elaborados diseños de mandalas y dibujos zentangle para colorear</strong> y disfrutar de un momento de meditación consciente. Cada curso incluye paquetes de contenido descargable para que puedas imprimir y colorear, y potenciar tus habilidades.</p>

            <p class="p-4 text-lg text-gray-700">Explorá entre las diferentes opciones según complejidad y específicamente
              creados para niños.</p>


            <BaseButton>
              <router-link to="/cursos">ver cursos</router-link>
            </BaseButton>
          </div>

          <!-- Imagen -->
          <img src="../../public/img/curso1.jpg" alt="imagen de persona pintando mandalas" class="lg:w-1/2">

        </div>
      </div>
    </div>



</div></template>
