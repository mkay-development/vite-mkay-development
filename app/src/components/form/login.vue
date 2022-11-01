<template>
  <form class="">
    <h2 class="font-bold text-lg mb-6">Login</h2>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
        >Deine Email Adresse</label
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
    <div class="form-input text-right">
      <button
        @click.prevent="login()"
        class="px-2 py-2 bg-gray-50 border border-gray-300 rounded-lg"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

let email = ref("");
let password = ref("");
let store = useUserStore();
let router = useRouter();

let login = function () {
  fetch("https://admin.mkay-development.de/api/users/auth-via-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.value, password: password.value }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      store.login(data.user.id, data.token);
      router.push("/");
    });
};
</script>
