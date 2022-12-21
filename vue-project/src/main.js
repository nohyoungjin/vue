import { 
    createApp 
} from 'vue'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import mixins from './mixins'
import './Tailwind.css'

const app = createApp(App)
app.use(router)
app.mixin(mixins)
app.mount('#app')

app.config.globalProperties.$axios = axios // vue 컴포넌트에서 this.$http로 요청할 수 있게 된다. (Vue 3)