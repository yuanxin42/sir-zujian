<template>
  <div class="carousel" :style="sirStyle">
    我是那个要实现的轮播图
    <slot></slot>
    <ul class="childitems">
      <li class="childitem" v-for="(val,index) in carousel" :key="index"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'carousel',
  props: {
    width: {
      type: String | Number,
      default: '100%',
    },
    height: {
      type: String | Number,
      default: '100%',
    },
    time: {
      type: String | Number,
      default: '1500',
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
      carousel: [],
      timer: "",
      isshow: 0
    }
  },
  methods: {
    init() {
      this.$children.forEach((vm, index) => {
        if (vm.$options.name === 'sir-carouselItem') {
          if (index === this.isshow) {
            vm.isopacity = '1'
          } else {
            vm.isopacity = '0'
          }
          this.carousel.push(vm)
        }
      })
      this.isshow++
    },
    toRun() {
      this.timer = setInterval(() => {
        this.carousel.forEach((val, index) => {
          if (index === this.isshow) {
            val.isopacity = '1'
          } else {
            val.isopacity = '0'
          }
        })
        this.isshow++
        if (this.isshow >= this.carousel.length) {
          this.isshow = 0
        }
      }, this.time)
    }
  },
  created() {
  },
  mounted() {
    this.init()
    this.toRun()
  }
}
</script>
<style lang="less" scoped>
.carousel {
  position: relative;
  overflow: hidden; // background: red;
  .childitems{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    .childitem{
      width: 20px;
      height: 20px;
      background: red;
      border-radius: 50%;
      float: left;
      margin-right: 20px;
    }
  }
}
li{
  list-style: none;
}
</style>