import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from "./plugins/vuetify.js";
import router from "./router/index.js";
import pinia from "./stores/index.js";

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vuetify)
app.mount('#app')
