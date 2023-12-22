<script setup lang="ts">
import PersonalData from '@/components/PersonalData.vue';
import InterestItem from '@/components/InterestItem.vue';
</script>

<template>
    <div id="informacion-extra" class="md:grid md:grid-cols-2">
          <div id="informacion-personal" class="w-full py-4 px-8 flex flex-col items-center space-y-2">
            <h3 class="text-2xl text-primary font-righteous dark:text-white">Información personal</h3>
            <div class="w-full flex flex-col space-y-2 text-start">
              <PersonalData id="nombre">
                <template #title>Nombre</template>
                <p>Dereck Pavez Arias</p>
              </PersonalData>
              <PersonalData id="edad">
                <template #title>Edad</template>
                <p>23 años</p>
              </PersonalData>
              <PersonalData id="correo">
                <template #title>Correo</template>
                <a href="mailto:derek.pavez@outlook.com" class="transitio ease-in-out duration-200 hover:text-secondary">
                  dereck.pavez@outlook.com
                </a>
              </PersonalData>
              <PersonalData id="ocupacion">
                <template #title>Ocupación</template>
                <div class="w-full h-auto flex flex-wrap -m-0.5 text-white">
                  <span class="m-0.5 px-2 rounded-md bg-quaternary">Estudiante</span>
                  <span class="m-0.5 px-2 rounded-md bg-tertiary">Freelancer</span>
                  <span class="m-0.5 px-2 rounded-md bg-primary dark:bg-white dark:text-primary">Backend</span>
                  <span class="m-0.5 px-2 rounded-md bg-secondary">Frontend</span>
                  <span class="m-0.5 px-2 rounded-md bg-quinary">Diseño UI/UX</span>
                </div>
              </PersonalData>
            </div>
          </div>
          <div id="intereses" class="w-full flex flex-col items-center py-4 px-8 space-y-2">
            <h3 class="text-2xl text-primary font-righteous dark:text-white">Mis intereses</h3>
            <div class="w-full grid grid-cols-2 grid-flow-row gap-4 text-white lg:grid-cols-3">
              <InterestItem iconClass="fa-gamepad">
                <p>Videojuegos</p>
              </InterestItem>
              <InterestItem iconClass="fa-headphones-simple">
                <p>Música</p>
              </InterestItem>
              <InterestItem iconClass="fa-clapperboard">
                <p>Cine</p>
              </InterestItem>
              <InterestItem iconClass="fa-plane-departure">
                <p>Viajar</p>
              </InterestItem>
              <InterestItem iconClass="fa-basketball">
                <p>Basketball</p>
              </InterestItem>
              <InterestItem iconClass="fa-code">
                <p>Código</p>
              </InterestItem>
            </div>
          </div>
        </div>
</template>