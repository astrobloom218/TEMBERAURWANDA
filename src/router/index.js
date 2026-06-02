import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import DestinationPage from '../views/DestinationPage.vue'
import Photos from '../views/Photos.vue'
import Videos from '../views/Videos.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/services',
    name: 'Services',
    component: Services
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/destinations/:region',
    name: 'Destination',
    component: DestinationPage
  },

  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  },

  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },

  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
