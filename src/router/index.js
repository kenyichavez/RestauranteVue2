import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'home', component: () => import('../views/HomeView/Home.vue')

  },
  {
    path: '/about', name: 'about', component: () => import('../views/AboutUsView/AboutView.vue')
  },
  {
    path: '/contact', name: 'contact', component: () => import('../views/ContactView/Contact.vue')
  },
  {
    path: '/event', name: 'event', component: () => import('../views/EventView/Event.vue')
  },
  {
    path: '/gallery', name: 'gallery', component: () => import('../views/GalleryView/Gallery.vue')
  },
  {
    path: '/menu', name: 'menu', component: () => import('../views/MenuView/Menu.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
