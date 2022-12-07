import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import {
  faPlus,
  faEdit,
  faBars,
  faTimes,
  faTrash,
  faUser,
  faRightFromBracket,
  faEuroSign
} from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import plausible from './plugins/plausible'

library.add(
  faEdit,
  faPlus,
  faBars,
  faTimes,
  faUser,
  faRightFromBracket,
  faTrash,
  faEuroSign
)

const plausibleOptions = {
  domain: 'www.mkay-development.de',
  apiHost: 'https://tracking.jmartz.gmbh',
  hashMode: false,
  trackLocalhost: false
}

const app = createApp(App)

app.use(plausible, plausibleOptions)
app.component('fa', FontAwesomeIcon)
app.use(routes)
app.use(createPinia())
app.mount('#app')
