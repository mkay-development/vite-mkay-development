<template>
  <div class="vc-header flex justify-between mt-2">
    <router-link to="/" class="logo flex text-center mt-2">
      <span class="text-4xl mr-2 text-[#1f6fed]">{</span>
      <div class="">
        <span class="">MkaY Development</span><br />
        <span class="text-sm text-gray-700">UG haftungsbeschränkt</span>
      </div>
      <span class="text-4xl ml-2 text-[#1f6fed]">}</span>
    </router-link>
    <nav id="desktop-nav" v-if="width > 768" class="mt-5">
      <ul class="flex text-white space-x-5">
        <li>
          <router-link to="/kunden">Kunden</router-link>
        </li>
        <li>
          <router-link to="/impressum">Impressum</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/user/profile"><fa icon="user" /></router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/login"><fa icon="user" /></router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/user/logout"
            ><fa icon="right-from-bracket"
          /></router-link>
        </li>
        <li>
          <router-link to="/kontakt" class="border border-white px-2 py-2"
            >Anfrage stellen</router-link
          >
        </li>
      </ul>
    </nav>
    <nav id="mobile-nav" v-else class="mt-5 mr-3">
      <fa v-if="!open" @click="store.toggle()" class="fa-2x" icon="bars" />
      <fa v-else @click="store.toggle()" class="fa-2x" icon="times" />
    </nav>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import { useNavStore } from "@/store/nav";
import { useWindowSize } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

let store = useNavStore();
let { width } = useWindowSize();
let { open } = storeToRefs(store);
let userIsLoggedIn = ref(false);
let userStore = useUserStore();

let { isLoggedIn } = storeToRefs(userStore);
</script>
