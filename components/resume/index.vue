<template>
  <div class="resume">
    <div class="resume-header">
      <Avatar image="/hrg.webp" class="mr-2" size="xlarge" shape="circle" />

      <div>
        <h2>{{ info.author }}</h2>
        <span>{{ info.position_raw }}</span>
      </div>
    </div>

    <div class="resume-content">
      <div class="resume-sidebar"></div>
      <div class="resume-body"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as info from '@/data/info.json'
</script>

<style lang="scss">
.resume {
  background-color: #fff;
  border-radius: 6px;
  position: relative;
  top: -3rem;
  width: 900px;
  padding: 1.5rem 2rem;
  margin: auto;
  box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;
  color: #8492a6;
}

.resume-header {
  display: flex;
  align-items: center;

  .p-avatar {
    width: 140px;
    height: 140px;
    margin-right: 2rem;
  }

  h2,span {
    margin: 0;
  }

  h2 {
    padding-bottom: .5rem;
    font-size: 30px;
    font-weight: 500;
    color: rgb(22, 28, 45);
  }
}

.resume-content {
}
</style>
