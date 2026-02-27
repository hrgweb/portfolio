<script setup lang="ts">
import info from '~/data/info.json'

useHead({
  title: `Portfolio - ${info.author}`,
  htmlAttrs: { lang: 'en' }
})
</script>

<template>
  <div class="lg:bg-white">
    <!-- <messenger /> -->
    <portfolio />
  </div>
</template>
