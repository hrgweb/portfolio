// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  // nitro: {
  //   prerender: {
  //     routes: [
  //       '/hrg.jpg',
  //     ]
  //   }
  // },
  devtools: { enabled: true },
  modules: ['nuxt-primevue', '@nuxt/image'],
  primevue: {
    usePrimeVue: true,
    components: {
      include: ['Avatar']
    },
    options: {
      ripple: true
    }
  },
  css: [
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css'
  ]
})
