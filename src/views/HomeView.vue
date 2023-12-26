<script setup lang="ts">
import AboutMe from '@/components/Home/AboutMe.vue';
import MoreInformation from '@/components/Home/MoreInformation.vue';
import Skills from '@/components/Home/Skills.vue';
import EducationAndExperiences from '@/components/Home/EducationAndExperiences.vue';
import Projects from '@/components/Home/Projects.vue';


import SocialMedia from '@/components/SocialMedia.vue';
import Logo from '@/components/Logo.vue';
import Contact from '@/components/Home/Contact.vue';


function HandleClick(event : Event) {
  document.querySelectorAll('#navbar a').forEach((element : Element) => {
    element.classList.remove('active');
  });
  let target = event.currentTarget as Element;
  target.classList.add('active');
} 

function HandleDarkMode(event : Event){
  let target = event.currentTarget as Element;
  let html = document.getElementsByTagName("html")[0];
  if(target.classList.contains('active')){
    html.classList.remove('dark');
    target.classList.remove('active');
  }else{
    html.classList.add('dark');
    target.classList.add('active');
  }
}

</script>

<template>
  <main class="font-montserrat">    
    <div id="presentacion" class="bg-fondo bg-cover bg-center">
      <div class="py-16 bg-quinary bg-opacity-30 dark:bg-primary dark:bg-opacity-30">
        <div id="card" class="flex flex-col items-center">
          <div class="photo w-56 h-56 bg-photo bg-cover rounded-full absolute"></div>
          <div class="content md:w-72 lg:w-96 pt-14 pb-4 px-16 mt-44 bg-white text-center rounded-xl dark:bg-primary dark:text-secondary">
            <h1 class="text-4xl font-righteous text-primary dark:text-white">Dereck Pavez</h1>
            <div id="descripcion" class="text-sm">
              <p>Desarrollador Full-Stack</p>
              <p>Ingeniero Civil en Informática</p>
            </div>
            <SocialMedia/>
          </div>
        </div>
      </div>
    </div>
    <div id="contenido" class="w-full flex flex-col justify-center items-center dark:bg-primary dark:text-secondary">
      <div class="max-w-screen-xl">
        <AboutMe/>
        <MoreInformation/>
        <Skills/>
        <EducationAndExperiences/>
        <Projects/>
        <Contact/>
      </div>
    </div>
    <footer class="w-full py-4 p-x8 pb-24 flex flex-col items-center bg-secondary text-center dark:bg-quaternary">
      <Logo class="w-40 h-40 fill-primary transition duration-300 ease-in-out hover:fill-white dark:fill-white dark:hover:fill-gray-300"/>
      <SocialMedia/>
      <span class="mt-2 text-xs dark:text-secondary">
      &copy; Dereck Pavez 2022. Todos los derechos reservados.
      </span>
    </footer>
  </main>
  <nav id="navbar" class="w-full h-auto flex fixed bottom-0 items-center justify-center pb-6">
    <div class="bg-black bg-opacity-60 backdrop-blur-md rounded-full p-2 px-6 flex gap-4 text-sm text-gray-500">
      <a href="#presentacion" class="active rounded-full flex w-10 h-10 items-center justify-center transition-all duration-300 ease-in-out hover:text-white hover:bg-quaternary" @click="HandleClick">
        <i class="fa-solid fa-house"></i>
      </a>
      <a href="#informacion-personal" class="rounded-full flex w-10 h-10 items-center justify-center transition-all duration-300 ease-in-out hover:text-white hover:bg-quaternary" @click="HandleClick">
        <i class="fa-solid fa-user"></i>
      </a>
      <a href="#habilidades" class="rounded-full flex w-10 h-10 items-center justify-center transition-all duration-300 ease-in-out hover:text-white hover:bg-quaternary" @click="HandleClick">
        <i class="fa-solid fa-code"></i>
      </a>
      <a href="#educacion-experiencia" class="rounded-full flex w-10 h-10 items-center justify-center transition-all duration-300 ease-in-out hover:text-white hover:bg-quaternary" @click="HandleClick">
        <i class="fa-solid fa-book"></i>
      </a>
      <a href="#contacto" class="rounded-full flex w-10 h-10 items-center justify-center transition-all duration-300 ease-in-out hover:text-white hover:bg-quaternary" @click="HandleClick">
        <i class="fa-solid fa-phone"></i>
      </a>
      <div class="rounded-full flex w-10 h-10 items-center justify-center transition-all duration-300 ease-in-out hover:text-white hover:bg-quaternary active" @click="HandleDarkMode">
        <i class="fa-solid fa-moon"></i>
      </div>
    </div>
  </nav>
</template>
