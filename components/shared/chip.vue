<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
  <div
    class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-200 text-gray-700 text-sm font-medium lg:bg-slate-200"
  >
    <CustomIcon :name="props.name" />

    {{ props.name }}
  </div>
</template>
