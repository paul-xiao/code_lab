import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const include = function(path) {
  return () => import(`@/views/${path}`)
}

// history: connect-history-api-fallback

const router = new Router({
  mode: 'hash',
  routes: [

      {
        path: '/',
        name: 'file',
        component: include('file'),
        meta: {
          auth: false
        }
      },
      {
        path: '/signin',
        name: 'signin',
        component: include('signin'),
        meta: {
          auth: false
        }
      },
      {
        path: '/preview:id?',
        name: 'preview',
        component: include('file'),
        meta: {
          auth: true
        }
      },
      {
        path: '/vif',
        name: 'vif',
        component: include('vif'),
        meta: {
          auth: true
        }
      }
    ]
})

export default router
