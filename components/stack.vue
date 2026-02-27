<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  hasVertical: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="flex items-center gap-1">
    <slot />
    {{ name }} <span v-if="hasVertical" class="vertical px-2">|</span>
  </div>
</template>
