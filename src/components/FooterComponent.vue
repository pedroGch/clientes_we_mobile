<script>
export default {
  name: "Footer",

}
</script>
<template>
  <footer class="py-6  bg-principal drop-shadow-xl text-white">
    <div class="flex mt-4 mx-auto max-w-screen-xl">
      <h2 class="hidden">Datos alumnos</h2>
      <div class="flex-1">
        <div class="mb-4">
          <h3 class="block mb-2 text-xl font-bold ">Materia:</h3>
          <p class="">Clientes Web Mobile - Parcial 1</p>
        </div>

        <div class="mb-4">
          <h3 class="block mb-2 text-xl font-bold ">Profesor:</h3>
          <p class="">Santiago Gallino</p>
        </div>
        <div class="mb-4">
          <h3 class="block mb-2 text-xl font-bold ">Comisión - Cuatrimestre - Año:</h3>
          <p class="">DWN4BV - 4to - 2023</p>
        </div>
        <div class="mb-4"><img src="../../public/img/logo-davinci.png" class="" alt="logo Escuela Da Vinci" /></div>
      </div>

      <div id="container-team" class="flex-1">

        <h3 class="block text-xl font-bold ">Alumnos:</h3>

        <div class="flex">

          <div id="avatar-pedro" class="text-center px-6 pt-8">
            <img src="../../public/img/avatars/avatar-pedro.jpg" class="mx-auto mb-4 w-32 rounded-full"
              alt="Avatar Pedro Gonzalez Chavez" />
            <p class="mb-2  font-medium leading-tight">Pedro <br>Gonzalez Chavez</p>
            <div>
              <a href="https://github.com/pedroGch" target="_blank">
                <div class="github flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-github"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </div>
                <span class="hidden">Github</span>
              </a>
            </div>
          </div>

          <div id="avatar-rocio" class="text-center px-6 pt-8">
            <img src="../../public/img/avatars/avatar-rocio.jpg" class="mx-auto mb-4 w-32 rounded-full"
              alt="Avatar Rocío Scotto" />
            <p class="mb-2  font-medium leading-tight">Rocío <br>Scotto</p>
            <div>
              <a href="https://github.com/roscotto" target="_blank">
                <div class="github flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-github"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </div>
                <span class="hidden">Github</span>
              </a>
            </div>
          </div>

          <div id="avatar-valdi" class="text-center px-6 pt-8">
            <img src="../../public/img/avatars/avatar-valdi.jpg" class="mx-auto mb-4 w-32 rounded-full"
              alt="Avatar Ezequiel Valdiviezo" />
            <p class="mb-2  font-medium leading-tight">Ezequiel <br>Valdiviezo</p>
            <div>
              <a href="https://github.com/Valdiviezo-Ezequiel" target="_blank">
                <div class="github flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-github"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </div>
                <span class="hidden">Github</span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>

  </footer>
</template>
