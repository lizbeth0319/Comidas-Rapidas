import { createApp } from 'vue'
import {Quasar} from 'quasar'
import { router } from '../Router/router'
import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'
import App from './App.vue'

const app =createApp(App)
/* app.use(router); */
app.use(router)
app.use(Quasar,{
    plugins:{},
})

app.mount('#app')

/* import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import { router } from './router' // importa el router
import quasarUserOptions from './quasar-user-options'

const app = createApp(App)
app.use(Quasar, quasarUserOptions)
app.use(router) // usar router
app.mount('#app')
 */