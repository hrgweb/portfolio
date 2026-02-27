// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', 'floating-vue/nuxt'],

  compatibilityDate: '2026-02-24',

  image: {
    quality: 80,
    format: ['webp']
  }
})
