<template>
  <div class="app min-h-screen">
    <header class="mx-auto max-w-5xl px-2 py-2">
      <header-general></header-general>
    </header>
    <nav-content class="mx-auto max-w-5x px-2 py-2 bg-white"></nav-content>
    <main class="mx-auto max-w-5xl bg-white px-2 py-2 mt-2">
      <breadcrumb></breadcrumb>
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
import breadcrumb from "./components/breadcrumb.vue";
import { useRoute } from "vue-router";
import { useNavStore } from "./store/nav";

import "./tailwind.css";
import { watch, onMounted} from "vue";
import { storeToRefs } from "pinia";
import { useBreadcrumbStore } from "@/store/breadcrumb";

let route = useRoute();
let store = useNavStore();
let breadcrumbStore = useBreadcrumbStore();
let { items } = storeToRefs(breadcrumbStore);

watch(route, function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  store.$reset();
  breadcrumbStore.$reset();
  breadcrumbStore.add({
    link: "/",
    label: "Home",
  });
});
</script>

<style lang="less">
.app {
  background: linear-gradient(-45deg, #ee7752, #e73c7e);
  background-size: auto;
}
</style>
