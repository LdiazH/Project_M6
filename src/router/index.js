import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Opinion from '../views/Opinion.vue'
// import NotFoundView from '@/views/NotFoundView.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
   
  },
  {
    path:'/opiniones/:name',
    props:true,
    component: () => import(/* webpackChunkName: "opinion" */ '../views/Opinion.vue')

  }
  ,
  {
  path:'*',
  // component: NotFoundView
  
   component: () => import(/* webpackChunkName: "about" */ '../views/NotFoundView.vue')
  },
  {
  path:'/opiniones/:name',
  // component: NotFoundView
  
   component: () => import(/* webpackChunkName: "about" */ '../views/NotFoundOp.vue')
  }
  // {
  //   path: '/opiniones/:nombre',
  //   name:'opiniones',
  //   component: Opinion,
  //   props:{
  //     require:true,

  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
