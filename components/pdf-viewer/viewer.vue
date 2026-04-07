<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const page = ref(1)
const { pdf, pages } = usePDF('/resume-04072026.pdf')
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth < 768
  console.log('mobile', isMobile.value)
}

onMounted(() => {
  window.addEventListener('resize', checkMobile)
  checkMobile()
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

function onPrevPage() {
  page.value = page.value > 1 ? page.value - 1 : page.value
}

function onNextPage() {
  page.value = page.value < pages.value ? page.value + 1 : page.value
}
</script>

<template>
  <div class="overflow-hidden h-[calc(100vh-110px)] w-full rounded-md">
    <div class="text-center space-x-2 py-1 pb-6">
      <button
        class="bg-blue-500 py-1 px-3 rounded-md text-white text-xs"
        @click="onPrevPage"
      >
        Prev
      </button>
      <span class="text-sm">{{ page }} / {{ pages }}</span>
      <button
        class="bg-blue-500 py-1 px-3 rounded-md text-white text-xs"
        @click="onNextPage"
      >
        Next
      </button>
    </div>
    <div
      class="overflow-auto max-w-full h-[calc(100vh-180px)] 500 rounded-md md:w-[calc(100%-6rem)] mx-auto"
    >
      <VuePDF :pdf="pdf" :page="page" :scale="1.6" />
    </div>
  </div>
</template>
