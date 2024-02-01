<template>
  <div class="experience">
    <div class="item">
      <Avatar image="/hrg.webp" class="mr-2" size="xlarge" shape="circle" />

      <div class="item-info">
        <h5>Full Stack Developer</h5>
        <span>3 Years Experience</span>
        <span><a href="#" style="color: rgb(39, 99, 209)">CircleCi</a> @London, UK</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;

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

  .p-avatar {
    margin-right: 1.5rem;
  }
}
</style>
