<script lang="ts" setup>
import * as info from '@/data/info.json'
import Work from './work.vue'
import Modal from '../shared/modal.vue'
import Viewer from '../pdf-viewer/viewer.vue'

const pdfRef = useTemplateRef('dialog-pdf')

function openPdfViewer() {
  pdfRef.value?.dialogRef?.showModal()
  document.body.style.overflow = 'hidden'
}

function closePdfViewer() {
  pdfRef.value?.dialogRef?.close()
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <ClientOnly>
    <div class="experience">
      <h3 class="text-md font-medium uppercase pb-3 text-center">
        Work Experience
      </h3>

      <div
        class="gap-3 flex flex-col md:flex-row md:flex-wrap md:justify-between"
      >
        <Work
          v-for="item in info.experience"
          :item="item"
          :key="item.company"
        />
      </div>

      <!-- Open resume -->
      <p style="text-align: center; color: rgb(39, 99, 209); margin: 1em 0 0">
        <button @click="openPdfViewer">See more...</button>
      </p>

      <Modal
        class="p-6 rounded-md w-full h-full 500 overflow-hidden !bg-slate-300"
        ref="dialog-pdf"
        @onClose="closePdfViewer"
      >
        <Viewer />
      </Modal>
    </div>
  </ClientOnly>
</template>
