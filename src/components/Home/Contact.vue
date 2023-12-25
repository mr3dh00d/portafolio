<script setup lang="ts">
</script>

<template>
    <div id="contacto" class="w-full py-4 px-8 flex flex-col items-center space-y-4">
        <h2 class="text-3xl font-righteous text-center text-primary dark:text-white">Contacto</h2>
        <div class="w-full flex md:flex-row gap-2 items-center justify-center text-white">
            <div class="w-64 flex flex-col items-center justify-center bg-quaternary dark:bg-tertiary py-2 rounded-lg border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary dark:hover:bg-transparent dark:hover:border-tertiary dark:hover:text-white transition-all ease-in-out duration-300">
                <i class="fa fa-envelope mr-2 text-3xl"/>
                <p class="text-gray-400">dereck.pavez@outlook.com</p>
                <a class="text-secondary dark:text-quaternary" href="mailto:dereck.pavez@outlook.com" target="_blank" rel="noopener noreferrer">
                    Enviar un mensaje
                </a>
            </div>
            <div class="w-64 full flex flex-col items-center justify-center bg-quaternary dark:bg-tertiary py-2 rounded-lg border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-primary dark:hover:bg-transparent dark:hover:border-tertiary dark:hover:text-white transition-all ease-in-out duration-300">
                <i class="fa fa-linkedin mr-2 text-3xl"/>
                <p class="text-gray-400">dereck.pavez</p>
                <a class="text-secondary dark:text-quaternary" href="https://www.linkedin.com/in/dereck-pavez/" target="_blank" rel="noopener noreferrer">
                    Enviar un mensaje
                </a>
            </div>
        </div>
        <!-- <form class="w-full flex flex-col gap-2 dark:text-white">
            <input class="p-2 rounded-md border-2 border-quinary outline-2 outline-secondary focus:outline dark:bg-transparent dark:border-tertiary" type="text" placeholder="Nombre">
            <input class="p-2 rounded-md border-2 border-quinary outline-2 outline-secondary focus:outline dark:bg-transparent dark:border-tertiary" type="mail" placeholder="Correo de contacto">
            <textarea class="p-2 rounded-md border-2 border-quinary outline-2 outline-secondary focus:outline dark:bg-transparent dark:border-tertiary" name="" id="" cols="30" rows="6" placeholder="Mensaje"></textarea>
            <button class="py-2 rounded-md bg-quinary text-white transition duration-200 ease-in-out hover:bg-tertiary"><i class="fa fa-send mr-2"></i>Enviar</button>
        </form> -->
    </div>
</template>