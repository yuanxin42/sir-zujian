<template>
    <div class="lunboMain">
        <div class="lunbo">
          <transition-group tag="ul" name="image">
              <li :key="0" v-show="lunboIndex === 0"><img src="../../assets/image/t01e6e7b1790fcb40b2.jpg" alt="#"></li>
              <li :key="1" v-show="lunboIndex === 1"><img src="../../assets/image/t01a83ee242957a054f.png" alt="#"></li>
              <li :key="2" v-show="lunboIndex === 2"><img src="../../assets/image/t01e7d89615e1846abe.jpg" alt="#"></li>
          </transition-group>
          <ul class="allbtn">
              <li :class="{btncolor:btnNum===0}" @click="changemark(0)"></li>
              <li :class="{btncolor:btnNum===1}" @click="changemark(1)"></li>
              <li :class="{btncolor:btnNum===2}" @click="changemark(2)"></li>
          </ul>
          <div class="leftbtn lunbobtn" @click="lunboJian()">&lt;</div>
          <div class="rightbtn lunbobtn" @click="lunboAdd()">&gt;</div>
        </div>
        <div class="lunboItems">
            <div :class="{items:true,lunboBottom:btnNum===0}" @click="changemark(0)">
               <div class="icon"></div>
               <div class="items-tit">
                 <p class="firstTit">360安全卫士</p>
                 <p class="secTit">拦捆绑，反欺诈，十年“卫”生活</p>
               </div>
            </div>
            <div :class="{items:true,lunboBottom:btnNum===1}" class="items" @click="changemark(1)">
              <div class="icon icon2"></div>
              <div class="items-tit">
                 <p class="firstTit">浏览器/杀毒</p>
                 <p class="secTit">全面防护，性能出众</p>
               </div>
            </div>
            <div :class="{items:true,lunboBottom:btnNum===2}" class="items" @click="changemark(2)">
              <div class="icon icon3"></div>
              <div class="items-tit">
                 <p class="firstTit">360安全卫士</p>
                 <p class="secTit">拦捆绑，反欺诈，十年“卫”生活</p>
               </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
      lunboIndex: 0,
      timer: null,
      btnNum: 0,
      jieliu: null
    }
  },
  methods: {
    stoplunbo () {
      clearInterval(this.timer)
      this.timer = null
    },
    changemark (index) { // 防止用户狂点，加个函数节流
      this.stoplunbo()
      if (!this.jieliu) {
        this.jieliu = setTimeout(() => {
          this.stoplunbo()
          this.lunboIndex = index
          this.btnNum = index
          this.runlunbo()
          this.jieliu = null
        }, 500)
      }
    },
    lunboJian () { // 防止用户狂点，加个函数节流
      this.stoplunbo()
      if (!this.jieliu) {
        this.jieliu = setTimeout(() => {
          this.lunboIndex--
          this.btnNum--
          if (this.lunboIndex === -1) {
            this.lunboIndex = 2
            this.btnNum = 2
          }
          this.jieliu = null
          this.runlunbo()
        }, 500)
      }
    },
    lunboAdd () { // 防止用户狂点，加个函数节流
      this.stoplunbo()
      if (!this.jieliu) {
        this.jieliu = setTimeout(() => {
          this.lunboIndex++
          this.btnNum++
          if (this.lunboIndex === 3) {
            this.lunboIndex = 0
            this.btnNum = 0
          }
          this.jieliu = null
          this.runlunbo()
        }, 500)
      }
    },
    runlunbo () {
      this.timer = setInterval(() => {
        this.lunboIndex++
        this.btnNum++
        if (this.lunboIndex === 3) {
          this.lunboIndex = 0
          this.btnNum = 0
        }
      }, 3000)
    }
  },
  components: {
  },
  mounted () {
    this.runlunbo()
  }
}
</script>

<style lang='less' scoped>
@import "../../assets/css/common.less";
.lunbo {
    position: relative;
    width: 100%;
    height: 440px;
    overflow: hidden;
    font-size: 0;  // 解决ie浏览器的幽灵空白节点 参考文章
    // https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/
    img {
        display: block;
        width: 100%;
        height: 440px;
        position: absolute;
    }
    .allbtn {
        position: absolute;
        bottom: 20px;
        left: calc(50% - 40px);
        li {
            width: 20px;
            height: 20px;
            margin-right: 20px;
            background: #333;
            float: left;
            border-radius: 50%;
            opacity: 0.8;
            cursor: pointer;
        }
        .btncolor {
            background: #fff;
        }
    }
    .lunbobtn {
        position: absolute;
        width: 40px;
        height: 80px;
        font-size: 40px;
        line-height: 80px;
        font-family:Arial;
        color: #fff;
        background: #333;
        opacity: 0.5;
        top: 180px;
        text-align: center;
        cursor: pointer;
    }
    .rightbtn {
        right: 0;
    }
    .image-enter-active {  // 过渡
        // transform: translateX(0);
        transition: all 0.5s ease;
    }

    .image-leave-active {  // 过渡
        // transform: translateX(-100%);
        transition: all 0.5s ease;
    }

    .image-enter {  //  开始进入动画的位置
        transform: translateX(100%);
    }

    .image-leave-to {  // 结束消失的位置
        transform: translateX(-100%);
    }
}
.lunboItems{
    width: 1240px;
    // height: 110px;
    // background: red;
    margin: 0 auto;
    margin-bottom: 15px;
    display: flex;
    .items{
      width: 33.3%;
      height: 70px;
      padding-top: 22px;
      padding-bottom: 22px;
      // background: blue;
      display: flex;
      flex: 1;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      cursor: pointer;
      .icon{
          width: 70px;
          height: 100%;
          background: url(//p5.ssl.qhimg.com/t01b06334e5fa7d030c.png) no-repeat left 10px;
      }
      .icon2{
        width:170px;
        background-position:left -70px;
      }
      .icon3{
        background-position:left -140px;
      }
      .items-tit{
          .firstTit{
            height: 28px;
            line-height: 28px;
            font-size: 16px;
            font-weight: normal;
            color: #333;
            font-family: arial,"Microsoft YaHei","\5fae\8f6f\96c5\9ed1";
            -webkit-font-smoothing: antialiased;
          }
          .secTit{
            height: 18px;
            line-height: 18px;
            font-size: 13px;
            color: #999;
          }
      }
    }
    .lunboBottom{
        background: url(//p1.ssl.qhimg.com/t0169aa0d558767e4c6.png) 50% 100% no-repeat;
    }
}
</style>
