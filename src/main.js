import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {zh,en,ar} from './locales/language.json'
// import arab from './locales/arab.json'
// import en from './locales/en.json'
import App from './App.vue'
import router from './router'
import { createI18n } from "vue-i18n";
import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import 'element-plus/dist/index.css'
const i18n = createI18n({
    legacy: false, // 使用 Composition API 模式
    locale: "en", // 默认语言
    fallbackLocale: "en", // 语言缺失时默认回退
    messages: {
        en, // 英文
        zh, // 中文
        ar
    },
});
window.lg = zh
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus).use(i18n);
app.mount('#app')
