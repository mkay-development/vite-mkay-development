<template>
  <div class="grid grid-cols-6">
    <div class="col-span-2">
      <section v-if="user" class="card">
        <img
          :src="
            'https://admin.mkay-development.de/api/files/' +
            user['@collectionId'] +
            '/' +
            user.id +
            '/' +
            user.avatar +
            '?thumb=160x90'
          "
          alt=""
        />
        <p>
          {{ user.created }} <br />
          {{ user.name }} <br />
          {{ user.userId }}
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useBackendStore } from "../../store/backend";
import { useUserStore } from "../../store/user";

let store = useBackendStore();
let userStore = useUserStore();
let user = ref({});

let client = store.init();

onMounted(function () {
  load();
});

let load = function () {
  fetch(
    "https://admin.mkay-development.de/api/users/" +
      localStorage.getItem("userid"),
    {
      method: "GET",
      headers: { Authorization: "User " + localStorage.getItem("token") },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.profile) {
        user.value = data.profile;
      }
    });
};
</script>
