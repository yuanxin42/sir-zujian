<template>
  <div id="app">
    <sir-navmenu sirbac='#fff' :issetlocation='false'>
      <div slot="navtop">
        首页
      </div>
      <div slot="allsubmenu">
        <sir-submenu>标题1</sir-submenu>
        <sir-submenu>标题2</sir-submenu>
        <sir-submenu>标题3</sir-submenu>
      </div>
    </sir-navmenu>
    <sir-scrolltop></sir-scrolltop>
    <sir-carousel width='700px' height='400px'>
      <sir-carousel-item>
        <img src="./assets/image/t01a83ee242957a054f.png" alt="">
      </sir-carousel-item>
      <sir-carousel-item>
        <img src="./assets/image/t016fed337a2131cd83.jpg" alt="">
      </sir-carousel-item>
      <sir-carousel-item>
        <img src="./assets/image/t01e7d89615e1846abe.jpg" alt="">
      </sir-carousel-item>
      <sir-carousel-item>
        <img src="./assets/image/t016fed337a2131cd83.jpg" alt="">
      </sir-carousel-item>
    </sir-carousel>
    <sir-timeline>
      <sir-timelineTree>
        <sir-timelineItem>4444</sir-timelineItem>
        <sir-timelineItem>4444</sir-timelineItem>
        <sir-timelineItem>4444</sir-timelineItem>
      </sir-timelineTree>
      <sir-timelineTree>
        <sir-timelineItem>555</sir-timelineItem>
        <sir-timelineItem>555</sir-timelineItem>
        <sir-timelineItem>555</sir-timelineItem>
      </sir-timelineTree>
    </sir-timeline>
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
  /* background: powderblue; */
}

.demo {
  width: 700px;
  height: 400px;
  /* background: red;  */
}
</style>
