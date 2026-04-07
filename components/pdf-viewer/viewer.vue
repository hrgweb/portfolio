<script setup>
import { ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const page = ref(1)
const { pdf, pages } = usePDF('/resume.pdf')
</script>

<template>
  <div>
    <div class="text-center space-x-2 py-1 pb-6">
      <button
        class="bg-blue-500 py-1 px-3 rounded-md text-white text-xs"
        @click="page = page > 1 ? page - 1 : page"
      >
        Prev
      </button>
      <span class="text-sm">{{ page }} / {{ pages }}</span>
      <button
        class="bg-blue-500 py-1 px-3 rounded-md text-white text-xs"
        @click="page = page < pages ? page + 1 : page"
      >
        Next
      </button>
    </div>
    <div class="overflow-auto h-[calc(100vh-100px)]">
      <VuePDF :pdf="pdf" :page="page" />
    </div>
  </div>
</template>
