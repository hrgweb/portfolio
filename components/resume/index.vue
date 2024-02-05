<template>
  <div class="resume">
    <div class="resume-header">
      <Avatar image="/hrg.webp" class="mr-2" size="xlarge" shape="circle" />

      <div class="info">
        <h2>{{ info.author }}</h2>
        <span>{{ info.position_raw }}</span>

        <ul>
          <li v-for="social in info.social">
            <a v-tooltip.top="social.desc" :href="social.url" target="_blank"
              ><i :class="social.icon" style="font-size: 1.2rem"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="resume-wrapper">
      <div class="resume-sidebar">
        <div class="skills">
          <h3>Skills</h3>

          <div class="list">
            <template v-for="skill in info.skills">
              <Chip :label="skill" icon="pi pi-bolt" />
            </template>
          </div>
        </div>
      </div>

      <div class="resume-content">
        <div class="about">
          <h3>About</h3>
          <p style="text-align: justify; margin: 0">
            Hergen is a Full Stack Developer with over 7 years of professional
            experienced. He loves writing codes the right way. A big fan of best
            practices and adhere to conventions. He strive to adapt the latest
            trends of technology to create exceptional web apps. Most of his
            works were built from the ground up. Meticulously design and develop
            to cater the needs of the clients. He believes that if he can make
            the clients happy then its a win win situation. Wanna <a href="#hire">hire me</a>?
          </p>
        </div>

        <resume-experience />
        <resume-project />
        <resume-stack />
        <resume-contact />
      </div>
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
  top: -7rem;
  margin: auto;
  box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;
  color: #8492a6;
}

.resume-header {
  display: flex;
  align-items: center;
  padding-bottom: 1.8rem;
  border-bottom: 1px solid #e0e4e9;

  .p-avatar {
    width: 140px;
    height: 140px;
    margin-right: 2rem;
  }

  h2,
  span {
    margin: 0;
  }

  h2 {
    padding-bottom: 0.5rem;
    font-size: 30px;
    font-weight: 500;
    color: rgb(22, 28, 45);
  }

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    padding-top: 1.5rem;

    li {
      list-style: none;

      a {
        display: block;
        color: inherit;
        padding-right: 0.5rem;
      }
    }
  }
}

.resume-wrapper {
  display: flex;
  margin-top: 1rem;

  h3 {
    margin: 0;
    padding: 0.5rem 0 1rem;
    text-transform: uppercase;
  }
}

.resume-sidebar {
  width: 320px;
  border-right: 1px solid #e0e4e9;
  margin-bottom: 1em;
}

.resume-content {
  flex: 1;
  padding: 0 2rem;

  & > div {
    margin-bottom: 3em;
  }
}

.projects {
  display: flex;

  .item {
    padding-right: 1rem;

    img {
      cursor: pointer;
      border-radius: 6px;
      border: 1px solid #e3e3e3;
      height: 180px;
    }
  }
}

.skills {
  .p-chip {
    margin-right: 0.3rem;
    margin-bottom: 0.5rem;
  }

  .p-chip-text {
    text-transform: capitalize;
  }
}

@media (max-width: 420px) {
  .resume-header {
    .info {
      span {
        text-align: center;
      }
    }
  }
}

@media (max-width: 560px) {
  .resume {
    margin: 0 0.6rem;
  }

  .resume-header {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 2rem;

    .p-avatar {
      margin-right: 0;
      margin-bottom: 1rem;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      h2 {
        font-size: 1.7rem;
      }

      span {
        font-size: 0.9rem;
      }
    }
  }

  .resume-wrapper {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }

  .portfolio {
    h3 {
      text-align: center;
    }
  }

  .resume-content {
    padding: 0 1rem;

    .projects {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .item {
        padding-right: 0;
        width: 80%;
        margin-bottom: 2rem;

        img {
          width: 100%;
        }
      }
    }
  }

  .resume-sidebar {
    width: 100%;
    border-right: unset;
    padding: 0 1rem 1rem;
  }
}

@media (min-width: 768px) {
  .resume {
    margin: 0 1.5rem;
  }

  .resume-header {
    margin: 1rem;
    padding: 2rem 1rem;
  }

  .resume-wrapper {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;

    .projects {
      flex-wrap: wrap;

      .item {
        margin-right: 1rem;
      }
    }
  }

  .resume-sidebar {
    width: 100%;
    border-right: unset;
    padding: 0 2rem 1rem;
  }

  .projects {
    .item:last-child {
      margin-right: 0;
      padding-right: 0;
    }
  }
}

@media (min-width: 1024px) {
  .resume-wrapper {
    display: flex;
    flex-direction: row;
  }

  .projects {
    .item:last-child {
      margin-right: 0;
      padding-right: 0;
    }
  }

  .resume-sidebar {
    width: 320px;
    border-right: 1px solid #e0e4e9;
  }
}

@media (min-width: 1280px) {
  .resume {
    width: 1220px;
    max-width: 1220px;
    margin: auto;
  }
}
</style>
