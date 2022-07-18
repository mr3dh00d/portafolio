<script setup lang="ts">
defineProps<{
    iconClass: string    
}>()
</script>
<template>
    <div class="py-2 bg-quinary text-sm text-center rounded-lg shadow-lg transition ease-in-out duration-200 hover:rotate-6 ">
        <i :class="iconClass" class="fa text-4xl"></i>
        <slot></slot>
    </div>
</template>