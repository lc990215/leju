<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
          <a>
              <img  :src="item.pmsProductCategory.icon" alt="">
              <div>
                
              </div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend{
  display: flex;
  .recommend-item{
    flex: 1;
  }
}
</style>
