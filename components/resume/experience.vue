<template>
  <div class="experience">
    <h3>Work Experience</h3>

    <div class="items">
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
          <span
            >{{ item.yrsStr }}
            <small>({{ `${item.dateStart} - ${item.dateEnd}` }})</small></span
          >
          <span
            ><a style="color: rgb(39, 99, 209)">{{ item.company }}</a> @
            <small>{{ item.address }}</small></span
          >
        </div>
      </div>
    </div>

    <!-- Open resume -->
    <p style="text-align: center; color: rgb(39, 99, 209); margin: 1em 0 0">
      <a class="seemore" :href="info.social[0]?.url" target="_blank"
        >See more...</a
      >
    </p>
  </div>
</template>

<script lang="ts" setup>
import * as info from '@/data/info.json'
</script>

<style lang="scss" scoped>
$linkPrimaryColor: rgb(39, 99, 209);
a.seemore {
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  &:active,
  &:link,
  &:visited {
    color: $linkPrimaryColor;
  }

  &:hover {
    text-decoration: underline;
  }
}

.experience {
  display: flex;
  flex-direction: column;
}

.items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.item {
  display: flex;
  flex-basis: 45%;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;

  &:last-child {
    margin-right: 0;
  }

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
}

.avatar {
  padding-right: 1.3rem;
}

@media (max-width: 560px) {
  .item {
    flex-basis: unset;
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
}

@media (min-width: 768px) {
  .item {
    &:nth-child(2n + 2) {
      margin-right: 0;
      flex-basis: 50%;
    }
  }
}

@media (min-width: 1024px) {
  .item {
    &:nth-child(2n + 2) {
      margin-right: 0;
      flex-basis: 50%;
    }
  }
}
</style>
