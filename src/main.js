import Vue from 'vue'
import App from './App.vue'
import sir from './components/index.js'
Vue.use(sir)
new Vue({
  el: '#app',
  render: h => h(App)
})
