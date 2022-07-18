<script setup lang="ts">
defineProps<{
    skill: string
    imgSrc: string,
    level: string
}>()
</script>
<template>
    <div class="h-auto flex flex-col p-4 space-y-2 bg-gray-50 rounded-xl shadow-md items-center transition duration-200 ease-in-out hover:bg-secondary hover:-rotate-3 hover:scale-105 hover:shadow-lg">
        <img :src="imgSrc"/>
        <div class="w-full h-1 bg-gray-300 rounded-full">
            <div :class="level" class="h-full bg-tertiary rounded-l-full"></div>
        </div>
    </div>
</template>