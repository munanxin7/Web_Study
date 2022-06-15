// 路由模块
// 导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'
import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'

// 调用 Vue.use() 函数把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 创建路由的实例对象
const router = new VueRouter({
  // routers 是一个数组，作用：定义 hash地址 与 组件 之间的对应关系
  routes: [
    // 路由规则
    // 路由重定向
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    // 通过 props 属性开启动态传参
    { path: '/movie/:id', component: Movie, props: true },
    {
      path: '/about',
      component: About,
      children: [
        { path: '', redirect: 'tab1' },
        { path: 'tab1', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    },
    { path: '/login', component: Login },
    { path: '/main', component: Main }
  ]
})

// 为 router 实例对象声明全局前置导航守卫
// 只要发生了路由的跳转，必然会触发 beforeEach 指定的 function 回调函数
router.beforeEach((to, from, next) => {
  // to 表示将要访问的路由的信息对象
  // console.log(to)
  // from 表示将要离开的路由的信息对象
  // console.log(from)
  // next 函数表示放行
  /*
  拿到用户将要访问的 hash 地址
  判断 hash 是否 等于 /main
  如果等于 /main，证明需要登录之后，才能放行
    如果访问的地址是 /main，则需要读取 localStorage中的 token 值
      如果有 token，则放行
      否则跳转至登录页面
  否则直接放行
   */

  if (to.path === '/main') {
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
