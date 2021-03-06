import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import LoggedIn from '../views/LoggedInView.vue'
import Book from '../views/Book.vue'
import Player from '../views/Player.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/loggedin',
    name: 'LoggedIn',
    component: LoggedIn,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/book/:id",
    component: Book,
    name: "book"
},
{
  path: "/player/:id",
  component: Player,
  name: "player"
},
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {

  if (to.meta.requiresAuth == true && router.app.$store.state.auth.authenticated == false) {
    next({ name: 'SignIn' })


  } else {
    next()
  }



})


export default router