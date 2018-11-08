<template>
  <div class="carousel" :style="sirStyle">
    我是那个要实现的轮播图
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String | Number,
      default: '100%',
    },
    height: {
      type: String | Number,
      default: '100%',
    }
  },
  computed: {
    sirStyle() {
      return {
        height: this.height,
        width: this.width
      }
    }
  },
  data() {
    return {
      carousel:[]
    }
  },
  created() {
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'sir-carouselItem') {
        console.log(vm, '看看是个啥')
        this.carousel.push(vm)
      }
    })
  }
}
</script>
<style lang="less" scoped>
  .carousel{
    position: relative;
  }
</style>