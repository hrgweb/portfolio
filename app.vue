<script setup lang="ts">
import info from '~/data/info.json'

useHead({
  title: `Portfolio - ${info.author}`,
  htmlAttrs: { lang: 'en' }
})

onMounted(() => {
  if (import.meta.env.DEV) return

  // Create umami script
  const s = document.createElement('script')
  s.src = import.meta.env.VITE_UMAMI_SCRIPT_URL
  s.setAttribute('data-website-id', import.meta.env.VITE_UMAMI_WEBSITE_ID)
  s.async = true
  s.defer = true
  document.head.appendChild(s)
  console.log('umami init: ', s)
})
</script>

<template>
  <div class="lg:bg-white">
    <!-- <messenger /> -->
    <portfolio />
    <br />
  </div>
</template>
