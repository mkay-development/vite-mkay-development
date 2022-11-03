<template>
  <div class="grid grid-cols-6 gap-3">
    <div class="col-span-6 md:col-span-2 md:my-10">
      <img
        src="https://avatars.githubusercontent.com/u/20771653?v=4"
        alt="Profilebild Jonathan"
        class="w-32 rounded-full mx-auto"
      />
    </div>
    <div class="col-span-6 md:col-span-4 md:my-10">
      <h2 class="font-bold mt-4 text-center md:text-left">Jonathan Martz</h2>
      <p class="text-center md:text-left">
        Als Fullstack Webentwickler entwickel ich vorallem mit PHP & JS. <br />
        Ich habe meine Erfahrung vorallem im Ecommerce gesammelt wo ich
        Onlineshops erstellt und danach betreut habe. Nun entwickel ich
        Webseiten für kleine Unternehmen.
      </p>
    </div>
    <div v-for="(item, index) in items" class="col-span-6 md:col-span-2">
      <section class="card border border-black rounded-lg px-2 py-2">
        <img
          :src="'https://admin.mkay-development.de/api/files/'+item['@collectionId']+'/'+item.id+'/'+item.media+'?thumb=160x90'"
          class="w-full"
          alt=""
        />
        <h2 class="px-2 mt-2 font-bold">{{ item.headline }}</h2>
        <p class="px-2">
          {{ item.desc }}
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useBackendStore } from "../store/backend";
import { ref } from "vue";
let store = useBackendStore();
let items = ref([]);

let client = store.init();

const resultList = client.records.getList("services", 1, 50, {});

resultList.then(function (data) {
  items.value = data.items;
});
</script>
