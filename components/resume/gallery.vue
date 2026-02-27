<script setup lang="ts">
import type { IImage } from '~/types'

const props = defineProps<{
  images: IImage[]
}>()

const currentImage = ref<IImage | null>(props.images?.[0] ?? null)
const index = ref(0)
const prevMaxReach = ref(false)
const nextMaxReach = ref(false)

onMounted(() => {
  prevMaxReach.value = true
})

function onImageClick(image: IImage, i: number) {
  currentImage.value = image
  index.value = i
}

function onPrev() {
  nextMaxReach.value = false

  const index = props.images.findIndex(
    (image) => image.src === currentImage.value?.src
  )
  if (index > 0) {
    const newIndex = index - 1
    currentImage.value = props.images[newIndex]

    if (newIndex <= 0) {
      prevMaxReach.value = true
    }
  }
}

function onNext() {
  prevMaxReach.value = false

  const images = props.images
  const imageLength = images.length - 1

  const index = images.findIndex(
    (image) => image.src === currentImage.value?.src
  )
  if (index < imageLength) {
    const newIndex = index + 1
    currentImage.value = images[newIndex]

    if (newIndex >= imageLength) {
      nextMaxReach.value = true
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-3 justify-between relative">
    <!-- Controls -->
    <div
      class="absolute top-[calc(100vh-520px)] w-full flex justify-between overflow-hidden items-center"
    >
      <div>
        <button
          v-if="!prevMaxReach"
          class="bg-white cursor-pointer"
          @click="onPrev"
        >
          <svg
            class="w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"
            />
          </svg>
        </button>
      </div>
      <div>
        <button
          v-if="!nextMaxReach"
          class="bg-white cursor-pointer"
          @click="onNext"
          :disabled="
            currentImage?.src === props.images?.[props.images.length - 1]?.src
          "
        >
          <svg
            class="w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="min-h-full h-[calc(100vh-220px)] max-h-full items-center flex">
      <!-- Preview -->
      <NuxtImg
        class="w-full h-full object-contain rounded-lg"
        :src="currentImage?.src"
        :alt="currentImage?.title"
        format="webp"
      />
    </div>

    <!-- List of images available -->
    <div
      class="flex flex-row max-w-full h-[100px] overflow-x-auto justify-center"
    >
      <div
        class="cursor-pointer w-[80px] shrink-0"
        v-for="(image, i) in props.images"
        :key="image.src"
        @click="() => onImageClick(image, i)"
      >
        <NuxtImg
          class="w-full h-full"
          :src="image.src"
          :alt="image.title"
          format="webp"
        />
      </div>
    </div>
  </div>
</template>
