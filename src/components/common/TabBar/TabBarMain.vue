<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="~assets/img/首页.png" alt="" slot="tab-img" />
        <img src="~assets/img/分类选中效果.png" alt="" slot="tab-active-img" />
        <div slot="tab-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/img/分类.png" alt="" slot="tab-img" />
        <img src="~assets/img/分类选中效果.png" alt="" slot="tab-active-img" />
        <div slot="tab-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/brand">
        <img src="~assets/img/指南.png" alt="" slot="tab-img" />
        <img src="~assets/img/指南选中.png" alt="" slot="tab-active-img" />
        <div slot="tab-text">发现</div>
      </tab-bar-item>
      <tab-bar-item path="/user">
        <img src="~assets/img/我的.png" alt="" slot="tab-img" />
        <img src="~assets/img/我的选中.png" alt="" slot="tab-active-img" />
        <div slot="tab-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import { TabBar, TabBarItem } from './index.js'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style></style>
