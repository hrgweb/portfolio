<script setup lang="ts">
defineProps({
  src: String,
  className: String,
  styleName: String,
  name: String,
  rounded: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <img
    :src="src"
    :class="[{ 'rounded-full': rounded }, className]"
    style="width: 150px; max-width: 150px; height: 150px"
    :style="styleName"
    :alt="name"
  />
</template>

<style scoped>
.rounded-full {
  border-radius: 60%;
}
</style>
