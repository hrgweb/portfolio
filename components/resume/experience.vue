<template>
  <div class="experience">
    <h3>Work Experience</h3>

    <div v-for="item in info.experience" class="item">
      <div class="avatar">
        <template v-if="item.avatar"
          ><img :src="`/experience/${item.avatar}`" :alt="item.company"
        /></template>
        <template v-else
          ><i class="pi pi-building" style="font-size: 2rem"></i
        ></template>
      </div>

      <div class="item-info">
        <h5>{{ item.position }}</h5>
        <span>{{ item.yrsStr }}</span>
        <span
          ><a style="color: rgb(39, 99, 209)">{{ item.company }}</a> @{{
            item.address
          }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as info from '@/data/info.json'
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;

  img {
    width: 40px;
  }

  h5 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    padding-bottom: 0.2rem;
  }

  span {
    display: block;
    padding-bottom: 0.2rem;
    font-size: 1rem;
    font-weight: normal;

    &:last-child {
      padding-bottom: 0;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    cursor: default;
  }
}

.avatar {
  padding-right: 1.3rem;
}
</style>
