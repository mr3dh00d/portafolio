<script setup lang="ts">
import logoUniversidad from '@/assets/img/logo-unab.jpeg';
import logoEscuela from '@/assets/img/educacion-adventista.jpeg';
import logoGasmar from '@/assets/img/gasmar-logo.jpeg';
import logoEkos from '@/assets/img/logo-ekos.jpeg';
import logoVass from '@/assets/img/vass-logo.jpeg';
import logoChapapp from '@/assets/img/chapapp-logo.jpeg';
</script>

<template>
    <div id="educacion-experiencia" class="w-full my-4 px-8 text-white flex flex-col items-center space-y-4">

        <h2 class="text-3xl text-primary font-righteous text-center dark:text-white">Educación</h2>

        <div id="educacion" class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="w-full p-4 bg-secondary shadow-md  rounded-md dark:bg-quinary border-r-4 border-r-primary dark:border-r-secondary">
                <div class="flex gap-4">
                    <div class="flex flex-col justify-center">
                        <div class="w-[80px] h-[80px] bg-[#203C53] flex flex-col justify-center items-center rounded-full">
                            <img :src="logoEscuela" width="50" height="50" alt="Logo Universidad Andrés Bello">
                        </div>
                    </div>
                    <div>
                        <p class="font-righteous text-lg">
                            Educación básica y media
                        </p>
                        <span class="text-sm">2007 - 2018</span>
                        <p class="text-sm">Colegio Adventista Las Condes</p>
                    </div>
                </div>
                <div class="w-full h-auto flex flex-wrap -m-0.5 my-1.5 text-white">
                    <span class="m-0.5 px-2 py-0.5 rounded-md bg-quinary dark:bg-white dark:text-primary text-xs">Valores</span>
                    <span class="m-0.5 px-2 py-0.5 rounded-md bg-quaternary text-xs">Respeto</span>
                    <span class="m-0.5 px-2 py-0.5 rounded-md bg-tertiary text-xs">Amistad</span>
                </div>
                <p>En este colegio pase la mayor parte de mi infancia formando amistades y valores que durarán para toda la vida.</p>
            </div>
            <div class="w-full p-4 bg-secondary shadow-md rounded-md dark:bg-quinary border-r-4 border-r-primary dark:border-r-secondary">
                <div class="flex gap-4">
                    <div class="flex flex-col justify-center">
                        <img class="rounded-full" :src="logoUniversidad" width="80" height="80" alt="Logo Universidad Andrés Bello">
                    </div>
                    <div>
                        <p class="font-righteous text-lg">
                            Educación superior
                        </p>
                        <span class="text-sm">2019 - 2023</span>
                        <p class="font-bold">Ingeniería Civil Informática</p>
                        <p class="text-sm">Universidad Andrés Bello</p>
                    </div>
                </div>
                <div class="w-full h-auto flex flex-wrap -m-0.5 my-1.5 text-white">
                    <span class="m-0.5 px-2 py-0.5 rounded-md bg-quaternary text-xs">Metodología Ágil</span>
                    <span class="m-0.5 px-2 py-0.5 rounded-md bg-tertiary text-xs">Trabajo en equipo</span>
                    <span class="m-0.5 px-2 py-0.5 rounded-md bg-primary text-xs">Modelado de problemas</span>
                    <span class="m-0.5 px-2 py-0.5 rounded-md bg-quinary dark:bg-white dark:text-primary text-xs">Estructura de datos</span>
                </div>
                <p>En la Universidad Andrés Bello, me formé como un profesional capaz de adaptarse a cualquier situación propuesta, agregando valor a distintas soluciones, cambiando el punto de vista y modelando problemas para encontrar soluciones con distintos enfoques, potenciando la diversidad y el trabajo en equipo con métodos de trabajo ágiles y estructurados.</p>
            </div>
        </div>

        <h2 class="text-3xl text-primary font-righteous text-center dark:text-white">Experiencia</h2>

        <div id="experiencia" class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            <div class="w-full p-4 bg-secondary shadow-md border-l-4 border-l-primary rounded-md dark:bg-quinary dark:border-l-secondary">
                <div class="flex gap-4">
                    <div class="flex flex-col justify-center">
                        <img class="rounded-full" :src="logoGasmar" width="60" height="60" alt="Logo Gasmar">
                    </div>
                    <div class="grid">
                        <p class="font-righteous text-lg">
                            Junior
                        </p>
                        <span class="text-sm font-bold">GASMAR S.A</span>
                        <span class="text-sm">Febrero 2020 y Febrero 2022</span>
                    </div>
                </div>
                <div class="w-full h-auto flex flex-wrap -m-0.5 my-1.5 text-white">
                </div>
                <p>Me desarrolle como junior dentro de la empresas, realizando gestiones varias y trámites bancarios.</p>
            </div>
            <div class="w-full p-4 bg-secondary shadow-md border-l-4 border-l-primary rounded-md dark:bg-quinary dark:border-l-secondary">
                <div class="flex gap-4">
                        <div class="flex flex-col justify-center">
                            <img class="rounded-full bg-black" :src="logoEkos" width="60" height="60" alt="Logo Restaurante Ekos Fusión">
                        </div>
                    <div class="grid">
                        <p class="font-righteous text-lg">
                            Desarrollador Full-Stack
                        </p>
                        <span class="text-sm font-bold">Ekos Fusion</span>
                        <span class="text-sm">Julio 2020 - Julio 2022</span>
                    </div>
                </div>
                <div class="w-full h-auto flex flex-wrap -m-0.5 my-1.5 text-white">
                    <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-tertiary">PHP</span>
                    <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-quinary dark:bg-white dark:text-primary">Laravel</span>
                    <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-primary">Vue</span>
                    <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-quaternary">SQL</span>
                  <!-- <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-quaternary">Frontend</span> -->
                </div>
                <p>Desarrollador web para el sitio del restaurante Ekos Fusión, creando un sistema de compra y ventas online.</p>
            </div>
            <div class="lg:col-span-2 xl:col-span-1 w-full p-4 bg-secondary shadow-md border-l-4 border-l-primary rounded-md dark:bg-quinary dark:border-l-secondary">
                <div class="flex gap-4">
                    <div class="flex flex-col justify-center">
                        <img class="rounded-full" :src="logoVass" width="60" height="60" alt="Logo empresa VASS">
                    </div>
                    <div class="grid">
                        <p class="font-righteous text-lg">
                            Práctica Profesional
                        </p>
                        <span class="text-sm font-bold">VASS</span>
                        <span class="text-sm">Enero 2021 - Febrero 2021</span>
                    </div>
                </div>
                <div class="w-full h-auto flex flex-wrap -m-0.5 my-1.5 text-white">
                    <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-tertiary">Oracle Service Bus</span>
                  <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-quinary dark:bg-white dark:text-primary">Java</span>
                  <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-primary">API REST</span>
                  <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-quaternary">SOAP</span>
                  <!-- <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-quinary dark:bg-white dark:text-primary">Diseño UI/UX</span> -->
                </div>
                <p>Me desarrolle en el área de Integration & Process, utilizando Oracle WebLogic, Oracle Service Bus (OSB) y Servicios Web SOAP.</p>
            </div>
            <div class="lg:col-span-2 xl:col-span-3 w-full p-4 bg-secondary shadow-md border-l-4 border-l-primary rounded-md dark:bg-quinary dark:border-l-secondary">
                <div class="flex gap-4">
                    <div class="flex flex-col justify-center items-center">
                        <img :src="logoChapapp" class="rounded-full" width="60" height="60" alt="Logo de la empresa Chapapp">
                    </div>
                    <div class="grid">
                        <p class="font-righteous text-lg">
                            Desarrollador Full-Stack
                        </p>
                        <span class="text-sm font-bold">Chapapp</span>
                        <span class="text-sm">Agosto 2022 - Actualidad</span>
                    </div>
                </div>
                <div class="w-full h-auto flex flex-wrap -m-0.5 my-1.5 text-white">
                    <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-tertiary">Google Firebase</span>
                    <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-quinary dark:bg-white dark:text-primary">React Native</span>
                    <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-primary">JS/TS</span>
                    <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-quaternary">PHP</span>
                    <span class="text-xs m-0.5 py-0.5 px-2 rounded-md bg-quinary dark:bg-white dark:text-primary">Wordpress</span>
                </div>
                <p>Me especializo en el desarrollo de proyectos variados, desde aplicaciones móviles con React Native hasta la creación de soluciones robustas con WordPress y PHP. Mi habilidad para trabajar en el frontend y backend me permite aportar soluciones integrales, mientras que mi experiencia con Express me permite construir aplicaciones web escalables y eficientes. Me apasiona el desafío de crear experiencias digitales impactantes, siempre buscando la innovación y la excelencia técnica en cada proyecto.</p>
            </div>
        </div>
    </div>
</template>