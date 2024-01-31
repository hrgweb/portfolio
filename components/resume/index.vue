<template>
  <div class="resume">
    <div class="resume-header">
      <Avatar image="/hrg.webp" class="mr-2" size="xlarge" shape="circle" />

      <div>
        <h2>{{ info.author }}</h2>
        <span>{{ info.position_raw }}</span>

        <ul>
          <li v-for="social in info.social">
            <a v-tooltip.top="social.desc" :href="social.url" target="_blank"
              ><i :class="social.icon" style="font-size: 1.2rem"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="resume-wrapper">
      <div class="resume-sidebar">
        <h3>Skills</h3>

        <div class="skills">
          <template v-for="skill in info.skills">
            <Chip :label="skill" icon="pi pi-apple" />
          </template>
        </div>
      </div>

      <div class="resume-content">
        <h3>Portfolio</h3>

        <div class="projects">
          <div v-for="project in info.projects" class="item">
            <Image
              :src="project.thumbnail"
              :alt="project.name"
              width="250"
              @click="openProject(project.key)"
            />
            <h4>{{ project.name }}</h4>
          </div>
        </div>

        <Galleria
          v-model:visible="dialogProject"
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="9"
          containerStyle="max-width: 90%"
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
    </div>
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

<style lang="scss">
.resume {
  background-color: #fff;
  border-radius: 6px;
  position: relative;
  top: -7rem;
  width: 1200px;
  padding: 1.5rem 2rem;
  margin: auto;
  box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;
  color: #8492a6;
}

.resume-header {
  display: flex;
  align-items: center;
  padding-bottom: 1.8rem;
  border-bottom: 1px solid #e0e4e9;

  .p-avatar {
    width: 140px;
    height: 140px;
    margin-right: 2rem;
  }

  h2,
  span {
    margin: 0;
  }

  h2 {
    padding-bottom: 0.5rem;
    font-size: 30px;
    font-weight: 500;
    color: rgb(22, 28, 45);
  }

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    padding-top: 1.5rem;

    li {
      list-style: none;

      a {
        display: block;
        color: inherit;
        padding-right: 0.5rem;
      }
    }
  }
}

.resume-wrapper {
  display: flex;
  margin-top: 1rem;

  h3 {
    margin: 0;
    padding: 0.5rem 0 1rem;
    text-transform: uppercase;
  }
}

.resume-sidebar {
  width: 320px;
  max-width: 320px;
  border-right: 1px solid #e0e4e9;

  .p-chip {
    margin-right: 0.3rem;
    margin-top: 0.3rem;
  }

  .p-chip-text {
    text-transform: capitalize;
  }
}

.resume-content {
  flex: 1;
  padding: 0 2rem;
}

.projects {
  display: flex;

  .item {
    padding-right: 1rem;

    img {
      cursor: pointer;
      border-radius: 6px;
      border: 1px solid #e3e3e3;
    }
  }
}
</style>
