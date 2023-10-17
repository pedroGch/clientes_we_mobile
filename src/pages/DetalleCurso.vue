<script>
import BaseH2 from '../components/BaseH2.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
  name:"DetalleCurso",
  components: {
    BaseH2,
    BaseButton,
  }
}
</script>

<template>
<div class="">

  <div>
    <div class="text-center mt-16 mb-16">
      <BaseH2>Detalles del curso</BaseH2>
    </div>
    <div class="flex">

        <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-lg flex flex-col lg:flex-row">
          <!-- Imagen -->
          <img src="../../public/img/curso1.jpg" alt="Imagen" class="lg:w-1/2">

          <!-- Texto al lado de la imagen -->
          <div class="lg:w-1/2 p-4 p-16">
            <h3><BaseH2>Curso 1: "Introducción al Arte de los Mandalas"</BaseH2></h3>
            <p class="text-lg text-gray-700">Descripción: Este curso te llevará a un viaje profundo en el fascinante mundo de los mandalas. Aprenderás las técnicas básicas de creación de mandalas, explorarás su significado simbólico y descubrirás cómo usarlos como herramienta de relajación y meditación. Este curso es ideal para principiantes y amantes del arte que deseen explorar su creatividad interior.</p>
            <hr class="m-2">
            <p class="text-lg text-gray-700"><strong>Stock disponible:</strong> 50 plazas</p>
            <hr class="m-2">
            <p class="text-lg text-gray-700"><strong>Precio:</strong> $49.99</p>
            <hr class="m-2">

            <BaseButton>
              <router-link to="/">Comprar</router-link>
            </BaseButton>
            <BaseButton>
              <router-link to="/cursos">Volver a tienda</router-link>
            </BaseButton>
          </div>

        </div>
      </div>
  </div>

</div>
</template>
