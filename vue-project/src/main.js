import { 
    createApp 
} from 'vue'

import App from './App.vue'
import router from './router'
import mixins from './mixins'
import Tailwind from './Tailwind.css'

const app = createApp(App)
app.use(router)
app.mixin(mixins)
app.mixin(Tailwind)
app.mount('#app')