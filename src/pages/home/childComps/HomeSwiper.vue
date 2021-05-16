<template>
  <div>
    <v-carousel height="100%">
      <v-carousel-item v-for="item in banners" :key="item.id">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-img :lazy-src="item.pic" :src="item.pic" height="200"></v-img>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .row{
        margin: 0;
    }
</style>
