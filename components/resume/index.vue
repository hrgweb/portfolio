<script setup lang="ts">
import * as info from '@/data/info.json'
import Avatar from '../shared/avatar.vue'
import type { SocialType } from '~/types'
import Social from './social.vue'
import Modal from '../shared/modal.vue'
import Viewer from '../pdf-viewer/viewer.vue'

const pdfRef = useTemplateRef('dialog-pdf')

function openResume() {
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
    <div
      class="resume -mt-20 sm:-mt-28 px-2 sm:p-6 lg:-mt-[6.5rem] lg:min-w-[1024px] lg:w-[1024px] lg:max-w-[1024px] lg:mx-auto lg:bg-slate-100 lg:rounded-md"
    >
      <Modal
        class="p-6 rounded-md w-full md:border-green-500 xl:w-[calc(100%-20rem)] h-full 500 overflow-hidden !bg-slate-300"
        ref="dialog-pdf"
        @onClose="closePdfViewer"
      >
        <Viewer />
      </Modal>

      <div
        class="resume-header flex flex-col items-center lg:flex-row lg:gap-7"
      >
        <Avatar
          class="img-author !mr-0"
          src="/hrg.webp"
          :name="info.author"
          style="margin-right: 2rem"
        />

        <div class="info text-center lg:flex lg:flex-col lg:items-start">
          <h2 class="text-2xl font-medium pt-3 lg:pt-0">{{ info.author }}</h2>
          <resume-title />

          <ul
            class="flex items-center gap-2 justify-center py-8 lg:py-0 lg:pt-4"
          >
            <li v-for="social in info.social" class="cursor-pointer">
              <Social
                :name="social.name as SocialType"
                :social="social"
                @open-resume="openResume"
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="resume-wrapper flex flex-col gap-10">
        <div class="about">
          <h3 class="text-md font-medium uppercase pb-3 text-center">About</h3>
          <p class="text-justify">
            Hergen is a Web Developer for 7 years of professional experienced.
            He loves writing codes the right way. A big fan of best practices
            and adhere to conventions. He strive to adapt the latest trends of
            technology to create exceptional web apps. Most of his works were
            built from the ground up. Meticulously design and develop to cater
            the needs of the clients. He believes that if he can make the
            clients happy then its a win win situation. Wanna
            <a href="#hire" class="underline font-medium">hire him</a>?
          </p>
        </div>

        <resume-project />
        <resume-stack />
        <resume-experience />
        <resume-skills />
        <resume-contact />
      </div>
    </div>
  </ClientOnly>
</template>
