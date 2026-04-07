<script setup lang="ts">
import type { ISocial, SocialType } from '~/types'
import IconLinkedin from '../shared/icon-linkedin.vue'
import IconGithub from '../shared/icon-github.vue'
import IconGmail from '../shared/icon-gmail.vue'
import IconResume from '../shared/icon-resume.vue'

const { name, social } = defineProps<{
  name: SocialType
  social: ISocial | null
}>()

const emit = defineEmits(['openResume'])

function openResume() {
  emit('openResume')
}
</script>

<template>
  <div v-if="name === 'resume'">
    <button class="pt-1" v-tooltip="'Resume'" @click="openResume">
      <IconResume class="!w-[1.8rem] !h-[1.8rem]" />
    </button>
  </div>
  <div v-else-if="name === 'linkedin'">
    <a target="_blank" :href="social?.url" v-tooltip="'Linkedin'">
      <IconLinkedin class="!w-[1.8rem] !h-[1.8rem]" />
    </a>
  </div>
  <div v-else-if="name === 'github'">
    <a target="_blank" :href="social?.url" v-tooltip="'Github'">
      <IconGithub class="!w-[1.8rem] !h-[1.8rem]" />
    </a>
  </div>
  <div v-else-if="name === 'gmail'">
    <a target="_blank" :href="social?.url" v-tooltip="'Gmail'">
      <IconGmail class="!w-[1.8rem] !h-[1.8rem] text-white" />
    </a>
  </div>
</template>
