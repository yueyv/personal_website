import { createApp } from 'vue'
import './reset.less'
import App from './App.vue'
import 'animate.css';
import Antd from 'ant-design-vue';
import router from './router'
import "uno.css"
import { createPinia, PiniaPluginContext } from 'pinia'
import 'ant-design-vue/dist/antd.css';

type Options = {
    key?: string
}

const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
const getStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
const __piniaKey__ = 'firstTime'
const piniaPlugin = (options: Options) => {
    return (context: PiniaPluginContext) => {
        const { store } = context
        const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)

        store.$subscribe(() => {
            setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
        })
        // console.log(store)
        return {
            ...data
        }
    }

}

const store = createPinia()

store.use(piniaPlugin({
    key: "pinia"
}))
const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router).mount('#app')


