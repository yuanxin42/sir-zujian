<template>
  <div class="aside" :style="sirStyle">
    我是那个要实现的轮播图
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    width: String | Number,
    height: String | Number
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
    }
  },
  created() {
  }
}
</script>
<style lang="less" scoped>
</style>