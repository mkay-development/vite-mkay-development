import {createWebHistory, createRouter} from 'vue-router'

import Home from '@/pages/home.vue';
import Impressum from '@/pages/impressum.vue';
import Kunden from '@/pages/kunden.vue';
import Services from '@/pages/services.vue';
import Kontakt from '@/pages/kontakt.vue';
import Account from '@/pages/account.vue';
import UserProfile from '@/pages/user/profile.vue';
import UserLogout from '@/pages/user/logout.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: Impressum },
  { path: '/kunden', component: Kunden },
  { path: '/services', component: Services },
  { path: '/kontakt', component: Kontakt },
  { path: '/account', component: Account },
  { path: '/user/profile', component: UserProfile },
  { path: '/user/logout', component: UserLogout },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})