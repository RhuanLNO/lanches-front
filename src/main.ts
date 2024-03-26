import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaHamburger, GiSushis, GiSandwich, MdFitnesscenter, FaPizzaSlice, GiCupcake, IoLogoInstagram, IoLogoWhatsapp, MdPhoneRound } from "oh-vue-icons/icons";
import 'material-design-icons-iconfont/dist/material-design-icons.css' 

const vuetify = createVuetify({
  components,
  directives,
})

addIcons(FaHamburger, GiSushis, GiSandwich, MdFitnesscenter, FaPizzaSlice, GiCupcake, IoLogoInstagram, IoLogoWhatsapp, MdPhoneRound)

const app = createApp(App)

app.use(vuetify)
app.component("v-icon", OhVueIcon);
app.mount('#app')
