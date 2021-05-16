<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      scroll: null
    }
  },
  props: {
    'probe-type': {
      type: Number,
      default: 3
    }
  },
  mounted () {
    const bs = new BScroll('.wrapper', {
      pullUpLoad: true,
      probeType: this.probeType
    })
    this.scroll = bs
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })
    this.scroll.on('pullingUp', () => {
      console.log('到底了')
    })
  },
  methods: {
    scrollTo (x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: red;
  height: 200px;
  overflow: hidden;
}
</style>
