import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/farmers',
    name: 'Farmers and Community',
    component: () => import(/* webpackChunkName: "farmers" */ '../views/FarmersAndCommunity.vue')
  },
  {
    path: '/pase-farm',
    name: 'PASE farm',
    component: () => import(/* webpackChunkName: "farm" */ '../views/PaseFarm.vue')
  },
  {
    path: '/pase-mill',
    name: 'PASE mill',
    component: () => import(/* webpackChunkName: "mill" */ '../views/PaseMill.vue')
  },
  {
    path: '/partners-links',
    name: 'Partners and Links',
    component: () => import(/* webpackChunkName: "partners" */ '../views/PartnersLinks.vue')
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import(/* webpackChunkName: "research" */ '../views/Research.vue')
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: () => import(/* webpackChunkName: "contact-us" */ '../views/ContactUs.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
