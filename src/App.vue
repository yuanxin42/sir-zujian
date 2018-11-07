<template>
  <div id="app">
    <sir-zj></sir-zj>
    <sir-scrolltop></sir-scrolltop>
    <sir-navmenu>
      <div slot="navtop">
         123123 
      </div>
      <div slot="allsubmenu">
        <sir-submenu>123</sir-submenu>
        <sir-submenu>123</sir-submenu>
        <sir-submenu>123</sir-submenu>
      </div>
    </sir-navmenu>
    <sir-card width='400px' location='top' >
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
    <!-- </br> -->
    <!-- <div class="demo">
      <sir-codecard>
        <div slot="cardHeader">
          <sir-tabs labelwidth='200px'>
            <sir-tab label="用户管理阿斯顿撒打算" name="first1">我是tab11</sir-tab>
            <sir-tab label="用户管2" name="first2">我是tab2</sir-tab>
            <sir-tab label="用户管理33" name="first3">我是tab33</sir-tab>
          </sir-tabs>
        </div>
        <div slot="cardFotter">
        </div>
      </sir-codecard>
    </div> -->
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
  padding-top: 60px;
  /* background: powderblue; */
}

.demo {
  width: 700px;
  height: 400px;
  /* background: red;  */
}
</style>
