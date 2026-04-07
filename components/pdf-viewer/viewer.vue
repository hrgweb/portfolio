<script setup>
import { ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const page = ref(1)
const { pdf, pages } = usePDF('/resume.pdf')
</script>

<template>
  <div>
    <div class="text-center space-x-4 py-1">
      <button
        class="bg-blue-500 py-1 px-3 rounded-md text-white"
        @click="page = page > 1 ? page - 1 : page"
      >
        Prev
      </button>
      <span>{{ page }} / {{ pages }}</span>
      <button
        class="bg-blue-500 py-1 px-3 rounded-md text-white"
        @click="page = page < pages ? page + 1 : page"
      >
        Next
      </button>
    </div>
    <VuePDF :pdf="pdf" :page="page" />
  </div>
</template>
