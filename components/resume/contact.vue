<template>
  <div class="contact" id="hire">
    <h3>Send a message or ping via</h3>

    <div class="items">
      <div v-for="item in info.contact" class="item" :class="item.key">
        <div class="avatar">
          <resume-contact-image :id="item.key" />
        </div>
        <div class="item-info">
          <h5>{{ item.platform }}</h5>
          <small>{{ item.email }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as info from '@/data/info.json'
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  h3 {
    text-align: center;
    font-size: 2rem;
  }
}

.items {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  flex-basis: 45%;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-right: 1.5rem;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;
  color: #fff;
  width: 100%;

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

  &.skype {
    background: #46c1f3;
  }
  &.gmail {
    background: #ff5749;
  }
}

.avatar {
  padding-right: 1.3rem;
}

@media (max-width: 420px) {
  .contact {
    .item {
      font-size: 0.7rem;
    }
  }
}

@media (max-width: 560px) {
  .contact {
    .item {
      font-size: 0.9rem;
    }
  }
}

@media (min-width: 768px) {
  .items {
    flex-direction: row;
  }

  .contact {
    .item {
      font-size: 0.9rem;
      margin-right: 1rem;
      flex: 1;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

@media (min-width: 1024px) {
}
</style>
