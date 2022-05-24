import Vue from 'vue'
import App from './App.vue'
// 导入需要被全局注册的组件
import Count from '@/components/Count.vue'

Vue.component('MyCount', Count)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')