import zj from './zujian'
import card from './card'
export default {
  install: (Vue) => {
    Vue.component('sir-zj', zj)
    Vue.component('sir-card', card)
  }
}
