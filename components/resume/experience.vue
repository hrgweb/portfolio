<script lang="ts" setup>
import * as info from '@/data/info.json'
import Work from './work.vue'
</script>

<template>
  <div class="experience">
    <h3 class="text-md font-medium uppercase pb-3 text-center">
      Work Experience
    </h3>

    <div
      class="gap-3 flex flex-col md:flex-row md:flex-wrap md:justify-between"
    >
      <Work v-for="item in info.experience" :item="item" :key="item.company" />
    </div>

    <!-- Open resume -->
    <p style="text-align: center; color: rgb(39, 99, 209); margin: 1em 0 0">
      <a class="seemore" :href="info.social[0]?.url" target="_blank"
        >See more...</a
      >
    </p>
  </div>
</template>
