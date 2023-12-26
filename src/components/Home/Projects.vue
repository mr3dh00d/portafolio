<script setup lang="ts">
</script>

<template>
    <div id="proyectos" class="w-full my-4 px-8 flex flex-col items-center space-y-4">
        <h2 class="text-3xl text-primary font-righteous text-center dark:text-white">Proyectos</h2>
        <div class="w-full flex flex-col gap-4 text-white md:grid md:grid-cols-2 xl:grid-cols-3">
            <div class="w-full h-64 bg-robotica bg-cover bg-center rounded-md">
                <div class="w-full h-full bg-primary rounded-md bg-opacity-90 p-4 flex flex-col justify-center opacity-0 transition duration-500 ease-in-out hover:opacity-100">
                    <p class="font-bold">Tercer lugar 12° Interescolar de Robotica</p>
                    <span class="text-sm">Universidad Andrés Bello</span>
                    <span class="text-sm">2018</span>
                </div>
            </div>
            <!-- <div class="w-full h-64 bg-robotica bg-cover bg-center rounded-md">
                <div class="w-full h-full bg-primary rounded-md bg-opacity-90 p-4 flex flex-col justify-center opacity-0 transition duration-500 ease-in-out hover:opacity-100">
                    <p class="font-bold">Segundo lugar Nacional 7° Feria Científica Tecnológica</p>
                    <span class="text-sm">Educación Adventista</span>
                    <span class="text-sm">2018</span>
                </div>
            </div> -->
            <div class="w-full h-64 bg-graph-kigdom bg-cover bg-center rounded-md">
                <div class="w-full h-full bg-primary rounded-md bg-opacity-90 p-4 flex flex-col justify-center opacity-0 transition duration-500 ease-in-out hover:opacity-100">
                    <p class="font-bold">Proyecto de Título: Videojuego educativo sobre grafos y el algoritmo Dijkstra denominado</p>
                    <span class="text-sm">Universidad Andrés Bello</span>
                    <a class="text-sm underline" target="_blank" href="https://github.com/mr3dh00d/graph-kingdom">Repositorio</a>
                    <span class="text-sm">2023</span>
                </div>
            </div>
            <div class="w-full h-64 bg-ekos bg-cover bg-left rounded-md md:col-span-2 xl:col-span-1" href="https://ekosfusion.cl/carta" target="_blank">
                <div class="w-full h-full bg-primary rounded-md bg-opacity-90 p-4 flex flex-col justify-center opacity-0 transition duration-500 ease-in-out hover:opacity-100">
                    <p class="font-bold">Desarrollador web</p>
                    <span class="text-sm">
                    Sitio web de <a href="https://ekosfusion.cl/" target="_blank" class="underline">ekosfusion.cl</a>
                    </span>
                    <span class="text-sm">2020 - 2022</span>
                </div>
            </div>
        </div>
    </div>  
</template>