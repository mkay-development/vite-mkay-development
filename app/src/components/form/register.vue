<template>
  <form class="">
    <h2 class="font-bold text-lg mb-6">Register</h2>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
        >Deine Email Addresse</label
      >
      <input
        type="email"
        v-model="email"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder="test@jmartz.de"
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-medium text-gray-900"
        >Dein Passwort</label
      >
      <input
        type="password"
        v-model="password"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder="Passwort"
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-medium text-gray-900"
        >Dein Passwort bestätigen</label
      >
      <input
        type="password"
        v-model="passwordConfirm"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder="Passwort bestätigen"
      />
    </div>
    <div class="form-input text-right">
      <button
        @click.prevent="register()"
        class="px-2 py-2 bg-gray-50 border border-gray-300 rounded-lg"
      >
        Register
      </button>
    </div>
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMessageStore } from "@/store/messages";
import { useRouter} from 'vue-router'

let email = ref("");
let password = ref("");
let passwordConfirm = ref("");
let store = useMessageStore();
let router = useRouter();

let register = function () {
  fetch("https://admin.mkay-development.de/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.code == 400) {
        store.add({
          message: "Es gab einen Fehler bei der Anfrage",
          status: "warning",
        });
      }
      else {
        router.push('/login');
      }
    });
};
</script>
