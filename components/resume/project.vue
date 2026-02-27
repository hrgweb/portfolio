<script setup lang="ts">
import type { IProject, IImage } from '~/types'
import itPos from '/portfolio/inventory/it-pos.png'
import atProduct from '/portfolio/abundancetracker/at-product.png'
import lpOneClick from '/portfolio/webclassai/lp-oneclick.png'
import ty from '/portfolio/webclassai/ty.png'
import financeeerLogin from '/portfolio/financeeer/fnc-login.png'
import Modal from '../shared/modal.vue'
import Gallery from './gallery.vue'

const projects = ref<IProject[]>([
  {
    key: 'financeeer',
    name: 'Financeeer',
    thumbnail: financeeerLogin,
    url: 'https://app.financeeer.cloud',
    tech: [
      'svelte 5',
      'sveltekit',
      'tanstack query',
      'drizzle orm',
      'postgresql',
      'typescript',
      'tailwindcss',
      'docker',
      'shadcn ui',
      'dokploy',
      'hostinger',
      'hostinger firewall',
      'hostinger dns manager'
    ]
  },
  {
    key: 'inventory',
    name: 'Inventory and POS',
    thumbnail: itPos,
    url: 'https://hrg-inventory-and-pos.netlify.app',
    tech: [
      'nuxt',
      'vue',
      'typescript',
      'tailwindcss',
      'supabase',
      'nuxt ui',
      'netlify'
    ]
  },
  {
    key: 'abundance',
    name: 'Abundance Tracker',
    thumbnail: atProduct,
    url: 'https://www.abundancetracker.com',
    tech: [
      'nuxt',
      'vue',
      'typescript',
      'tailwindcss',
      'laravel',
      'laravel forge',
      'primevue',
      'aws',
      'digitalocean'
    ]
  },
  {
    key: 'webclassai',
    name: 'Webclass AI',
    thumbnail: lpOneClick,
    url: 'https://webclass.ai',
    tech: [
      'nuxt',
      'vue',
      'typescript',
      'tailwindcss',
      'laravel',
      'laravel forge',
      'primevue',
      'aws',
      'digitalocean'
    ]
  },
  {
    key: 'botwebinar',
    name: 'Bot Webinar',
    thumbnail: ty,
    url: 'https://botwebinar.com',
    tech: [
      'nuxt',
      'vue',
      'typescript',
      'tailwindcss',
      'laravel',
      'laravel forge',
      'aws',
      'primevue',
      'digitalocean'
    ]
  }
])
const images = ref<IImage[]>([])

const projectRef = useTemplateRef('dialog-project')
const showProjectDialog = ref(false)

function openProject(projectName: string) {
  images.value = useImages(projectName)
  showProjectDialog.value = true
  projectRef.value?.dialogRef?.showModal()
}

watch(showProjectDialog, (state) => {
  if (state) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

function onDialogClose() {
  showProjectDialog.value = false
  images.value = []
}
</script>

<template>
  <div class="portfolio">
    <h3 class="text-md font-medium uppercase pb-3 text-center">Portfolio</h3>

    <div
      class="projects flex gap-12 lg:gap-6 flex-wrap max-w-full justify-center lg:justify-start"
    >
      <div
        v-for="project in projects"
        :key="project.key"
        class="min-w-[200px] w-[300px] max-w-[300px] shadow-lg lg:w-[33.33%] lg:flex lg:flex-col lg:justify-between"
      >
        <div>
          <div
            class="cursor-pointer bg-slate-100"
            @click="openProject(project.key)"
          >
            <NuxtImg
              :src="project.thumbnail"
              :alt="project.thumbnail"
              class="w-full min-h-[200px] max-h-[200px] object-contain"
              densities="x1"
            />
          </div>
          <div
            class="flex flex-row flex-wrap gap-2 p-3 pt-4 pb-0 cursor-default"
          >
            <Tech :stacks="project.tech" />
          </div>
        </div>

        <a
          :href="project.url"
          target="_blank"
          class="block color-inherit text-decoration-none py-4 text-center"
        >
          {{ project.name }}
        </a>
      </div>
    </div>

    <ClientOnly>
      <Modal
        class="bg-red-500 p-6 rounded-md w-full h-full"
        ref="dialog-project"
        @onClose="onDialogClose"
      >
        <Gallery v-if="images && images.length" :images="images" />
      </Modal>
    </ClientOnly>
  </div>
</template>
