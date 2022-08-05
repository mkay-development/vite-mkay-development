<template>
  <div class="app">
    <header class="mx-auto max-w-5xl px-2 py-2">
      <header-general></header-general>
    </header>
    <nav-content class="mx-auto max-w-5x px-2 py-2 bg-white"></nav-content>
    <main class="mx-auto max-w-5xl bg-white px-2 py-2 mt-2 min-h-screen">
      <router-view></router-view>
    </main>
    <footer class="mx-auto max-w-5xl px-2 py-2 mt-2">
      <footer-general></footer-general>
    </footer>
  </div>
</template>
<script setup>
import headerGeneral from "./components/header.vue";
import footerGeneral from "./components/footer.vue";
import navContent from "./components/nav/content.vue";
import { useRoute } from "vue-router";

import "./tailwind.css";
import { watch } from "vue";
let route = useRoute();

watch(route, function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<style lang="less">
.app {
  background: linear-gradient(-45deg, #ee7752, #e73c7e);
  background-size: auto;
}
</style>
