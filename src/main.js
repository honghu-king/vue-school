import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 创建应用实例
const app=createApp(App)
//创建pinia实例
const pinia=createPinia()
// 遍历ElementPlusIconsVue对象，将每个图标组件添加到应用实例中
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
  app.component(key,component)
}
// 使用插件
app.use(router)   // 路由
app.use(pinia)    // 状态管理
app.use(ElementPlus)  // UI 组件库
// 挂载到 index.html 中的 #app 元素
app.mount('#app')
