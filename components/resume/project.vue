<template>
  <div class="portfolio">
    <h3>Portfolio</h3>
    <div class="projects">
      <div v-for="project in info.projects" class="item">
        <Image
          :src="project.thumbnail"
          :alt="project.name"
          width="250"
          @click="openProject(project.key)"
        />
        <a
          :href="project.url"
          target="_blank"
          style="
            display: block;
            color: inherit;
            text-decoration: none;
            padding: 0.8em 0 0;
          "
          >{{ project.name }}</a
        >
      </div>
    </div>
    <Galleria
      v-model:visible="dialogProject"
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="9"
      containerStyle="max-width: 80%"
      :circular="true"
      :fullScreen="true"
      :showItemNavigators="true"
      :showThumbnails="false"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.src"
          :alt="slotProps.item.title"
          style="width: 100%; display: block"
        />
      </template>
    </Galleria>
  </div>
</template>

<script setup lang="ts">
import * as info from '@/data/info.json'
import type { Image } from '@/types/image'

const dialogProject = ref(false)
const images = ref<Image[]>([])
const responsiveOptions = ref([
  {
    breakpoint: '1500px',
    numVisible: 5
  },
  {
    breakpoint: '1024px',
    numVisible: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
])

function openProject(projectName: string) {
  dialogProject.value = true
  images.value = useImages(projectName)
}
</script>

<style scoped></style>
