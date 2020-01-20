/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false


// router.beforeEach((to, from, next) => {
//   if(from.name === 'preview'){
//     return next({path: `/signin${to.fullPath ? `?redirect=${to.fullPath}` : ''}`})
//   }
//   next()
// })

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
