import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Notfound from '../components/Notfound'
import Board from '../components/Board'
import Card from '../components/Card'
import store from '../store'

Vue.use(VueRouter)

//토큰 여부로 로그인되었는지 확인
const requireAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  store.getters.isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: Home,
      //네비게이션 가드
      beforeEnter: requireAuth
    },
    { 
      path: '/login', 
      component: Login 
    },
    { 
      path: '/b/:bid', 
      component: Board,
      beforeEnter: requireAuth,
      children: [{ path: 'c/:cid', component: Card }] 
    },
    { 
      path: '*', 
      component: Notfound 
    }
  ]
})

export default router