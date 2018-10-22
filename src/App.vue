<template>
  <div id="app">
    <!-- <sir-zj></sir-zj>
             <sir-card width='400px'>
              <div slot="cardHeader">
                <img class="cardHover" src="./assets/image/t01b68886e4ba7bb7c5.png" alt="">
              </div>
              <div slot="cardFotter">
                <div class="cardTitle">
                  <a href="http://www.360.cn/n/10274.html">360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股</a>
                </div>
                <div class="cardTitle">
                  <a href="http://www.360.cn/n/10274.html">360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股360公司于上交所敲锣 成功回归A股</a>
                </div>
              </div>
            </sir-card>
            <sir-container>
              <sir-header>Header</sir-header>
              <sir-main>Main</sir-main>
            </sir-container>
            <sir-container>
              <sir-header>Header</sir-header>
              <sir-main>Main</sir-main>
              <sir-footer>Footer</sir-footer>
            </sir-container>
            <sir-container>
              <sir-aside width="200px">Aside</sir-aside>
              <sir-main>Main</sir-main>
            </sir-container>
            <sir-container>
              <sir-header>Header</sir-header>
              <sir-container>
                <sir-aside width="200px">Aside</sir-aside>
                <sir-main>Main</sir-main>
              </sir-container>
            </sir-container>
            <sir-container>
              <sir-header>Header</sir-header>
              <sir-container>
                <sir-aside width="200px">Aside</sir-aside>
                <sir-container>
                  <sir-main>Main</sir-main>
                  <sir-footer>Footer</sir-footer>
                </sir-container>
              </sir-container>
            </sir-container>

            <sir-container>
              <sir-aside width="200px">Aside</sir-aside>
              <sir-container>
                <sir-header>Header</sir-header>
                <sir-main>Main</sir-main>
              </sir-container>
            </sir-container>

            <sir-container>
              <sir-aside width="200px">Aside</sir-aside>
              <sir-container>
                <sir-header>Header</sir-header>
                <sir-main>Main</sir-main>
                <sir-footer>Footer</sir-footer>
              </sir-container>
            </sir-container>  -->
    <!-- <sir-container>
                <sir-aside width="100px">12121212awsadsa</sir-aside>
                <sir-container>
                  <sir-header>121212</sir-header>
                  <sir-main>121212</sir-main>
                  <sir-footer>121212</sir-footer>
                </sir-container>
              </sir-container> -->
    <!-- <sir-tabs tabPosition='left'>
                <sir-tab label="用户管理阿斯顿撒打算" name="first1">我是tab11</sir-tab>
                <sir-tab label="用户管2" name="first2">我是tab2</sir-tab>
                <sir-tab label="用户管理33" name="first3">我是tab33</sir-tab>
              </sir-tabs> -->
    <!-- <div style="width:700px">
                <sir-carousel></sir-carousel>
              </div> -->
    <sir-scrolltop></sir-scrolltop>
    <sir-navmenu>
      <div slot="navtop">
        <a class="navTopBlock" href="https://www.baidu.com" alt="樱花庄的白猫">
          樱花庄的白猫</a>
      </div>
      <div slot="allsubmenu">
         <sir-submenu>111</sir-submenu>
         <sir-submenu>222</sir-submenu>
         111
         222
      </div>
      <!-- <span class="sakurasono"> さくら
                  <ruby style="ruby-position:over;">荘
                    <rp></rp>
                    <rt>そ</rt>
                    <rp></rp>
                  </ruby>の</span>
                <span class="shironeko">
                  <ruby style="ruby-position:over;">白
                    <rp></rp>
                    <rt>しろ</rt>
                    <rp></rp>猫
                    <rp></rp>
                    <rt>ねこ</rt>
                    <rp></rp>
                  </ruby>
                </span> -->

    </sir-navmenu>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: './assets/image/t01b68886e4ba7bb7c5.png',
      currentDate: new Date()
    }
  }
}
</script>

<style>
#app {
  height: 2000px;
  background: powderblue;
}
</style>
