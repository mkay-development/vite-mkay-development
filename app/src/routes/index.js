import {createWebHistory, createRouter} from 'vue-router'

import Home from '@/pages/home.vue';
import Impressum from '@/pages/impressum.vue';
import Kunden from '@/pages/kunden.vue';
import Kontakt from '@/pages/kontakt.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: Impressum },
  { path: '/kunden', component: Kunden },
  { path: '/kontakt', component: Kontakt },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})