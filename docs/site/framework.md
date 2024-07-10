---
pageClass: site-layout
---

# 前端导航

<SiteList v-for="model in siteData" :key="model.title" :title="model.title" :data="model.items" />
<script setup>
// 网址导航页面的数据
import siteData from "./data/framework.js";
</script>