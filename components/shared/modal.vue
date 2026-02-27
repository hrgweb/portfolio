<script setup lang="ts">
const dialogRef = useTemplateRef('dialog')

const { class: className } = defineProps<{
  class: string
}>()

const emit = defineEmits(['onClose'])

function onClose() {
  dialogRef.value?.close()
  emit('onClose', false)
}

defineExpose({ dialogRef })
</script>

<template>
  <dialog ref="dialog" :class="`bg-zinc-200 ${className}`">
    <div class="flex justify-end">
      <button class="relative -top-3" @click="onClose">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
          />
        </svg>
      </button>
    </div>

    <slot />
  </dialog>
</template>
