import zj from './zujian'
import card from './card'
import container from './container/index'
import aside from './container/aside'
import footer from './container/footer'
import header from './container/header'
import main from './container/main'
import tabs from './tabs/index'
import tab from './tabs/tab'
import carousel from './carousel/index'
import scrolltop from './scrolltop/index'
import navmenu from './navmenu/index'
import submenu from './navmenu/submenu'

export default {
  install: (Vue) => {
    Vue.component('sir-zj', zj)
    Vue.component('sir-card', card)
    Vue.component('sir-container', container)
    Vue.component('sir-aside', aside)
    Vue.component('sir-footer', footer)
    Vue.component('sir-header', header)
    Vue.component('sir-main', main)
    Vue.component('sir-tabs', tabs)
    Vue.component('sir-tab', tab)
    Vue.component('sir-carousel', carousel)
    Vue.component('sir-scrolltop', scrolltop)
    Vue.component('sir-navmenu', navmenu)
    Vue.component('sir-submenu', submenu)
    
    
  }
}
