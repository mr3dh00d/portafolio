<script setup lang="ts">
import PersonalData from '@/components/PersonalData.vue';
import InterestItem from '@/components/InterestItem.vue';
import SkillItem from '@/components/SkillItem.vue';
import Logo from '@/components/Logo.vue';
</script>

<template>
  <main class="font-montserrat">    
    <div id="presentacion" class="bg-fondo bg-cover bg-center">
      <div class="py-16 bg-quinary bg-opacity-30">
        <div id="card" class="flex flex-col items-center">
          <div class="photo w-56 h-56 bg-photo bg-cover rounded-full absolute"></div>
          <div class="content pt-14 pb-4 px-4 mt-44 bg-white text-center rounded-lg">
            <h1 class="text-4xl font-righteous text-primary">Dereck Pavez</h1>
            <div id="descripcion" class="text-sm">
              <p>Desarrollador Full-Stack</p>
              <p>Estudiante de Ingeniería Civil Informática</p>
            </div>
            <div id="rrss" class="w-full h-auto space-x-3 pt-1 text-2xl text-primary">
              <a class="fa fa-instagram transition duration-200 ease-in-out hover:-translate-y-1" href="http://instagram.com/mr3dh00d" target="_blank" rel="noopener noreferrer"></a>
              <a class="fa fa-twitter transition duration-200 ease-in-out hover:-translate-y-1" href="http://twitter.com/mr3dh00d" target="_blank" rel="noopener noreferrer"></a>
              <a class="fa fa-linkedin transition duration-200 ease-in-out hover:-translate-y-1" href="http://linkedin.com/in/dereck-pavez/" target="_blank" rel="noopener noreferrer"></a>
              <a class="fa fa-github transition duration-200 ease-in-out hover:-translate-y-1" href="http://github.com/mr3dh00d" target="_blank" rel="noopener noreferrer"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sobre_mi" class="w-full py-4 px-8 flex flex-col items-center space-y-4">
      <h2 class="text-3xl text-primary font-righteous text-center">Sobre mí</h2>
      <p class="text-justify">
        Soy un estudiante destacado, analítico y 
        proactivo, de principios claros,
        carismático y con habilidades de
        ligerazgo, tales como resolución de
        conflictos, escucha activa, innovación y
        creatividad, en mi experiencia he
        mostrado capacidad para solucionar
        desafíos informáticos, siempre bucando
        una nueva formar de mirar y resolver los
        problemas, con notable perseverancia.
      </p>
    </div>
    <div id="datos-personales" class="w-full py-4 px-8 flex flex-col items-center space-y-2">
      <h3 class="text-2xl text-primary font-righteous">Información personal</h3>
      <div class="w-full flex flex-col space-y-2 text-start">
        <PersonalData id="nombre">
          <template #title>Nombre</template>
          <p>Dereck Pavez Arias</p>
        </PersonalData>
        <PersonalData id="edad">
          <template #title>Edad</template>
          <p>21 años</p>
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
            <span class="m-0.5 px-2 rounded-md bg-primary">Backend</span>
            <span class="m-0.5 px-2 rounded-md bg-secondary">Frontend</span>
            <span class="m-0.5 px-2 rounded-md bg-quinary">Diseño UI/UX</span>
          </div>
        </PersonalData>
      </div>
    </div>
    <div id="intereses" class="w-full flex flex-col items-center py-4 px-8 space-y-2">
      <h3 class="text-2xl text-primary font-righteous">Mis intereses</h3>
      <div class="w-full grid grid-cols-2 grid-flow-row gap-4 text-white">
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
    <div id="sobre_mi" class="w-full py-4 px-8 flex flex-col items-center space-y-4">
      <h2 class="text-3xl text-primary font-righteous text-center">Habilidades</h2>
      <div class="w-full grid grid-cols-3 grid-flow-row gap-4">
        <SkillItem skill="HTML5" level="w-[90%]" imgSrc="https://img.icons8.com/color/64/000000/html-5.png"></SkillItem>
        <SkillItem skill="CSS3" level="w-[85%]" imgSrc="https://img.icons8.com/color/64/000000/css3.png"></SkillItem>
        <SkillItem skill="Bootstrap" level="w-[85%]" imgSrc="https://img.icons8.com/color/64/000000/bootstrap.png"></SkillItem>
        <SkillItem skill="TailwindCSS" level="w-[65%]" imgSrc="https://img.icons8.com/color/64/000000/tailwindcss.png"></SkillItem>
        <SkillItem skill="JavaScript" level="w-[80%]" imgSrc="https://img.icons8.com/color/64/000000/javascript.png"></SkillItem>
        <SkillItem skill="ReactJS" level="w-[50%]" imgSrc="https://img.icons8.com/color/64/000000/react-native.png"></SkillItem>
        <SkillItem skill="VueJS" level="w-[65%]" imgSrc="https://img.icons8.com/color/64/000000/vue-js.png"></SkillItem>
        <SkillItem skill="NodeJS" level="w-[50%]" imgSrc="https://img.icons8.com/color/64/000000/nodejs.png"></SkillItem>
        <SkillItem skill="MongoDB" level="w-[40%]" imgSrc="https://img.icons8.com/color/64/000000/mongodb.png"></SkillItem>
        <SkillItem skill="PHP" level="w-[85%]" imgSrc="https://img.icons8.com/offices/64/000000/php-logo.png"></SkillItem>
        <SkillItem skill="laravel" level="w-[75%]" imgSrc="https://img.icons8.com/ios-filled/64/fa314a/laravel.png"></SkillItem>
        <SkillItem skill="MySQL" level="w-[90%]" imgSrc="https://img.icons8.com/color/64/000000/mysql-logo.png"></SkillItem>
        <SkillItem skill="Git" level="w-[95%]" imgSrc="https://img.icons8.com/color/64/000000/git.png"></SkillItem>
        <SkillItem skill="Github" level="w-[80%]" imgSrc="https://img.icons8.com/color/64/000000/github.png"></SkillItem>
        <SkillItem skill="Python" level="w-[80%]" imgSrc="https://img.icons8.com/color/64/000000/python.png"></SkillItem>
        <SkillItem skill="C" level="w-[40%]" imgSrc="https://img.icons8.com/color/64/000000/c-programming.png"></SkillItem>
        <SkillItem skill="Linux" level="w-[70%]" imgSrc="https://img.icons8.com/color/64/000000/linux.png"></SkillItem>
        <SkillItem skill="Figma" level="w-[70%]" imgSrc="https://img.icons8.com/color/64/000000/figma.png"></SkillItem>
        <SkillItem skill="VSCode" level="w-[90%]" imgSrc="https://img.icons8.com/color/64/000000/visual-studio-code-2019.png"></SkillItem>
        <SkillItem skill="Office" level="w-[80%]" imgSrc="https://img.icons8.com/color/64/000000/office-365.png"></SkillItem>
      </div>
    </div>
    <div id="educacion-experiencia" class="w-full py-4 px-8 flex flex-col items-center space-y-4">
      <h2 class="text-3xl text-primary font-righteous text-center">Eduación y Experiencia</h2>
      <div class="w-full flex flex-col space-y-2 text-white">
        <div class="w-full p-4 bg-secondary shadow-md border-r-4 border-r-primary rounded-md ">
          <p class="font-righteous text-lg">
            Educacion básica y media
          </p>
          <span class="text-sm">2007 - 2018</span>
          <p>Colegio Adventista Las Condes</p>
        </div>
        <div class="w-full p-4 bg-secondary shadow-md border-r-4 border-r-primary rounded-md ">
          <p class="font-righteous text-lg">
            Educacion superior
          </p>
          <span class="text-sm">2019 - Actualidad</span>
          <p class="font-bold">Ingeniería Civil Informática</p>
          <p>Universidad Andrés Bello</p>
        </div>
        <div class="w-full p-4 bg-secondary shadow-md border-l-4 border-l-primary rounded-md ">
          <p class="font-righteous text-lg">
            GASMAR S.A
          </p>
          <span class="text-sm">Febrero 2020</span>
          <p>Me desarrolle como junior dentro de la empresas, realizando gestiones varias y trámites bancarios.</p>
        </div>
        <div class="w-full p-4 bg-secondary shadow-md border-l-4 border-l-primary rounded-md ">
          <p class="font-righteous text-lg">
            Ekos Fusión
          </p>
          <span class="text-sm">Julio 2020 - Enero 2022</span>
          <p>Desarrollador web para el sitio del restaurante Ekos Fusión, creando un sistema de compra y ventas online.</p>
        </div>
        <div class="w-full p-4 bg-secondary shadow-md border-l-4 border-l-primary rounded-md ">
          <p class="font-righteous text-lg">
            VASS
          </p>
          <span class="text-sm">Enero 2021 - Febrero 2021</span>
          <p>Me desarrolle en el área de Integration & Process, utilizando Oracle WebLogic, Oracle Service Bus (OSB) y Servicios Web SOAP.</p>
        </div>
      </div>
    </div>  
    <div id="proyectos" class="w-full py-4 px-8 flex flex-col items-center space-y-4">
      <h2 class="text-3xl text-primary font-righteous text-center">Proyectos</h2>
      <div class="w-full flex flex-col space-y-4 text-white">
          <div class="w-full h-64 bg-robotica bg-cover bg-center rounded-md">
            <div class="w-full h-full bg-primary rounded-md bg-opacity-90 p-4 flex flex-col justify-center opacity-0 transition duration-500 ease-in-out hover:opacity-100">
              <p class="font-bold">Tercer lugar 12° Interescolar de Robotica</p>
              <span class="text-sm">Universidad Andrés Bello</span>
              <span class="text-sm">2018</span>
            </div>
          </div>
          <div class="w-full h-64 bg-feria-cientifica bg-cover bg-center rounded-md">
            <div class="w-full h-full bg-primary rounded-md bg-opacity-90 p-4 flex flex-col justify-center opacity-0 transition duration-500 ease-in-out hover:opacity-100">
              <p class="font-bold">Segundo lugar Nacional 7° Feria Científica Tecnológica</p>
              <span class="text-sm">Educación Adventista</span>
              <span class="text-sm">2018</span>
            </div>
          </div>
          <div class="w-full h-64 bg-ekos bg-cover bg-left rounded-md" href="https://ekosfusion.cl/" target="_blank">
            <div class="w-full h-full bg-primary rounded-md bg-opacity-90 p-4 flex flex-col justify-center opacity-0 transition duration-500 ease-in-out hover:opacity-100">
              <p class="font-bold">Desarrollador web</p>
              <span class="text-sm">Sitio web con Laravel</span>
              <span class="text-sm">2020 - 2022</span>
            </div>
          </div>
      </div>
    </div>  
    <div id="proyectos" class="w-full py-4 px-8 flex flex-col items-center space-y-4">
      <h2 class="text-3xl text-primary font-righteous text-center">Contacto</h2>
      <form class="w-full flex flex-col space-y-2">
        <input class="p-2 rounded-md border-2 border-quinary outline-2 outline-secondary focus:outline" type="text" placeholder="Nombre">
        <input class="p-2 rounded-md border-2 border-quinary outline-2 outline-secondary focus:outline" type="mail" placeholder="Correo de contacto">
        <textarea class="p-2 rounded-md border-2 border-quinary outline-2 outline-secondary focus:outline" name="" id="" cols="30" rows="6" placeholder="Mensaje"></textarea>
        <button class="py-2 rounded-md bg-quinary text-white"><i class="fa fa-send mr-2"></i>Enviar</button>
      </form>
    </div>
    <footer class="w-full py-4 p-x8 flex flex-col items-center bg-secondary">
      <Logo class="w-40 h-40 fill-primary transition duration-300 ease-in-out hover:fill-white"/>
      <!-- <img class="fill-white" :src="logo" alt="" srcset=""> -->
      <!-- <div class="w-40 h-40 bg-logo-white bg-cover bg-center"></div> -->


    </footer>
  </main>
</template>
