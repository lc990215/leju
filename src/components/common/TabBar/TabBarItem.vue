<template>
  <div class="tab-bar-item" @click="routePush">
    <div class="tab-bar-img">
      <slot name="tab-active-img" v-if="isActive"></slot>
      <slot name="tab-img" v-else></slot>
    </div>
    <div class="tab-bar-text" :style="isActiveColor">
      <slot name="tab-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: '#3D4C46'
    }
  },
  methods: {
    routePush () {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActiveColor () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  .tab-bar-img > * {
    width: 48%;
  }
  .tab-bar-text{
    margin-top: 5px;
    color: #979797;
    font-size: 14px;
  }
}
</style>
