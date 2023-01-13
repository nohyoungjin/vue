import { 
    createApp 
} from 'vue'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import mixins from './mixins'
import './Tailwind.css'

import VueCookies from 'vue-cookies'
import store from './store'
import createStore from 'vuex'

const app = createApp(App)
app.use(router)
app.mixin(mixins)
app.mount('#app')

// createApp.prototype.$http = axios;
app.config.globalProperties.$axios = axios // vue 컴포넌트에서 this.$http로 요청할 수 있게 된다. (Vue 3)

app.use(VueCookies, { 
    expires: '7d'
})

app.use(store, { 
    render: h => h(App),
    store: store
})

app.use(createStore)