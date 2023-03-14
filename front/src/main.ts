import { createApp } from 'vue'
import './reset.less'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import "uno.css"
import 'ant-design-vue/dist/antd.css';


const app = createApp(App)
app.use(Antd)
app.use(router).mount('#app')


