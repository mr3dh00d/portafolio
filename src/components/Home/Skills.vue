<script setup lang="ts">
import SkillItem from '@/components/SkillItem.vue';
</script>

<template>
    <div id="habilidades" class="w-full my-4 px-8 flex flex-col items-center space-y-4">
          <h2 class="text-3xl text-primary font-righteous text-center dark:text-white">Habilidades</h2>
          <div class="w-full grid grid-cols-3 grid-flow-row gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
            <SkillItem skill="HTML5" level="w-[90%]" imgSrc="https://img.icons8.com/color/64/000000/html-5.png"></SkillItem>
            <SkillItem skill="CSS3" level="w-[85%]" imgSrc="https://img.icons8.com/color/64/000000/css3.png"></SkillItem>
            <SkillItem skill="Bootstrap" level="w-[85%]" imgSrc="https://img.icons8.com/color/64/000000/bootstrap.png"></SkillItem>
            <SkillItem skill="TailwindCSS" level="w-[65%]" imgSrc="https://img.icons8.com/color/64/000000/tailwindcss.png"></SkillItem>
            <SkillItem skill="JavaScript" level="w-[80%]" imgSrc="https://img.icons8.com/color/64/000000/javascript.png"></SkillItem>
            <SkillItem skill="TypeScript" level="w-[40%]" imgSrc="https://img.icons8.com/color/64/000000/typescript.png"></SkillItem>
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
</template>