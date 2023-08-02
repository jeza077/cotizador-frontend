import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiShoppingBag, LaShoppingBagSolid  } from "oh-vue-icons/icons";

addIcons(GiShoppingBag, LaShoppingBagSolid );

// import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Toast)
app.component("v-icon", OhVueIcon);


app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'