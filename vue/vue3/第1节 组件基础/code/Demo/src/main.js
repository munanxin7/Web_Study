import { createApp } from 'vue'
// import App from './App.vue'
// import App from './components/03.style/App.vue'
// import App from './components/04.props/App.vue'
// import App from './components/05.class&style/App.vue'
import App from './components/App.vue'

// 导入需要被全局注册的组件
import Swiper from './components/01.globalReg/Swiper.vue'
import Test from './components/01.globalReg/Test.vue'

const app = createApp(App)
// 调用 app.component() 方法全局注册组件
app.component(Swiper.name, Swiper)
app.component(Test.name, Test)

app.mount('#app')
