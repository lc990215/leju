<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <home-recommend-view :recommends = 'recommends' />
    <home-swiper :banners = 'banners'></home-swiper>
  </div>
</template>

<script>
// 网络请求
import { getHomeSwiper, getHomeGoods,getHomeRecommend } from 'network/home'

//公共组件
import BackTop from 'components/common/backTop/BackTop.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import NavBar from 'components/common/navBar/NavBar'

//子组件
import HomeRecommendView from './childComps/HomeRecommendView'
import HomeSwiper from './childComps/HomeSwiper'
export default {
  data () {
    return {
      banners: [],
      recommends:[]
    }
  },
  created () {
    getHomeSwiper().then(res => {
      this.banners = res.data.items
    })
    getHomeRecommend().then(res=>{
      this.recommends = res.data.items
      console.log(this.recommends);
    })
  },
  methods: {},
  components: {
    Scroll,
    BackTop,
    NavBar,
    HomeRecommendView,
    HomeSwiper
  }
}
</script>

<style lang="scss" scoped>
.nav-top {
  position: fixed;
  top: 0;
}
.home-nav {
  background-color: $color_pink;
  color: #fff;
}
.row {
  margin: 0;
}
</style>
