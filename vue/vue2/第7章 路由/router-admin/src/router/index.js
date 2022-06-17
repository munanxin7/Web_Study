// 导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'
import pathArr from '@/router/pathArr.js'

// 导入需要的组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'

// 调用 Vue.use() 函数把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    // 登录的路由规则
    { path: '/login', component: Login },
    // 主页的路由规则
    {
      path: '/home',
      component: Home,
      redirect: '/home/users',
      children: [
        { path: 'users', component: Users },
        { path: 'rights', component: Rights },
        { path: 'goods', component: Goods },
        { path: 'orders', component: Orders },
        { path: 'settings', component: Settings },
        { path: 'userinfo/:id', component: UserDetail, props: true }
      ]
    }
  ]
})

// 路由的全局前置守卫
router.beforeEach(function (to, from, next) {
  if (pathArr.indexOf(to.path) !== -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

// 向外共享路由的实例对象
export default router
