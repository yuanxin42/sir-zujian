<template>
  <div class="carousel" :style="sirStyle">
    我是那个要实现的轮播图
    <slot></slot>
    <ul class="childitems">
      <li :class="{childitem:true,showItem:index==isshow}" v-for="(val,index) in carousel" :key="index"></li>
    </ul>
    <div class="carouselBtn leftBtn"><span class="font">&lt;</span></div>
    <div class="carouselBtn rightBtn"><span class="font">&gt;</span></div>
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
      background: #fff;
      border-radius: 50%;
      float: left;
      margin-right: 20px;
    }
    .showItem{
      background: orange;
    }
  }
  .carouselBtn{
    width: 5%;
    height: 20%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    .font{
      position: absolute;
      font-size: 300%;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
  .leftBtn{
    left: 2%;
  }
  .rightBtn{
    left: auto;
    right: 2%;
  }
}
li{
  list-style: none;
}
</style>