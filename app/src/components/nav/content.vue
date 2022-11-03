<template>
  <div v-if="store.open">
    <div class="grid grid-cols-6 text-center gap-y-3">
      <div class="col-span-3 sm:col-span-2 md:col-span-2">
        <router-link to="/kunden">Kunden</router-link>
      </div>
      <div class="col-span-3 sm:col-span-2 md:col-span-2">
        <router-link to="/impressum">Projekte</router-link>
      </div>
      <div v-if="isLoggedIn" class="col-span-3 sm:col-span-2 md:col-span-2">
        <router-link to="/user/profile">Profile</router-link>
      </div>
      <div v-if="isLoggedIn" class="col-span-3 sm:col-span-2 md:col-span-2">
        <button @click="userStore.logout()">Logout</button>
      </div>
      <div v-if="!isLoggedIn" class="col-span-3 sm:col-span-2 md:col-span-2">
        <router-link to="/login">Login</router-link>
      </div>
      <div class="col-span-3 sm:col-span-2 md:col-span-2">
        <router-link to="/kontakt">Anfrage stellen</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavStore } from "@/store/nav";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

let store = useNavStore();

let userStore = useUserStore();
let { isLoggedIn } = storeToRefs(userStore);
</script>
