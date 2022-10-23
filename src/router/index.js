import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import account from './account'
import camera from './camera'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: 'Home',
    },
    {
      path: '*',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: 'Home',
    },
    {
      path: '/home',
      name: 'Home',
      // redirect: '/',
      component: () => import('../views/home/home')
    },
    {
      path: '/display',
      name: 'display',
      // redirect: '/',
      component: () => import('../views/display/display')
    },
    ...account,
    ...camera
  ]
})
