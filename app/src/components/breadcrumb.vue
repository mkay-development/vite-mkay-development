import { useBreadcrumbStore } from '../store/breadcrumb'; import { storeToRefs }
from 'pinia';
<template>
  <section id="breadcrumb" class="mb-3">
    <nav class="bg-gray-200 px-5 py-3 rounded-md w-full">
      <ul class="list-reset flex">
        <li v-for="(item, index) in items">
          <router-link :to="item.link">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup>
import { useBreadcrumbStore } from "@/store/breadcrumb";
import { storeToRefs } from "pinia";

let store = useBreadcrumbStore();
let { items } = storeToRefs(store);
</script>

<style lang="less" scoped>
ul li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}
</style>