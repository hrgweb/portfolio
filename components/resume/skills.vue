<script setup lang="ts">
import info from '~/data/info.json'
import Chip from '../shared/chip.vue'
</script>

<template>
  <div class="skills">
    <h3 class="text-md font-medium uppercase pb-3 text-center">Skills</h3>

    <div class="list flex flex-wrap gap-2">
      <template v-for="skill in info.skills" :key="skill">
        <Chip :name="skill" />
      </template>
    </div>
  </div>
</template>
