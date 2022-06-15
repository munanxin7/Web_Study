import Vue from 'vue'
import App from './App2.vue'
// 导入路由模块，拿到路由的实例对象
import router from '@/router/index.js'

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 全局样式
import '@/assets/global.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  // 在 Vue 项目中，路由必须进行挂载
  router
}).$mount('#app')
