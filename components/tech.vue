<script setup lang="ts">
interface Props {
  stacks: string[]
}

withDefaults(defineProps<Props>(), {
  stacks: () => []
})
</script>

<template>
  <div
    v-for="(stack, index) in stacks"
    :key="index"
    :label="stack"
    class="text-sm capitalize cursor-default flex items-center gap-1 bg-slate-200 rounded-full px-2 py-1 lg:bg-slate-200"
  >
    <CustomIcon :name="stack" />

    <span>{{ stack }}</span>
  </div>
</template>
