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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  // {
  //   path: '/info/:topic',
  //   name: 'Info',
  //   props: true,
  //   component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue'),
  // },
  {
    path: '/vision',
    name: 'Our Vision',
    component: () => import(/* webpackChunkName: "vision" */ '../views/about/Vision.vue'),
  },
  {
    path: '/mission',
    name: 'Our Mission',
    component: () => import(/* webpackChunkName: "mission" */ '../views/about/Mission.vue'),
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/about/Team.vue'),
  },
  {
    path: '/plans',
    name: 'Plans',
    component: () => import(/* webpackChunkName: "plans" */ '../views/about/Plans.vue'),
  },
  {
    path: '/history',
    name: 'History',
    component: () => import(/* webpackChunkName: "history" */ '../views/about/History.vue'),
  },
  {
    path: '/organisation',
    name: 'Organisation',
    component: () => import(/* webpackChunkName: "organisation" */ '../views/about/Organisation.vue'),
  },

  
  {
    path: '/farmers',
    name: 'Farmers and Community',
    component: () => import(/* webpackChunkName: "farmers" */ '../views/FarmersAndCommunity.vue')
  },
  {
    path: '/nursery',
    name: 'Community Nursery',
    component: () => import(/* webpackChunkName: "nursery" */ '../views/farmersAndCommunity/CommunityNursery.vue'),
  },
  {
    path: '/vlsa',
    name: 'VLSA Micro-Fund',
    component: () => import(/* webpackChunkName: "vlsa" */ '../views/farmersAndCommunity/VSLAMicroFund.vue'),
  },
  {
    path: '/fss',
    name: 'Farmer Support Services',
    component: () => import(/* webpackChunkName: "fss" */ '../views/farmersAndCommunity/FarmerSupportServices.vue'),
  },
  {
    path: '/training',
    name: 'Training Farmers',
    component: () => import(/* webpackChunkName: "training" */ '../views/farmersAndCommunity/TrainingFarmers.vue'),
  },
  {
    path: '/sfm',
    name: 'Smallholder Farmer Mobilazation',
    component: () => import(/* webpackChunkName: "sfm" */ '../views/farmersAndCommunity/SmallholderFarmerMobilazation.vue'),
  },
  {
    path: '/whatdev',
    name: 'What Development?',
    component: () => import(/* webpackChunkName: "whatDev" */ '../views/farmersAndCommunity/WhatDev.vue'),
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
