<script setup lang="ts">
import IconAws from './shared/icon-aws.vue'
import IconDigitalOcean from './shared/icon-digital-ocean.vue'
import IconDocker from './shared/icon-docker.vue'
import IconDrizzle from './shared/icon-drizzle.vue'
import IconGithub from './shared/icon-github.vue'
import IconHostinger from './shared/icon-hostinger.vue'
import IconLaravel from './shared/icon-laravel.vue'
import IconNetlify from './shared/icon-netlify.vue'
import IconNuxt from './shared/icon-nuxt.vue'
import IconPhp from './shared/icon-php.vue'
import IconPostgresql from './shared/icon-postgres.vue'
import IconSupabase from './shared/icon-supabase.vue'
import IconSvelte from './shared/icon-svelte.vue'
import IconTailwind from './shared/icon-tailwind.vue'
import IconTypescript from './shared/icon-typescript.vue'
import IconVue from './shared/icon-vue.vue'

const props = defineProps<{
  name: string
}>()
</script>

<template>
  <template v-if="name.includes('nuxt')">
    <IconNuxt />
  </template>

  <template v-else-if="name.includes('vue')">
    <IconVue />
  </template>

  <template v-else-if="name.includes('typescript')">
    <IconTypescript />
  </template>

  <template v-else-if="name.includes('tailwind')">
    <IconTailwind />
  </template>

  <template v-else-if="name.includes('laravel')">
    <IconLaravel />
  </template>

  <template v-else-if="name.includes('php')">
    <IconPhp />
  </template>

  <template v-else-if="name.includes('digitalocean')">
    <IconDigitalOcean />
  </template>

  <template v-else-if="name.includes('aws')">
    <IconAws />
  </template>

  <template v-else-if="name.includes('supabase')">
    <IconSupabase />
  </template>

  <template v-else-if="name.includes('netlify')">
    <IconNetlify />
  </template>

  <template v-else-if="name.includes('docker')">
    <IconDocker />
  </template>

  <template v-else-if="name.includes('svelte')">
    <IconSvelte />
  </template>

  <template v-else-if="name.includes('drizzle')">
    <IconDrizzle />
  </template>

  <template v-else-if="name.includes('hostinger')">
    <IconHostinger />
  </template>

  <template v-else-if="name?.toLocaleLowerCase().includes('postgresql')">
    <IconPostgresql />
  </template>

  <template v-else-if="name?.includes('git')">
    <IconGithub />
  </template>

  <template v-else-if="name === 'primevue'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6.41 0L3.845 2.565l3.849.366L8.878.226l2.663 6.883l.35.904l.384-.93L14.75 1.09v-.001l.275-.667l1.1 2.51l3.848-.367L17.407 0h-8.43Zm2.391 1.72l-.73 1.735l-2.886-.221l-3.723-.302l1.1 4.58l5.282 1.964l.014.026l2.558.945h.244l-.001-.005h.882V8.797Zm6.282.16l-2.808 6.799v1.763h1.006l-.002.005l.244-.005h.035l.002-.001h.024l2.376-.878l.01-.018l5.469-2.033l1.099-4.58l-4.042.318l-2.749.206zM2.745 8.245v6.228l4.398 3.664v-5.68l1.284-1.832l-1.65.367L4.76 8.977Zm18.327 0l-2.017.733l-2.015 2.014l-1.65-.367l1.284 1.832v5.68l4.398-3.664zM9.137 10.599l-.304.487l.009.016l-1.148 1.722v8.245l1.1 1.648L10.075 24h3.665l1.283-1.282l1.1-1.65v-8.244l-1.15-1.723l.01-.015l-.18-.24l-.147-.22l-.013.007l-.025-.034l-.791.487h-3.655zm-4.376 6.256v2.381l2.382 2.382V18.87zm14.295 0l-2.382 2.015v2.748l2.382-2.382z"
      />
    </svg>
  </template>

  <!-- Fallback -->
  <template v-else>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19 9h-5V3a1 1 0 0 0-.69-.95c-.41-.13-.86.01-1.12.36l-8 11a1 1 0 0 0-.08 1.04A1 1 0 0 0 5 15h5v6a1 1 0 0 0 1 1c.31 0 .62-.15.81-.41l8-11a1 1 0 0 0 .08-1.04A1 1 0 0 0 19 9m-7 8.92V14c0-.55-.45-1-1-1H6.96L12 6.08V10c0 .55.45 1 1 1h4.04z"
      />
    </svg>
  </template>
</template>
