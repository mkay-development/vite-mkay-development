<template>
  <div class="grid grid-cols-6 gap-3">
    <div class="col-span-6 md:col-span-2 md:my-10">
      <img
        src="https://avatars.githubusercontent.com/u/20771653?v=4"
        alt="Profilebild Jonathan"
        class="w-32 mx-auto rounded-full"
      />
    </div>
    <div class="col-span-6 md:col-span-4 md:my-10">
      <h2 class="mt-4 font-bold text-center md:text-left">Jonathan Martz</h2>
      <p class="text-center md:text-left">
        Ich habe meine Erfahrung vorallem im Ecommerce gesammelt wo ich
        Onlineshops erstellt und danach betreut habe. Nun entwickel ich
        Webseiten für kleine Unternehmen. <br />
        Als Fullstack Webentwickler entwickel ich vorallem mit PHP & JS.
      </p>
      <div class="actions">
        <button
          @click="router.push('/kontakt')"
          class="px-3 py-3 mt-5 text-white bg-[#1f6fed]"
        >
          Kontaktiere mich Jetzt
        </button>
      </div>
    </div>
    <div v-for="(item, index) in items" class="col-span-6 md:col-span-2">
      <section class="px-2 py-2 border border-black rounded-lg card">
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
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const items = ref([]);
const router = useRouter();

const load = function () {
  fetch('https://admin.mkay-development.de/api/collections/services/records', {
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

onMounted(function () {
  load();
});
</script>
