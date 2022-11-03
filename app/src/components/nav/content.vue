<template>
  <div v-if="store.open">
    <div class="grid grid-cols-6 text-center">
      <div class="col-span-2 md:col-span-2">
        <router-link to="/kunden">Kunden</router-link>
      </div>
      <div class="col-span-2 md:col-span-2">
        <router-link to="/impressum">Projekte</router-link>
      </div>      
      <div class="col-span-2 md:col-span-2">
        <router-link to="/kontakt">Anfrage stellen</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavStore } from "@/store/nav";

let store = useNavStore();
</script>
