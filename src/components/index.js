import zj from './zujian'
import card from './card'
import container from './container/index'
import aside from './container/aside'
import footer from './container/footer'
import header from './container/header'
import main from './container/main'
export default {
  install: (Vue) => {
    Vue.component('sir-zj', zj)
    Vue.component('sir-card', card)
    Vue.component('sir-container', container)
    Vue.component('sir-aside', aside)
    Vue.component('sir-footer', footer)
    Vue.component('sir-header', header)
    Vue.component('sir-main', main)
  }
}
