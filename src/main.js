import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import SvgIcon from './icons'

const app = createApp(App)

SvgIcon(app)

app.use(store).use(router).mount('#app')
