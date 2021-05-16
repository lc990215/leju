import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('pages/home/Home')
const Category = () => import('pages/category/Category')
const Brand = () => import('pages/brand/Brand')
const User = () => import('pages/user/User')
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/brand',
    component: Brand
  },
  {
    path: '/user',
    component: User
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
