<script setup lang="ts">
defineProps<{
    id: string
}>()
</script>

<template>
    <div :id="id">
        <div class="font-righteous text-quinary text-xl">
        <slot name="title"></slot>
        </div>
        <slot></slot>
    </div>
</template>