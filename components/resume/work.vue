<script lang="ts" setup>
import IconCompany from '../shared/icon-company.vue'

const props = defineProps({
  item: Object
})
</script>

<template>
  <div class="flex items-center gap-2 shadow-lg py-3 px-5 md:w-[49%]">
    <div class="avatar pr-3">
      <template v-if="item?.avatar">
        <NuxtImg
          :src="`/experience/${item?.avatar}`"
          :alt="item?.company"
          class="w-[2.5rem] h-[2.5rem] object-contain bg-white rounded-full"
          fit="cover"
        />
      </template>
      <template v-else>
        <IconCompany class="w-[2rem] h-[2rem]" />
      </template>
    </div>
    <div class="item-info flex flex-col">
      <h5>{{ item?.position }}</h5>
      <span
        >{{ item?.yrsStr }}
        <small>({{ `${item?.dateStart} - ${item?.dateEnd}` }})</small></span
      >
      <span
        ><a style="color: rgb(39, 99, 209)">{{ item?.company }}</a> @
        <small>{{ item?.address }}</small></span
      >
    </div>
  </div>
</template>
