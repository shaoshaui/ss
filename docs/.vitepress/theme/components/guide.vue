<template>
    <div class="ui-home">
      <!-- <div class="ui-title">前端开源项目推荐</div> -->
      <ul class="ui-project">
        <li class="item" v-for="v in siteData" :key="v.name">
          <a class="link" :href="v.link" target="_blank">
            <h3 :class="['title', v.className]">{{ v.name }}</h3>
            <p class="desc">{{ v.desc }}</p>
          </a>
        </li>
      </ul>
    </div>
    <BackTop></BackTop>
  </template>
  <script setup>
  const props = defineProps({
    data: {
      type: Array,
      default: [],
    },
  });
  </script>
  