import Vue from 'vue'
import Router from 'vue-router'
import Boards from './views/Boards.vue'
import About from './views/About.vue'
import NProgress from 'nprogress'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'boards',
      component: Boards
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // console.log('Redirect')
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router