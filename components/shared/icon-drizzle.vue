<script setup lang="ts">
const { class: className } = defineProps<{
  class?: string
}>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="`w-[1rem] h-[1rem] ${className}`"
    viewBox="0 0 16 16"
  >
    <path
      fill="none"
      stroke="#a6da95"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.167"
      d="m12.001 9.002l2-4.002M8 12.002L10 8M5.998 9l2-4.001m-6.001 7.002l2-4.002"
    />
  </svg>
</template>
