import Vue from 'vue'
import router from './router/router'

new Vue({
  el: '#app',
  router,
  render: h => h({template: '<router-view></router-view>'})
})
