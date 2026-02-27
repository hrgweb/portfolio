<script lang="ts" setup>
import * as info from '@/data/info.json'
</script>

<template>
  <div id="hire">
    <h3 class="text-md uppercase pb-3 text-center font-medium">
      Send a message
    </h3>

    <div
      :class="`rounded-[var(--radius)] bg-slate-200 p-3  md:w-[49%] lg:bg-slate-200`"
    >
      <div
        v-for="item in info.contact"
        :key="item.key"
        class="flex gap-6 items-center"
      >
        <div class="avatar">
          <resume-contact-image :id="item.key" />
        </div>
        <a :href="`mailto:${item.email}`" target="_blank" class="item-info">
          <h5>{{ item.platform }}</h5>
          <small>{{ item.email }}</small>
        </a>
      </div>
    </div>
  </div>
</template>
