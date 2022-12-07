<template>
    <h2 class="mx-2 mb-2 text-lg font-bold">Kunden</h2>
    <div class="grid grid-cols-6 gap-3">
      <div v-for="(item, index) in items" class="col-span-6 md:col-span-2">
        <section class="px-2 py-2 border border-black rounded-lg card">
          <a :href="item.link" target="_blank">
            <img
              :src="
                'https://admin.mkay-development.de/api/files/' +
                item['collectionId'] +
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
          <div class="mt-3 tags">
            <ul class="flex">
              <li
                v-for="(skill, index) in item.tags"
                class="px-2 py-2 mx-2 border border-gray-300 rounded-lg bg-gray-50"
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
import { useBackendStore } from '../store/backend';
import { onMounted, ref } from 'vue';
import { useBreadcrumbStore } from '@/store/breadcrumb';

const store = useBackendStore();
const items = ref([]);
const breadcrumbStore = useBreadcrumbStore();

breadcrumbStore.add({
  link: '/kunden',
  label: 'Kunden'
});

onMounted(function () {
  load();
});

  const load = function () {
  fetch('https://admin.mkay-development.de/api/collections/customer/records', {
    method: 'GET',
    headers: { Authorization: 'User ' + localStorage.getItem('token') }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      items.value = data.items;
    });
};
</script>
