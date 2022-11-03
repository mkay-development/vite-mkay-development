<template>
  <h2 class="text-lg font-bold mb-2 mx-2">Kunden</h2>
  <div class="grid grid-cols-6 gap-3">
    <div v-for="(item, index) in items" class="col-span-6 md:col-span-2">
      <section class="card border border-black rounded-lg px-2 py-2">
        <a :href="item.link" target="_blank">
          <img
            :src="
              'https://admin.mkay-development.de/api/files/' +
              item['@collectionId'] +
              '/' +
              item.id +
              '/' +
              item.media +
              '?thumb=160x90'
            "
            alt=""
          />
        </a>
        <h2 class="px-2 mt-2 font-bold">{{ item.name }}</h2>
        <p class="px-2">
          {{ item.desc }}
        </p>
        <div class="tags mt-3">
          <ul class="flex">
            <li
              v-for="(skill, index) in item.skills"
              class="bg-gray-50 border border-gray-300 rounded-lg px-2 py-2 mx-2"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useBackendStore } from "../store/backend";
import { onMounted, ref } from "vue";
import { useBreadcrumbStore } from "@/store/breadcrumb";

let store = useBackendStore();
let items = ref([]);
let breadcrumbStore = useBreadcrumbStore();

breadcrumbStore.add({
  link: "/projects",
  label: "Projects",
});

onMounted(function () {
  load();
});

let load = function () {
  let client = store.init();

  const result = client.records.getList("projects", 1, 50, {});

  result.then(function (data) {
    items.value = data.items.reverse();
  });
};
</script>
