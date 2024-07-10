<!--
 * @Description: 网址导航公用组件
 * @Author: shaoshuai
-->
<template>
  <!-- 网址分类模块 -->
  <section class="site-section-list">
    <!-- 瞄点标题 -->
    <h2 class="title" :id="createTitle">
      {{ props.title }}
      <a class="header-anchor" :href="`#${createTitle}`" aria-hidden="true"></a>
    </h2>
    <!-- 网址列表 -->
    <ul class="list" v-if="props.data.length > 0">
      <li class="item" v-for="(v, index) in props.data" :key="v.name">
        <a class="link" :href="v.link" target="_blank">
          <div class="iconBox">
            <img :src="v.icon" onerror="this.style.display='none'" alt="" />
            <h4 class="name">{{ v.name }}</h4>
          </div>
          <p class="desc">{{ v.desc }}</p>
        </a>
      </li>
    </ul>
  </section>
  <BackTop></BackTop>
</template>
<script setup>
import { computed } from "vue";
import { slugify } from "@mdit-vue/shared";
const props = defineProps({
  title: String,
  data: {
    type: Array,
    default: [],
  },
});

// 生成markdown的侧边栏目录
const createTitle = computed(() => {
  if (!props.title) return "";
  return slugify(props.title);
});
</script>

<style lang="scss" scoped>
/*单行文本省略号*/

@mixin single-ellipsis {
  overflow: hidden;
  word-wrap: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.site-section-list {
  --m-nav-box-gap: 12px;
  --m-nav-gap: 20px;
  --m-nav-icon-size:24px;
  .title {
    color: #222;
  }
  .list {
    --m-nav-gap: 10px;
    display: grid;
    grid-row-gap: var(--m-nav-gap);
    grid-column-gap: var(--m-nav-gap);
    grid-auto-flow: row dense;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    .item {
      display: block;
      border: 1px solid #f6f6f7;
      border-radius: 8px;
      height: 100%;
      background-color: #f6f6f7;
      transition: all 0.25s;
      font-weight: 500;
      color: #00a98e;
      text-decoration-style: dotted;
      transition: all 0.25s;
      &:hover {
        box-shadow:
          0 3px 12px rgba(0, 0, 0, 0.07),
          0 1px 4px rgba(0, 0, 0, 0.07);
        border-color: #00a98e;
        text-decoration: initial;
        background-color: #f9f9fa;
      }
      .link {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: var(--m-nav-box-gap);
        height: 100%;
        color: rgba(60, 60, 67);
      }

      .iconBox {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: var(--m-nav-icon-size);
        transition: background-color 0.25s;
        img {
          width: 40px;
          height: 40px;
          border-radius: 4px;
          margin-right: 12px;
        }
        h4 {
          overflow: hidden;
          flex-grow: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 16px;
          font-weight: 600;
        }
      }
      .desc {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
        margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
        line-height: 1.5;
        font-size: 12px;
        color: var(--vp-c-text-2);
      }
    }
    .item + li {
      margin-top: 0;
    }
  }
}
</style>
