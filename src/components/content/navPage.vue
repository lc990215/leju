<template>
  <div class="pageNav">
    <div
      :class="['page-item',currentIndex == index? 'isActive':'']"
      v-for="(item, index) in pageInfo"
      :key="index"
      @click="routePush(item.path,index)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    pageInfo: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {},
  methods: {
    routePush (path, index) {
      this.$router.push(path)
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.pageNav {
  display: flex;
  margin: 0 auto;
  .page-item {
    margin-left: 15px;
  }
  .page-item:first-child {
    margin-left: 0;
  }
  .isActive {
    position: relative;
  }
  .isActive:after {
    content: '';
    position: absolute;
    width: 101%;
    background-color: red;
    left: 2px;
    height: 5px;
    bottom: -10px;
    border-radius: 3px;
  }
}
</style>
