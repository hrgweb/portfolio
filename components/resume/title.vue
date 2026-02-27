<script setup lang="ts">
import IconNuxt from '../shared/icon-nuxt.vue'
import IconSvelte from '../shared/icon-svelte.vue'
import IconTailwind from '../shared/icon-tailwind.vue'
import IconTypescript from '../shared/icon-typescript.vue'
import IconVue from '../shared/icon-vue.vue'
</script>

<template>
  <div class="position lg:flex lg:items-start lg:flex-row lg:items-center">
    <span class="text-md"> Full Stack Developer</span>
    <span class="hidden md:block pl-2">- &nbsp;</span>

    <div class="flex flex-wrap gap-0 items-center justify-left pt-3 lg:pt-0">
      <Stack name="Sveltekit">
        <IconSvelte width="1.53em" height="1em" />
      </Stack>

      <Stack name="Svelte">
        <IconSvelte width="1.53em" height="1em" />
      </Stack>

      <Stack name="Nuxt"> <IconNuxt width="1em" height="1em" />&nbsp; </Stack>

      <Stack name="Vue">
        <IconVue width="1.53em" height="1em" />
      </Stack>

      <Stack name="Typescript">
        <IconTypescript width="1.53em" height="1em" />
      </Stack>

      <Stack name="Tailwind" :has-vertical="false">
        <IconTailwind width="1.53em" height="1em" />
      </Stack>
    </div>
  </div>
</template>
